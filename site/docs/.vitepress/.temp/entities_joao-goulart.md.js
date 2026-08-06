import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"João Goulart","description":"","frontmatter":{"title":"João Goulart","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["brazil","coup",1964,"aifld"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"low"},"headers":[],"relativePath":"entities/joao-goulart.md","filePath":"entities/joao-goulart.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joao-goulart.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joao-goulart" tabindex="-1">João Goulart <a class="header-anchor" href="#joao-goulart" aria-label="Permalink to &quot;João Goulart&quot;">​</a></h1><p>João Goulart was the president of Brazil deposed in the country&#39;s 1964 coup.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a> The article states that alumni of the <a href="/entities/american-institute-for-free-labor-development">American Institute for Free Labor Development</a> embedded in the metalworkers&#39; union provided intelligence to the <a href="/entities/cia">CIA</a> and the <a href="/entities/pentagon">Department of Defense</a>, which was used to justify military intervention against him.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><p>His overthrow is grouped with the removal of <a href="/entities/cheddi-jagan">Cheddi Jagan</a> in Guyana and operations in Guatemala, Honduras, the Dominican Republic, El Salvador and Chile as part of the <a href="/entities/afl-cio">AFL-CIO</a>&#39;s documented role in covert U.S. statecraft.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A More Perfect (Labor) Union&quot;, URL: <a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-more-perfect-labor-union</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joao-goulart.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joaoGoulart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joaoGoulart as default
};
