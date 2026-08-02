import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Federation of Trade Unions","description":"","frontmatter":{"title":"World Federation of Trade Unions","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["labor-unions","cold-war","international-organizations"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/world-federation-of-trade-unions.md","filePath":"entities/world-federation-of-trade-unions.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-federation-of-trade-unions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-federation-of-trade-unions" tabindex="-1">World Federation of Trade Unions <a class="header-anchor" href="#world-federation-of-trade-unions" aria-label="Permalink to &quot;World Federation of Trade Unions&quot;">​</a></h1><p>The World Federation of Trade Unions (WFTU) was an international labor association founded after World War II as a short-lived attempt at a global labor union that included Soviet affiliates. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, the WFTU figures as an early casualty of U.S. covert labor operations.</p><h2 id="sabotage-by-the-afl" tabindex="-1">Sabotage by the AFL <a class="header-anchor" href="#sabotage-by-the-afl" aria-label="Permalink to &quot;Sabotage by the AFL&quot;">​</a></h2><p>The article states that by 1945 the <a href="/entities/american-federation-of-labor">AFL</a> had &quot;successfully sabotaged&quot; the WFTU &quot;by withdrawing and denouncing it as a communist front.&quot; The article presents this episode as setting the pattern by which U.S. agencies would use unions to fracture international solidarity, &quot;prioritizing anti-communism (eventually rebranded post-Cold War as &#39;democracy promotion&#39;) over workers&#39; rights.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-federation-of-trade-unions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldFederationOfTradeUnions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldFederationOfTradeUnions as default
};
