import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill de Blasio","description":"","frontmatter":{"title":"Bill de Blasio","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york-city","mayor","democrats","investigations"],"sources":["raw/badlands-news-brief-204.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bill-de-blasio.md","filePath":"entities/bill-de-blasio.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-de-blasio.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-de-blasio" tabindex="-1">Bill de Blasio <a class="header-anchor" href="#bill-de-blasio" aria-label="Permalink to &quot;Bill de Blasio&quot;">​</a></h1><p>Bill de Blasio is a Democratic politician who served as mayor of New York City immediately before <a href="/entities/eric-adams">Eric Adams</a>.[1]</p><h2 id="campaign-finance-investigation" tabindex="-1">Campaign finance investigation <a class="header-anchor" href="#campaign-finance-investigation" aria-label="Permalink to &quot;Campaign finance investigation&quot;">​</a></h2><p>De Blasio was investigated in 2017 over his fundraising practices, and no charges were ultimately brought against him.[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> invoked that outcome when assessing Adams&#39;s claim that Black candidates for office are held to a higher, unfair standard, noting that de Blasio&#39;s investigation ended without charges and that the Biden family had continued to skirt consequences despite what she characterized as far more serious influence-peddling and public corruption allegations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Narrative Shielding &amp; Biden Bait&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-204" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-204</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-de-blasio.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billDeBlasio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billDeBlasio as default
};
