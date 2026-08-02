import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hong Kong","description":"","frontmatter":{"title":"Hong Kong","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["hong-kong","china","labor-unions","protests"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/hong-kong.md","filePath":"entities/hong-kong.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hong-kong.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hong-kong" tabindex="-1">Hong Kong <a class="header-anchor" href="#hong-kong" aria-label="Permalink to &quot;Hong Kong&quot;">​</a></h1><p>Hong Kong is a Special Administrative Region of China that experienced large-scale pro-democracy protests in 2019–2020. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, Hong Kong is presented as a case study of labor unions being used to destabilize Beijing&#39;s control.</p><h2 id="the-2019–2020-protests" tabindex="-1">The 2019–2020 protests <a class="header-anchor" href="#the-2019–2020-protests" aria-label="Permalink to &quot;The 2019–2020 protests&quot;">​</a></h2><p>The article states that during the Hong Kong protests, the <a href="/entities/solidarity-center">Solidarity Center</a> &quot;quietly funneled NED grants to pro-democracy unions, notably the Hong Kong Confederation of Trade Unions (HKCTU).&quot; These funds were part of a broader $2 million <a href="/entities/national-endowment-for-democracy">NED</a> package for Hong Kong that &quot;supported labor-led strikes that paralyzed the city and fueled anti-China narratives.&quot;</p><p>The article alleges that declassified State Department cables reveal coordination with U.S. consulate officials, who &quot;saw unions as credible voices to amplify &#39;pro-democracy&#39; sentiment.&quot; It concludes that &quot;the goal wasn&#39;t worker empowerment, but destabilizing Beijing&#39;s control, aligning with DoD&#39;s Indo-Pacific strategy to counter China.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hong-kong.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hongKong = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hongKong as default
};
