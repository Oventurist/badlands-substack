import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Clean Wisconsin","description":"","frontmatter":{"title":"Clean Wisconsin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","wisconsin","environmentalism","data-centers"],"sources":["raw/badlands-brief-a6b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/clean-wisconsin.md","filePath":"entities/clean-wisconsin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/clean-wisconsin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="clean-wisconsin" tabindex="-1">Clean Wisconsin <a class="header-anchor" href="#clean-wisconsin" aria-label="Permalink to &quot;Clean Wisconsin&quot;">​</a></h1><p>Clean Wisconsin is a Wisconsin-based environmental nongovernmental organization that opposed the proposed AI data center campus in <a href="/entities/port-washington">Port Washington</a>, Wisconsin, in 2026.[1]</p><p>The group&#39;s communications director, Amy Barrileaux, described the municipal referendum on data center tax incentives as &quot;a natural reaction&quot; to rapid transformation, saying &quot;It is people trying to get some kind of control over what is going on.&quot;[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> noted that Barrileaux&#39;s organization itself opposes the project, and questioned her framing of the campaign as organic, arguing instead that residents appeared to be following the lead of NGOs and influencers such as comedian <a href="/entities/charlie-berens">Charlie Berens</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;On-Ramps to Off-Ramps and the Beginnings of the Golden Age&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a6b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a6b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/clean-wisconsin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cleanWisconsin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cleanWisconsin as default
};
