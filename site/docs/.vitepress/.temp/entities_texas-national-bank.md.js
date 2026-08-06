import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Texas National Bank","description":"","frontmatter":{"title":"Texas National Bank","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","houston","cia","zapata"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/texas-national-bank.md","filePath":"entities/texas-national-bank.md","lastUpdated":null}');
const _sfc_main = { name: "entities/texas-national-bank.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="texas-national-bank" tabindex="-1">Texas National Bank <a class="header-anchor" href="#texas-national-bank" aria-label="Permalink to &quot;Texas National Bank&quot;">​</a></h1><p>Texas National Bank (TNB) was a Houston bank created in 1953 through the merger of South Texas National and Union National Bank, and the major predecessor institution of <a href="/entities/texas-commerce-bank">Texas Commerce Bank</a>, into which it merged with the National Bank of Commerce in 1964.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>The Badlands Media account emphasizes that TNB was created in the very same year that <a href="/entities/george-hw-bush">George H.W. Bush</a> and J. Hugh Liedtke formed Zapata Petroleum Corporation in Houston, arguing this was no coincidence but the deliberate creation of a CIA bank to service a CIA front company.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> TNB &quot;quickly established mutually profitable working ties&quot; with <a href="/entities/zapata-offshore">Zapata Off-Shore Company</a>, an 80 percent-owned subsidiary of Zapata Petroleum, and its loans for drilling rigs and tender vessels made Zapata one of the bank&#39;s most significant oil-related accounts in the late 1950s.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>Three Zapata ships financed by TNB — the <em>Houston</em>, the <em>Barbara J</em> and the <em>Zapata</em> — were loaned to the <a href="/entities/cia">CIA</a> for the 1961 <a href="/concepts/bay-of-pigs">Bay of Pigs</a> invasion, giving the bank an indirect line into the operation.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/texas-national-bank.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const texasNationalBank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  texasNationalBank as default
};
