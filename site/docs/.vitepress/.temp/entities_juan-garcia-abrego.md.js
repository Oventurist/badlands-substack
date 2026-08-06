import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Juan García Abrego","description":"","frontmatter":{"title":"Juan García Abrego","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","drug-trafficking","gulf-cartel","cocaine"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/juan-garcia-abrego.md","filePath":"entities/juan-garcia-abrego.md","lastUpdated":null}');
const _sfc_main = { name: "entities/juan-garcia-abrego.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="juan-garcia-abrego" tabindex="-1">Juan García Abrego <a class="header-anchor" href="#juan-garcia-abrego" aria-label="Permalink to &quot;Juan García Abrego&quot;">​</a></h1><p>Juan García Abrego was the leader of Mexico&#39;s <a href="/entities/gulf-cartel">Gulf Cartel</a> and, in the Badlands Media account, the man who changed the economics of Mexican narcotics trafficking.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>He is widely known for innovating Mexican trafficking operations, turning them from smugglers into suppliers. By renegotiating deals with the <a href="/entities/cali-cartel">Cali Cartel</a>, García Abrego secured 50 percent of every shipment out of Colombia as payment for delivery, instead of the US $1,500 per kilo the organization had previously received. The renegotiation carried a price: the cartel had to guarantee any shipment from Colombia to its destination.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>That guarantee obligation is the article&#39;s explanation for the strategic value of <a href="/concepts/nafta">NAFTA</a> to the cartel and to the <a href="/entities/salinas-family">Salinas family</a> with which it was connected — an open southern border made delivery far easier to assure.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/juan-garcia-abrego.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const juanGarciaAbrego = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  juanGarciaAbrego as default
};
