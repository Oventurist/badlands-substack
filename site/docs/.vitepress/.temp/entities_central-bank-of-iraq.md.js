import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Central Bank of Iraq","description":"","frontmatter":{"title":"Central Bank of Iraq","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iraq-war","baghdad","cash","banking"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"low"},"headers":[],"relativePath":"entities/central-bank-of-iraq.md","filePath":"entities/central-bank-of-iraq.md","lastUpdated":null}');
const _sfc_main = { name: "entities/central-bank-of-iraq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="central-bank-of-iraq" tabindex="-1">Central Bank of Iraq <a class="header-anchor" href="#central-bank-of-iraq" aria-label="Permalink to &quot;Central Bank of Iraq&quot;">​</a></h1><p>The Central Bank of Iraq, in downtown Baghdad, was the nominal destination of the cash airlifted from the <a href="/entities/federal-reserve-bank-of-new-york">Federal Reserve Bank of New York</a> to Baghdad between 2003 and 2008.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a></p><p>The <a href="/entities/coalition-provisional-authority">CPA</a> official known as Basel was responsible for collecting the pallets from the airport and delivering them to the bank across roughly seven miles of insurgent-contested road.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a> CNBC described his role as making him the very last American to see that money before it disappeared into the bank&#39;s vaults.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a> The article stresses that once the cash arrived there were no documents tracking it at all, an absence it argues was deliberate and which enabled tens of billions of dollars to be diverted — including the more than $1 billion later discovered in a bunker in Lebanon.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Conflict of Interest&quot;, URL: <a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-conflict-of-interest</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/central-bank-of-iraq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const centralBankOfIraq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  centralBankOfIraq as default
};
