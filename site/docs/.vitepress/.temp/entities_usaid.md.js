import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"USAID","description":"","frontmatter":{"title":"USAID","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["foreign-aid","labor-unions","democracy-promotion","us-government"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/usaid.md","filePath":"entities/usaid.md","lastUpdated":null}');
const _sfc_main = { name: "entities/usaid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="usaid" tabindex="-1">USAID <a class="header-anchor" href="#usaid" aria-label="Permalink to &quot;USAID&quot;">​</a></h1><p>The United States Agency for International Development (USAID) is the U.S. federal agency responsible for administering civilian foreign aid and development assistance. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, USAID is identified as one of the two principal funders (alongside the <a href="/entities/national-endowment-for-democracy">NED</a>) of the AFL-CIO&#39;s <a href="/entities/solidarity-center">Solidarity Center</a>.</p><h2 id="role-in-labor-operations" tabindex="-1">Role in labor operations <a class="header-anchor" href="#role-in-labor-operations" aria-label="Permalink to &quot;Role in labor operations&quot;">​</a></h2><p>The article places USAID at the center of the U.S. government&#39;s influence over foreign labor movements. It states that the founding of the <a href="/entities/american-institute-for-free-labor-development">American Institute for Free Labor Development (AIFLD)</a> in 1962 was &quot;bankrolled by none other than USAID and the CIA,&quot; training over 25,000 Latin American unionists in &quot;anti-communist&quot; tactics at Virginia camps. AIFLD graduates are described as having led strikes that destabilized leftist governments, such as that of Guyana&#39;s <a href="/entities/cheddi-jagan">Cheddi Jagan</a> and in the lead-up to Brazil&#39;s 1964 coup.</p><p>In the modern period, the article notes that the Solidarity Center receives $30–50 million annually from NED and USAID, and that following the 2021 Myanmar coup the Center channeled USAID and NED funds to unions opposing the military regime.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/usaid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usaid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usaid as default
};
