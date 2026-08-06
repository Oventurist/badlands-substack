import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sweden","description":"","frontmatter":{"title":"Sweden","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["europe","nord-stream","investigations","baltic-sea"],"sources":["raw/badlands-news-brief-3c0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sweden.md","filePath":"entities/sweden.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sweden.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sweden" tabindex="-1">Sweden <a class="header-anchor" href="#sweden" aria-label="Permalink to &quot;Sweden&quot;">​</a></h1><p>Sweden is a Nordic country whose authorities conducted one of the three national investigations into the September 2022 destruction of the Nord Stream gas pipelines in the Baltic Sea.[1]</p><h2 id="nord-stream-investigation" tabindex="-1">Nord Stream investigation <a class="header-anchor" href="#nord-stream-investigation" aria-label="Permalink to &quot;Nord Stream investigation&quot;">​</a></h2><p>Gas leaks in each of the Nord Stream 1 and Nord Stream 2 pipelines were discovered at the end of September 2022 from infrastructure just outside Swedish and Danish territorial waters.[1] A Swedish investigation concluded that the leaks were the result of detonations, likely the product of &quot;serious sabotage.&quot;[1]</p><p>In early February 2024, however, Swedish authorities closed their preliminary investigation into the blasts, finding that they lacked jurisdiction to continue because the incident occurred in international waters and involved no Swedish nationals.[1] <a href="/entities/denmark">Denmark</a> followed later that month, with the Copenhagen police announcing on February 26, 2024 that the joint investigation by the Copenhagen Police and the Danish Security and Intelligence Service (PET) had been concluded for insufficient grounds to pursue a criminal case.[1]</p><p>Commenting in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, <a href="/entities/burning-bright">Burning Bright</a> noted that Denmark&#39;s stated reason was a slight variation on Sweden&#39;s jurisdictional excuse — something Swedish authorities apparently took over a year to determine — and that <a href="/entities/germany">Germany</a> alone was continuing its own inquiry, with no guarantee any report would be made public.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Trounces Haley (Again) as the Media Spins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3c0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3c0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sweden.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sweden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sweden as default
};
