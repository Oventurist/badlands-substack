import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HOPS-315","description":"","frontmatter":{"title":"HOPS-315","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["astronomy","star-formation","science"],"sources":["raw/badlands-news-brief-5f2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hops-315.md","filePath":"entities/hops-315.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hops-315.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hops-315" tabindex="-1">HOPS-315 <a class="header-anchor" href="#hops-315" aria-label="Permalink to &quot;HOPS-315&quot;">​</a></h1><p>HOPS-315 is a &quot;baby star&quot; located around 1,300 light-years from Earth around which astronomers, in July 2025, watched a solar system being born for the first time.[1]</p><p>Using a powerful telescope, researchers observed the first pieces of material that will go on to form planets — a system never before seen this early in its formation.[1] Researchers hoped the discovery would allow a new understanding of how such systems form, including our own.[1] The findings are like &quot;a picture of the baby Solar System,&quot; said Merel van &#39;t Hoff, a professor at Purdue University and a co-author on the study, adding: &quot;We&#39;re seeing a system that looks like what our Solar System looked like when it was just beginning to form.&quot;[1] Researchers believe HOPS-315 resembles what the Sun would have looked like in its youth.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Double Comey Drama &amp; Magic Moon Soil&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hops-315.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hops315 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hops315 as default
};
