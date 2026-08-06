import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TotalEnergies","description":"","frontmatter":{"title":"TotalEnergies","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","france","lng","de-dollarization"],"sources":["raw/badlands-news-brief-85a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/totalenergies.md","filePath":"entities/totalenergies.md","lastUpdated":null}');
const _sfc_main = { name: "entities/totalenergies.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="totalenergies" tabindex="-1">TotalEnergies <a class="header-anchor" href="#totalenergies" aria-label="Permalink to &quot;TotalEnergies&quot;">​</a></h1><p>TotalEnergies (TTEF.PA) is the French multinational energy company and one of the world&#39;s largest traders of liquefied natural gas.[1]</p><h2 id="yuan-settled-lng-transaction" tabindex="-1">Yuan-settled LNG transaction <a class="header-anchor" href="#yuan-settled-lng-transaction" aria-label="Permalink to &quot;Yuan-settled LNG transaction&quot;">​</a></h2><p>In March 2023 TotalEnergies became the counterparty to <a href="/entities/china">China&#39;s</a> first yuan-settled LNG trade, dealing with the Chinese national oil company <a href="/entities/cnooc">CNOOC</a> through the <a href="/entities/shanghai-petroleum-and-natural-gas-exchange">Shanghai Petroleum and Natural Gas Exchange</a>.[1] The cargo involved approximately 65,000 tonnes of LNG imported from the United Arab Emirates.[1] TotalEnergies confirmed to Reuters that the LNG had come from the UAE but did not comment further on the transaction.[1]</p><p>Because the deal placed a major Western energy company inside China&#39;s campaign to settle hydrocarbon trades outside the dollar, commentators in the Truth Community read it as a sign that France might be loosening its alignment with United States financial hegemony.[1] The trade was cited alongside <a href="/entities/saudi-arabia">Saudi Arabia&#39;s</a> partial accession to the <a href="/entities/shanghai-cooperation-organization">Shanghai Cooperation Organization</a> as part of an accelerating realignment away from Western monetary structures.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bank of Epstein, Saudi Arabia &amp; Trump&#39;s Reprieve?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-85a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-85a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/totalenergies.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const totalenergies = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  totalenergies as default
};
