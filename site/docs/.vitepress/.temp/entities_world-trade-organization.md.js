import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Trade Organization","description":"","frontmatter":{"title":"World Trade Organization","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["trade","globalization","unipolar-order","sovereignty"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/world-trade-organization.md","filePath":"entities/world-trade-organization.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-trade-organization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-trade-organization" tabindex="-1">World Trade Organization <a class="header-anchor" href="#world-trade-organization" aria-label="Permalink to &quot;World Trade Organization&quot;">​</a></h1><p>The World Trade Organization is one of the institutions <a href="/entities/matthew-ehret">Matthew Ehret</a> identifies as constituting the unipolar world order that followed the collapse of the Soviet system in the early 1990s.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a> In his sequence, that collapse ushered in a unipolar order built around the European Union and <a href="/concepts/nafta">NAFTA</a>, followed soon thereafter by the WTO and the 1999 destruction of <a href="/concepts/glass-steagall">Glass-Steagall</a>.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><p>The effect attributed to this architecture is that the trans-Atlantic was converted into a cage of &quot;post-sovereign nations&quot; that no longer had actual control of their own powers of credit generation, while under <a href="/entities/nato">NATO</a> even national militaries were subject to technocratic control.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a> Ehret describes the arrangement as perfect for a governing elite &quot;scientifically managing&quot; from above while the little people bickered over their diminishing employment and standards of living from below.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Re-Alignment of World Systems&quot;, URL: <a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-re-alignment-of-world-systems</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-trade-organization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldTradeOrganization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldTradeOrganization as default
};
