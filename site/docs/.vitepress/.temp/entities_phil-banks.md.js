import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Phil Banks","description":"","frontmatter":{"title":"Phil Banks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york-city","corruption","law-enforcement","resignations"],"sources":["raw/badlands-news-brief-4bb.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/phil-banks.md","filePath":"entities/phil-banks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/phil-banks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="phil-banks" tabindex="-1">Phil Banks <a class="header-anchor" href="#phil-banks" aria-label="Permalink to &quot;Phil Banks&quot;">​</a></h1><p>Phil Banks served as New York City&#39;s deputy mayor for public safety in the administration of Mayor <a href="/entities/eric-adams">Eric Adams</a>.[1]</p><h2 id="resignation" tabindex="-1">Resignation <a class="header-anchor" href="#resignation" aria-label="Permalink to &quot;Resignation&quot;">​</a></h2><p>Banks resigned on Sunday, October 6, 2024, becoming the sixth top city official to step down within four weeks.[1] His home had been raided and his personal devices seized by federal investigators the previous month as part of a federal probe that appeared to be separate from the investigation that produced the federal indictment of Mayor Adams.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>Adams had become the first sitting New York mayor to be federally indicted two weeks before Banks&#39;s resignation, facing charges of bribery, wire fraud, and other crimes; he maintained his innocence and pleaded not guilty.[1] In the wake of the indictment, City Hall saw a wave of departures and federal raids while local, state, and congressional officials called on the mayor to resign.[1] Governor <a href="/entities/kathy-hochul">Kathy Hochul</a>, who holds the power to remove a New York City mayor from office, pressed Adams to clear his administration of some top officials, saying it was important to &quot;instill the confidence that is wavering right now.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Campaign Strategies &amp; Ukrainian Nazis&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4bb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4bb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/phil-banks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const philBanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  philBanks as default
};
