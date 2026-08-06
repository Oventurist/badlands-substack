import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Remark Holdings","description":"","frontmatter":{"title":"Remark Holdings","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","contracting","new-york-city","artificial-intelligence"],"sources":["raw/badlands-news-brief-502.md"],"confidence":"low"},"headers":[],"relativePath":"entities/remark-holdings.md","filePath":"entities/remark-holdings.md","lastUpdated":null}');
const _sfc_main = { name: "entities/remark-holdings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="remark-holdings" tabindex="-1">Remark Holdings <a class="header-anchor" href="#remark-holdings" aria-label="Permalink to &quot;Remark Holdings&quot;">​</a></h1><p>Remark Holdings is a technology company that surfaced in reporting on the corruption investigations surrounding the administration of New York City Mayor <a href="/entities/eric-adams">Eric Adams</a>.[1]</p><p><a href="/entities/politico">POLITICO</a> reported in late September 2024 that Adams adviser <a href="/entities/timothy-pearson">Timothy Pearson</a> pushed the New York City fire department to ink a contract with Remark Holdings while Pearson maintained a close personal relationship with a consultant for the firm.[1] The episode was cited in Badlands commentary as an illustration of how contract-approval authority concentrated in a single mayoral aide could be routed toward favored vendors.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sidecar Debates at Home, Missile Barrages Abroad&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-502" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-502</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/remark-holdings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const remarkHoldings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  remarkHoldings as default
};
