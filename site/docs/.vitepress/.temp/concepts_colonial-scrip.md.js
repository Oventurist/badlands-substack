import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Colonial Scrip","description":"","frontmatter":{"title":"Colonial Scrip","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["monetary-history","currency","fiat","american-colonies"],"sources":["raw/badlands-news-brief-6b6.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/colonial-scrip.md","filePath":"concepts/colonial-scrip.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/colonial-scrip.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="colonial-scrip" tabindex="-1">Colonial Scrip <a class="header-anchor" href="#colonial-scrip" aria-label="Permalink to &quot;Colonial Scrip&quot;">​</a></h1><p>Colonial Scrip is the name given to the paper currency issued in the American colonies before the Revolutionary War. In Badlands Media commentary, <a href="/entities/justin-deschamps">Justin Deschamps</a> described it as a &quot;debt-free and interest-free fiat currency&quot; under which the American colonists &quot;enjoyed incredible economic property prior to the Revolutionary War.&quot;[1]</p><p>Deschamps argued that colonial-era Americans &quot;were far more adept and knowledgeable about how to manage a healthy monetary system,&quot; but that within roughly a hundred years that competence and the confidence flowing from it were &quot;almost totally destroyed by subversion, manipulation, and de-education schemes.&quot;[1] He connected this history to the founding of the <a href="/entities/federal-reserve">Federal Reserve</a> in 1913 and to modern central-bank hostility toward cryptocurrency voiced by <a href="/entities/agustin-carstens">Agustin Carstens</a> of the <a href="/entities/bank-for-international-settlements">Bank for International Settlements</a>, presenting cryptocurrency as a modern attempt to restore citizen-produced money.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Wheels of Justice Roll On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/colonial-scrip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const colonialScrip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  colonialScrip as default
};
