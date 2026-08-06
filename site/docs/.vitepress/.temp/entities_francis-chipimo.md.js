import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Francis Chipimo","description":"","frontmatter":{"title":"Francis Chipimo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["zambia","central-bank","de-dollarization"],"sources":["raw/badlands-news-brief-528.md"],"confidence":"low"},"headers":[],"relativePath":"entities/francis-chipimo.md","filePath":"entities/francis-chipimo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/francis-chipimo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="francis-chipimo" tabindex="-1">Francis Chipimo <a class="header-anchor" href="#francis-chipimo" aria-label="Permalink to &quot;Francis Chipimo&quot;">​</a></h1><p>Francis Chipimo is the deputy governor for operations of the <a href="/entities/bank-of-zambia">Bank of Zambia</a>.[1] In July 2024 he announced, in a speech at a trade fair in the city of Ndola, that individuals caught using foreign currency for local transactions under the central bank&#39;s draft currency regulations could face up to ten years in prison or substantial fines.[1]</p><p>The rules he described would require the <a href="/concepts/zambian-kwacha">kwacha</a> and its subunit, the ngwee, to be used for all domestic public and private transactions in <a href="/entities/zambia">Zambia</a>, and were framed by the central bank as a response to dollarization undermining its monetary policy tools and pressuring the exchange rate.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Pushes Back as Peacemakers Posture&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-528" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-528</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/francis-chipimo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const francisChipimo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  francisChipimo as default
};
