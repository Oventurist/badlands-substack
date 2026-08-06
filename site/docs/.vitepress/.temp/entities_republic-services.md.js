import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Republic Services","description":"","frontmatter":{"title":"Republic Services","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["labor","waste-management","strike","corporations"],"sources":["raw/badlands-news-brief-1e6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/republic-services.md","filePath":"entities/republic-services.md","lastUpdated":null}');
const _sfc_main = { name: "entities/republic-services.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="republic-services" tabindex="-1">Republic Services <a class="header-anchor" href="#republic-services" aria-label="Permalink to &quot;Republic Services&quot;">​</a></h1><p>Republic Services is a national waste-collection and garbage-hauling company in the United States.[1] In July 2025 it became the focus of a multi-state labor dispute after workers represented by the <a href="/entities/teamsters">Teamsters</a> walked off the job.[1]</p><h2 id="_2025-multi-state-strike" tabindex="-1">2025 multi-state strike <a class="header-anchor" href="#_2025-multi-state-strike" aria-label="Permalink to &quot;2025 multi-state strike&quot;">​</a></h2><p>As the worker strike approached the two-week mark, state leaders across the country urged the company to finalize a contract and restore services amid mounting waste build-up in affected communities.[1] Republic Services told Fox News Digital it was &quot;working to resume regular trash collection as quickly as possible.&quot;[1] A company spokesperson added: &quot;A work stoppage does not benefit our employees or the communities we serve. We empathize with customers who have been impacted by the Teamsters&#39; decision to stop work.&quot;[1] The firm said customers would be notified of updates via text, phone, and email.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Grand Conspiracies &amp; Massive Reductions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1e6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1e6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/republic-services.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const republicServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  republicServices as default
};
