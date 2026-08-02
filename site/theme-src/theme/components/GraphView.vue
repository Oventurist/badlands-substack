<template>
  <div class="graph-wrap">
    <div class="graph-toolbar">
      <input
        v-model="query"
        class="graph-search"
        type="search"
        placeholder="Find a page…"
        @input="onQuery"
      />
      <div class="graph-legend">
        <span><i class="dot entity"></i> Entities</span>
        <span><i class="dot concept"></i> Concepts</span>
        <span class="hint">tap to select · drag to move · pinch/scroll to zoom</span>
      </div>
    </div>
    <svg ref="svgEl" class="graph-svg"></svg>
    <div v-if="selected" class="graph-action">
      <span class="graph-action-name">{{ selected.title }}</span>
      <a :href="withBase(`/${selected.section}/${selected.id}`)" class="graph-action-open">Open page →</a>
    </div>
    <div v-if="loading" class="graph-loading">Loading graph…</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";
import { withBase } from "vitepress";

const svgEl = ref(null);
const loading = ref(true);
const query = ref("");
const selected = ref(null);

const COLORS = { entities: "#4f8cff", concepts: "#ffa94d" };

let sim, svg, g, linkSel, nodeSel, labelSel, zoom, adjacency = {}, degreeOf = {}, topLabelIds = new Set(), dataRef = null;

onMounted(async () => {
  try {
    const res = await fetch(withBase("/graph-data.json"));
    dataRef = await res.json();
    render(dataRef);
  } catch (e) {
    console.error("graph load failed", e);
    loading.value = false;
  }
});

function radius(d) {
  return 5 + Math.sqrt(d.degree) * 1.6;
}

function render(data) {
  const width = Math.max(640, svgEl.value.clientWidth);
  const height = Math.max(520, window.innerHeight - 280);

  svg = d3.select(svgEl.value).attr("viewBox", [0, 0, width, height]);

  // degree + adjacency
  degreeOf = {};
  adjacency = {};
  for (const l of data.links) {
    degreeOf[l.source] = (degreeOf[l.source] || 0) + 1;
    degreeOf[l.target] = (degreeOf[l.target] || 0) + 1;
    (adjacency[l.source] ||= new Set()).add(l.target);
    (adjacency[l.target] ||= new Set()).add(l.source);
  }
  // top ~20 hub nodes always get visible labels (mobile anchors)
  topLabelIds = new Set(
    [...data.nodes]
      .map((n) => ({ id: n.id, d: degreeOf[n.id] || 1 }))
      .sort((a, b) => b.d - a.d)
      .slice(0, 20)
      .map((x) => x.id)
  );

  const nodes = data.nodes.map((n) => ({ ...n, degree: degreeOf[n.id] || 1 }));
  const links = data.links.map((l) => ({ source: l.source, target: l.target }));

  sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id((d) => d.id).distance(95).strength(0.22))
    .force("charge", d3.forceManyBody().strength(-900))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius((d) => radius(d) + 22))
    .alphaDecay(0.02);  // slower decay -> more time to spread out before settling

  zoom = d3.zoom()
    .scaleExtent([0.2, 6])
    .on("zoom", (ev) => {
      g.attr("transform", ev.transform);
      updateLabels(ev.transform.k);
    });
  svg.call(zoom);

  g = svg.append("g");

  linkSel = g.append("g").selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.5)
    .attr("stroke-width", 0.7);

  nodeSel = g.append("g").selectAll("circle")
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

  // node labels (hidden by default; shown on select / hub / zoom)
  labelSel = g.append("g").selectAll("text")
    .data(nodes)
    .join("text")
    .attr("class", "node-label")
    .attr("text-anchor", "middle")
    .attr("dy", (d) => radius(d) + 13)
    .attr("font-size", 11)
    .attr("fill", "#ddd")
    .attr("stroke", "#111")
    .attr("stroke-width", 0.4)
    .attr("paint-order", "stroke")
    .style("pointer-events", "none")
    .text((d) => d.title);

  nodeSel.append("title").text((d) => d.title);

  // TAP = select (mobile friendly) ; double-click = navigate
  nodeSel.on("click", (ev, d) => {
    ev.stopPropagation();
    selectNode(d);
  });
  nodeSel.on("dblclick", (ev, d) => {
    ev.stopPropagation();
    openPage(d);
  });
  // tap on empty background clears selection
  svg.on("click", (ev) => {
    if (ev.target === svgEl.value) clearSelection();
  });

  sim.on("tick", () => {
    linkSel
      .attr("x1", (d) => d.source.x).attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x).attr("y2", (d) => d.target.y);
    nodeSel.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    labelSel.attr("x", (d) => d.x).attr("y", (d) => d.y);
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

  updateLabels(1);
  loading.value = false;
}

