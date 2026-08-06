import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Agustin Carstens","description":"","frontmatter":{"title":"Agustin Carstens","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bis","central-banking","monetary-policy","crypto"],"sources":["raw/badlands-news-brief-6b6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/agustin-carstens.md","filePath":"entities/agustin-carstens.md","lastUpdated":null}');
const _sfc_main = { name: "entities/agustin-carstens.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agustin-carstens" tabindex="-1">Agustin Carstens <a class="header-anchor" href="#agustin-carstens" aria-label="Permalink to &quot;Agustin Carstens&quot;">​</a></h1><p>Agustin Carstens is the head of the <a href="/entities/bank-for-international-settlements">Bank for International Settlements</a> (BIS). In February 2023 he told Bloomberg TV that the battle between cryptocurrency and fiat currencies had ended in victory for fiat money: &quot;That battle has been won … A technology doesn&#39;t make for trusted money.&quot;[1]</p><p>Carstens argued that &quot;only the legal, historical infrastructure behind central banks can give great credibility&quot; to money, and said he expected a &quot;strong statement&quot; from the G20 nations in favor of stronger regulation of digital assets, noting that crypto as a financial activity can only exist &quot;under certain conditions.&quot;[1]</p><p>Badlands contributor <a href="/entities/justin-deschamps">Justin Deschamps</a> treated the remarks as an exercise of declaratory power by an international banking cartel rather than a neutral market observation, framing them within a longer history of campaigns against citizen-issued money such as <a href="/concepts/colonial-scrip">Colonial Scrip</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Wheels of Justice Roll On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/agustin-carstens.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agustinCarstens = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  agustinCarstens as default
};
