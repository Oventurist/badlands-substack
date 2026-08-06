import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"JAMA","description":"","frontmatter":{"title":"JAMA","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["medical-journals","publishing","health","research"],"sources":["raw/badlands-news-brief-2e4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jama.md","filePath":"entities/jama.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jama.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jama" tabindex="-1">JAMA <a class="header-anchor" href="#jama" aria-label="Permalink to &quot;JAMA&quot;">​</a></h1><p><strong>JAMA</strong> (the Journal of the American Medical Association) is a peer-reviewed medical journal that publishes clinical research, reviews and guidelines.[1]</p><h2 id="cannabis-evidence-review" tabindex="-1">Cannabis evidence review <a class="header-anchor" href="#cannabis-evidence-review" aria-label="Permalink to &quot;Cannabis evidence review&quot;">​</a></h2><p>In 2025 JAMA published a large review led by <a href="/entities/ucla-health">UCLA Health</a> finding that <a href="/concepts/medical-cannabis">medical cannabis</a> lacks strong scientific evidence for most of the conditions it is commonly used to treat, including chronic pain, anxiety and insomnia.[1] The analysis synthesized more than 2,500 studies published between January 2010 and September 2025, with particular attention to over 120 higher-quality studies, and was first-authored by Dr. <a href="/entities/michael-hsu">Michael Hsu</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Escalating Elections, Fragmented Forums, &amp; Merry Murder Metrics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jama.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jama = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jama as default
};
