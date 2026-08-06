import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Salesforce","description":"","frontmatter":{"title":"Salesforce","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["business","technology","cloud-software","artificial-intelligence"],"sources":["raw/badlands-news-brief-4ee.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/salesforce.md","filePath":"entities/salesforce.md","lastUpdated":null}');
const _sfc_main = { name: "entities/salesforce.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="salesforce" tabindex="-1">Salesforce <a class="header-anchor" href="#salesforce" aria-label="Permalink to &quot;Salesforce&quot;">​</a></h1><p>Salesforce is an American cloud software company led by chief executive <a href="/entities/marc-benioff">Marc Benioff</a>.[1]</p><h2 id="ai-automation-and-workforce-reduction" tabindex="-1">AI automation and workforce reduction <a class="header-anchor" href="#ai-automation-and-workforce-reduction" aria-label="Permalink to &quot;AI automation and workforce reduction&quot;">​</a></h2><p>In 2025 Salesforce laid off approximately 4,000 customer support employees as artificial intelligence took on an increasing share of its service operations.[1] Benioff disclosed the cuts on the Logan Bartlett podcast released on August 29, 2025, stating that the support organization had shrunk from about 9,000 to roughly 5,000 people — a reduction of nearly 45 percent in that division.[1] The episode was cited in the Badlands News Brief as a leading example of AI-driven displacement in the technology sector, which the brief described as &quot;reeling from mass layoffs after layoffs&quot; as firms automate roles.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Heightened Homohysteria, AI Scabs, &amp; A Dutch Diddler&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4ee" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4ee</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/salesforce.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const salesforce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  salesforce as default
};
