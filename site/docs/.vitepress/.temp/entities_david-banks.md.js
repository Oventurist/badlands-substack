import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Banks","description":"","frontmatter":{"title":"David Banks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york-city","education","schools-chancellor","federal-investigation"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-banks.md","filePath":"entities/david-banks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-banks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-banks" tabindex="-1">David Banks <a class="header-anchor" href="#david-banks" aria-label="Permalink to &quot;David Banks&quot;">​</a></h1><p>David Banks served as New York City&#39;s Commissioner of Schools during the administration of Mayor <a href="/entities/eric-adams">Eric Adams</a> and was identified in September 2024 as part of the cluster of city officials connected to a federal investigation that produced raids on officials&#39; homes and the resignation of Police Commissioner <a href="/entities/edward-caban">Edward Caban</a>.[1]</p><p>Banks is the brother of <a href="/entities/philip-banks-iii">Philip Banks III</a>, the deputy mayor for public safety, and of <a href="/entities/terrence-banks">Terrence Banks</a>, who operates the Pearl Alliance consultancy.[1] He is engaged to Deputy Mayor <a href="/entities/sheena-wright">Sheena Wright</a>, a lawyer whose home was also raided.[1]</p><p>Badlands presented the Banks family&#39;s simultaneous control of the schools portfolio, the public-safety deputy mayoralty, a deputy-mayor fiancée, and a firm representing city contractors as an illustration of interlocking nepotism inside New York City government.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-banks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidBanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidBanks as default
};
