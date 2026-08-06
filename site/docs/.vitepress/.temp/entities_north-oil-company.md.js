import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"North Oil Company","description":"","frontmatter":{"title":"North Oil Company","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iraq","oil","kirkuk","pipelines","energy"],"sources":["raw/badlands-brief-be1.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/north-oil-company.md","filePath":"entities/north-oil-company.md","lastUpdated":null}');
const _sfc_main = { name: "entities/north-oil-company.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="north-oil-company" tabindex="-1">North Oil Company <a class="header-anchor" href="#north-oil-company" aria-label="Permalink to &quot;North Oil Company&quot;">​</a></h1><p>The <strong>North Oil Company</strong> is the <a href="/entities/iraq">Iraqi</a> state oil enterprise responsible for operations in the Kirkuk region of northern Iraq.[1]</p><h2 id="kirkuk-pipeline-readiness-july-2026" tabindex="-1">Kirkuk pipeline readiness (July 2026) <a class="header-anchor" href="#kirkuk-pipeline-readiness-july-2026" aria-label="Permalink to &quot;Kirkuk pipeline readiness (July 2026)&quot;">​</a></h2><p>In mid-July 2026, the North Oil Company announced that its Kirkuk pipeline was ready to begin pumping oil to <a href="/entities/turkey">Turkey</a>.[1] Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> observed that the announced throughput represented roughly one third of the one-million-barrel-per-day objective attached to the Turkish–Iraqi energy arrangements, and argued that reaching that pace so quickly indicated the underlying deals had been in development considerably longer than publicly acknowledged.[1]</p><p>The company&#39;s fields sit at the center of the Kirkuk project in which the <a href="/entities/turkish-petroleum-corporation">Turkish Petroleum Corporation</a> acquired a 15% stake from bp, a holding covering reserves in excess of 3 billion barrels of oil equivalent.[1] The associated export route feeds refineries at Ceyhan on Turkey&#39;s Mediterranean coast and is presented as an alternative to the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a> and Suez/Red Sea shipping corridors.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Beggar Kings Arrive Ahead of Saint Fauci&#39;s Confession&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-be1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-be1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/north-oil-company.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const northOilCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  northOilCompany as default
};
