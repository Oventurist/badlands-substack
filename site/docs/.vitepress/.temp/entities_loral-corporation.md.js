import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Loral Corporation","description":"","frontmatter":{"title":"Loral Corporation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["defense-contractor","satellites","china","technology-transfer","dnc"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/loral-corporation.md","filePath":"entities/loral-corporation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/loral-corporation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="loral-corporation" tabindex="-1">Loral Corporation <a class="header-anchor" href="#loral-corporation" aria-label="Permalink to &quot;Loral Corporation&quot;">​</a></h1><p>Loral Corporation was the American aerospace and satellite firm at the center of the technology-transfer allegations against the <a href="/entities/bill-clinton">Clinton</a> administration.<a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">[1]</a> Its head, Bernard Schwartz, was a major donor to the <a href="/entities/democratic-national-committee">Democratic National Committee</a> and accompanied Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a> on a 1994 trade mission to <a href="/entities/communist-china">China</a>.<a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">[1]</a></p><p>During that mission Brown set up a meeting between Schwartz and a Chinese government official, and the Badlands account states that this meeting led to a transfer of American missile technology to the Chinese that later became the subject of a congressional investigation.<a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">[1]</a> The underlying concern, as reported by the <em>New York Times</em>, was that scientists working for American space satellite companies had provided Beijing with expertise on guidance systems, significantly advancing the reliability of China&#39;s nuclear missiles in 1996 — the technology required to place a commercial satellite in orbit being similar to that which guides a long-range nuclear missile to its target.<a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;America for Sale - Part 1&quot;, URL: <a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/america-for-sale-part-1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/loral-corporation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loralCorporation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  loralCorporation as default
};
