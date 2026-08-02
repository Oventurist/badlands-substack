<template>
  <div class="graph-wrap">
    <div class="graph-legend">
      <span><i class="dot entity"></i> Entities</span>
      <span><i class="dot concept"></i> Concepts</span>
      <span class="hint">drag to move · scroll to zoom · click a node to open</span>
    </div>
    <svg ref="svgEl" class="graph-svg"></svg>
    <div v-if="loading" class="graph-loading">Loading graph…</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";
import { useRouter, withBase } from "vitepress";

const svgEl = ref(null);
const loading = ref(true);
const router = useRouter();

const COLORS = { entities: "#4f8cff", concepts: "#ffa94d" };

onMounted(async () => {
  try {
    const res = await fetch(withBase("/graph-data.json"));
    const data = await res.json();
    render(data);
  } catch (e) {
    console.error("graph load failed", e);
    loading.value = false;
  }
});

function render(data) {
  const width = Math.max(640, svgEl.value.clientWidth);
  const height = Math.max(520, window.innerHeight - 260);

  const svg = d3.select(svgEl.value)
    .attr("viewBox", [0, 0, width, height]);

  // count degree per node for sizing
  const degree = {};
  for (const l of data.links) {
    degree[l.source] = (degree[l.source] || 0) + 1;
    degree[l.target] = (degree[l.target] || 0) + 1;
  }

  const nodes = data.nodes.map((n) => ({ ...n, degree: degree[n.id] || 1 }));
  const links = data.links.map((l) => ({ source: l.source, target: l.target }));

  const sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id((d) => d.id).distance(36).strength(0.4))
    .force("charge", d3.forceManyBody().strength(-90))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius((d) => radius(d) + 4));

  function radius(d) {
    return 5 + Math.sqrt(d.degree) * 1.6;
  }

  const zoom = d3.zoom()
    .scaleExtent([0.2, 6])
    .on("zoom", (ev) => g.attr("transform", ev.transform));

  svg.call(zoom);

  const g = svg.append("g");

  const link = g.append("g")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.5)
    .attr("stroke-width", 0.7);

  const node = g.append("g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", radius)
    .attr("fill", (d) => COLORS[d.section] || "#888")
    .attr("fill-opacity", 0.85)
    .attr("stroke", "#fff")
    .attr("stroke-width", 1)
    .style("cursor", "pointer")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

  // title tooltip on hover
  node.append("title").text((d) => d.title);

  // click -> navigate
  node.on("click", (ev, d) => {
    ev.stopPropagation();
    router.go(withBase(`/${d.section}/${d.id}`));
  });

  sim.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
    node
      .attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  });

  function dragstarted(ev, d) {
    if (!ev.active) sim.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
  }
  function dragged(ev, d) {
    d.fx = ev.x; d.fy = ev.y;
  }
  function dragended(ev, d) {
    if (!ev.active) sim.alphaTarget(0);
    d.fx = null; d.fy = null;
  }

  loading.value = false;
}
</script>

<style scoped>
.graph-wrap { position: relative; }
.graph-svg {
  width: 100%;
  min-height: 520px;
  background: var(--vp-c-bg-soft, #1e1e1e);
  border-radius: 8px;
}
.graph-legend {
  display: flex; gap: 18px; align-items: center;
  margin-bottom: 10px; font-size: 13px; color: var(--vp-c-text-2);
  flex-wrap: wrap;
}
.graph-legend .dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px; }
.graph-legend .dot.entity { background: #4f8cff; }
.graph-legend .dot.concept { background: #ffa94d; }
.graph-legend .hint { margin-left: auto; opacity: 0.7; }
.graph-loading { padding: 24px; text-align: center; color: var(--vp-c-text-2); }
</style>