function neighborsOf(id) {
  return adjacency[id] || new Set();
}

function selectNode(d) {
  selected.value = d;
  const nbrs = neighborsOf(d.id);
  const selId = d.id;

  // highlight selection + neighbors, dim the rest
  nodeSel
    .attr("fill-opacity", (n) => (n.id === selId || nbrs.has(n.id) ? 1 : 0.12))
    .attr("r", (n) => (n.id === selId ? radius(n) + 3 : radius(n)));
  linkSel
    .attr("stroke-opacity", (l) =>
      l.source.id === selId || l.target.id === selId ? 0.9 : 0.06
    )
    .attr("stroke-width", (l) =>
      l.source.id === selId || l.target.id === selId ? 1.6 : 0.7
    );
  // show labels for selection + neighbors
  labelSel
    .attr("font-size", (n) => (n.id === selId ? 13 : 10))
    .attr("fill", (n) => (n.id === selId ? "#fff" : "#ccc"))
    .style("opacity", (n) =>
      n.id === selId || nbrs.has(n.id) ? 1 : 0
    );
  // keep the graph zoomed so the selection is legible on mobile
  const k = Math.max(1.2, d3.zoomTransform(svg.node()).k);
  const t = d3.zoomIdentity
    .translate(svgEl.value.clientWidth / 2 - d.x * k, svgEl.value.clientHeight / 2 - d.y * k)
    .scale(k);
  svg.transition().duration(350).call(zoom.transform, t);
}

function openPage(d) {
  window.location.href = withBase(`/${d.section}/${d.id}`);
}

function clearSelection() {
  selected.value = null;
  nodeSel.attr("fill-opacity", 0.85).attr("r", radius);
  linkSel.attr("stroke-opacity", 0.5).attr("stroke-width", 0.7);
  updateLabels(d3.zoomTransform(svg.node()).k);
}

function updateLabels(scale) {
  if (!labelSel) return;
  const selId = selected.value?.id;
  const showAll = scale >= 1.6;
  labelSel.style("opacity", (n) => {
    if (selId && (n.id === selId || neighborsOf(selId).has(n.id))) return 1;
    if (showAll) return 0.85;
    if (topLabelIds.has(n.id)) return 0.9;
    return 0;
  });
}

function onQuery() {
  const q = query.value.trim().toLowerCase();
  if (!q || !dataRef) { clearSelection(); return; }
  const hit = dataRef.nodes.find((n) => n.title.toLowerCase().includes(q));
  if (!hit) return;
  const node = nodeSel.filter((d) => d.id === hit.id).datum();
  if (node) selectNode(node);
}
</script>

<style scoped>
.graph-wrap { position: relative; }
.graph-svg {
  width: 100%;
  min-height: 520px;
  background: var(--vp-c-bg-soft, #1e1e1e);
  border-radius: 8px;
  touch-action: none;
}
.graph-toolbar { display: flex; flex-direction: column; gap: 8px; margin-bottom: 10px; }
.graph-search {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider, #333);
  background: var(--vp-c-bg-mute, #242424);
  color: var(--vp-c-text-1);
  font-size: 14px;
  max-width: 360px;
}
.graph-legend {
  display: flex; gap: 14px; align-items: center;
  font-size: 13px; color: var(--vp-c-text-2);
  flex-wrap: wrap;
}
.graph-legend .dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px; }
.graph-legend .dot.entity { background: #4f8cff; }
.graph-legend .dot.concept { background: #ffa94d; }
.graph-legend .hint { margin-left: auto; opacity: 0.7; font-size: 12px; }
.graph-action {
  position: sticky; bottom: 12px;
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
  margin-top: 10px; padding: 10px 14px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft, #242424);
  border: 1px solid var(--vp-c-divider, #333);
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
}
.graph-action-name { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.graph-action-open {
  flex-shrink: 0;
  background: #4f8cff; color: #fff;
  padding: 8px 14px; border-radius: 8px;
  text-decoration: none; font-size: 14px; font-weight: 600;
}
.graph-loading { padding: 24px; text-align: center; color: var(--vp-c-text-2); }
:deep(.node-label) { user-select: none; }
</style>
