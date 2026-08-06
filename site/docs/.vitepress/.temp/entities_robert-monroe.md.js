import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Monroe","description":"","frontmatter":{"title":"Robert Monroe","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["esoterica","out-of-body-experience","author","loosh"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"low"},"headers":[],"relativePath":"entities/robert-monroe.md","filePath":"entities/robert-monroe.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-monroe.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-monroe" tabindex="-1">Robert Monroe <a class="header-anchor" href="#robert-monroe" aria-label="Permalink to &quot;Robert Monroe&quot;">​</a></h1><p>Robert Monroe was an American researcher and author known for his accounts of out-of-body exploration. His book <em>Far Journeys</em> detailed encounters with extradimensional entities said to cultivate human emotions as a form of energetic sustenance, a concept known as <a href="/concepts/loosh">loosh</a>.[1]</p><p>Monroe&#39;s framing described such entities as tending human emotional output &quot;much like farmers tending crops for yield,&quot; perpetuating cycles of trauma to maximize the flow of the substance that sustains their hierarchies.[1] The idea was invoked in October 2025 Badlands commentary by <a href="/entities/burning-bright">Burning Bright</a> to interpret mass political protest and media-driven outrage cycles as engineered emotional harvests.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-monroe.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertMonroe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertMonroe as default
};
