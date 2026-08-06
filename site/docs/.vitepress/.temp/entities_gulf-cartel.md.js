import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gulf Cartel","description":"","frontmatter":{"title":"Gulf Cartel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","drug-trafficking","cocaine","money-laundering"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gulf-cartel.md","filePath":"entities/gulf-cartel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gulf-cartel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gulf-cartel" tabindex="-1">Gulf Cartel <a class="header-anchor" href="#gulf-cartel" aria-label="Permalink to &quot;Gulf Cartel&quot;">​</a></h1><p>The Gulf Cartel is the Mexican drug trafficking organization led by <a href="/entities/juan-garcia-abrego">Juan García Abrego</a> during the period covered by the Badlands Media article.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>Under García Abrego the cartel was transformed from a smuggling operation into a supplier: by renegotiating with the <a href="/entities/cali-cartel">Cali Cartel</a> he secured 50 percent of every shipment out of Colombia as payment for delivery, in place of the US $1,500 per kilo previously received. The price of that arrangement was that the cartel had to guarantee any shipment from Colombia to its destination.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The article argues that this delivery guarantee is precisely why <a href="/concepts/nafta">NAFTA</a> mattered so much to the cartel&#39;s allies — easier border crossings made guaranteed delivery feasible.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>The <a href="/entities/salinas-family">Salinas family</a> was connected to the cartel, and it was Gulf Cartel product that <a href="/entities/raul-salinas">Raúl Salinas</a> gave &quot;green light protection&quot; through Mexico.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The cartel paid <a href="/entities/mario-ruiz-massieu">Mario Ruiz Massieu</a> to bury the investigation into his own brother&#39;s murder, money he deposited at <a href="/entities/texas-commerce-bank">Texas Commerce Bank</a> in Houston, which was later discovered to have stashed $7 million in Gulf Cartel drug profits without legal consequence.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gulf-cartel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gulfCartel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gulfCartel as default
};
