import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Barber II","description":"","frontmatter":{"title":"William Barber II","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["activism","clergy","tennessee","badlands-news-brief"],"sources":["raw/badlands-news-brief-001.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/william-barber-ii.md","filePath":"entities/william-barber-ii.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-barber-ii.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-barber-ii" tabindex="-1">William Barber II <a class="header-anchor" href="#william-barber-ii" aria-label="Permalink to &quot;William Barber II&quot;">​</a></h1><p>Bishop William Barber II is an American clergyman and social activist. On April 17, 2023 he led a protest against gun violence at the Tennessee State Capitol, during which state Representative <a href="/entities/justin-jones">Justin Jones</a> carried a child-size prop coffin through the building and attempted to bring it into the legislature.[1]</p><p>Video circulating online showed Capitol security stopping Barber and Jones. In the footage Barber asks, &quot;Is that a constitutional rule? Or state rule?&quot; after the sergeant-at-arms refused to allow the casket onto the House floor, citing &quot;House rules. No props.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: FOX Guarding the Hen House?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-001" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-001</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-barber-ii.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamBarberIi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamBarberIi as default
};
