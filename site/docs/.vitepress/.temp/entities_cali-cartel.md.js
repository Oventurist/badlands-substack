import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cali Cartel","description":"","frontmatter":{"title":"Cali Cartel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colombia","drug-trafficking","cocaine"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cali-cartel.md","filePath":"entities/cali-cartel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cali-cartel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cali-cartel" tabindex="-1">Cali Cartel <a class="header-anchor" href="#cali-cartel" aria-label="Permalink to &quot;Cali Cartel&quot;">​</a></h1><p>The Cali Cartel was a Colombian cocaine-trafficking organization and the counterparty in the deal that reshaped Mexican trafficking economics. By renegotiating terms with the Cali Cartel, <a href="/entities/juan-garcia-abrego">Juan García Abrego</a> secured for the <a href="/entities/gulf-cartel">Gulf Cartel</a> 50 percent of every shipment out of Colombia as payment for delivery, replacing the US $1,500 per kilo previously paid — in exchange for guaranteeing every shipment&#39;s arrival.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>The Badlands Media account also names Cali alongside the <a href="/entities/medellin-cartel">Medellín Cartel</a> as one of the Colombian organizations for which <a href="/entities/jeb-bush">Jeb Bush</a> is said to have established banking and money-laundering links to the <a href="/entities/cia">CIA</a> from his post in Caracas.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cali-cartel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const caliCartel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  caliCartel as default
};
