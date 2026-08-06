import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ron Paul","description":"","frontmatter":{"title":"Ron Paul","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["libertarian","central-banking","congress","texas"],"sources":["raw/badlands-news-brief-120.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ron-paul.md","filePath":"entities/ron-paul.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ron-paul.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ron-paul" tabindex="-1">Ron Paul <a class="header-anchor" href="#ron-paul" aria-label="Permalink to &quot;Ron Paul&quot;">​</a></h1><p>Ron Paul is a former U.S. congressman and presidential candidate best known for his sustained opposition to the central banking system, and the father of Kentucky Senator <a href="/entities/rand-paul">Rand Paul</a>.[1]</p><h2 id="legacy" tabindex="-1">Legacy <a class="header-anchor" href="#legacy" aria-label="Permalink to &quot;Legacy&quot;">​</a></h2><p>Badlands writer <a href="/entities/burning-bright">Burning Bright</a> noted that Rand Paul&#39;s public stance against the Central Banking Cartel is held &quot;in keeping with the legacy of his father, Ron Paul,&quot; alongside the younger Paul&#39;s war with Anthony Fauci over Big Pharma.[1] That inherited monetary-reform posture is treated in the Badlands framing as a core element of the Paul political brand within the Truth Community.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;J6 Returns to Headlines as Fear Mars AI and Airplanes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-120" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-120</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ron-paul.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ronPaul = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ronPaul as default
};
