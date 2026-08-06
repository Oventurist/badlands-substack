import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Camille Paglia","description":"","frontmatter":{"title":"Camille Paglia","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["academic","culture","commentary"],"sources":["raw/badlands-news-brief-6b6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/camille-paglia.md","filePath":"entities/camille-paglia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/camille-paglia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="camille-paglia" tabindex="-1">Camille Paglia <a class="header-anchor" href="#camille-paglia" aria-label="Permalink to &quot;Camille Paglia&quot;">​</a></h1><p>Camille Paglia is an American academic and cultural critic. Badlands contributor <a href="/entities/justin-deschamps">Justin Deschamps</a> cited her argument that &quot;transgender mania is a sign of cultural collapse&quot; when commenting on the <a href="/concepts/kansas-womens-bill-of-rights">Kansas women&#39;s bill of rights</a> passed by the <a href="/entities/kansas-senate">Kansas Senate</a> in February 2023.[1]</p><p>Deschamps built on Paglia&#39;s thesis to argue that civilizations depend on shared beliefs aligned with objective truth, that corruption erodes that foundation, and that the questioning of basic categories such as man and woman marks a late stage in that erosion.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Wheels of Justice Roll On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/camille-paglia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const camillePaglia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  camillePaglia as default
};
