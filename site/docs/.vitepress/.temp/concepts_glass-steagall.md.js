import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Glass-Steagall Act","description":"","frontmatter":{"title":"Glass-Steagall Act","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["banking","regulation","derivatives",1933,"clinton"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/glass-steagall.md","filePath":"concepts/glass-steagall.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/glass-steagall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="glass-steagall-act" tabindex="-1">Glass-Steagall Act <a class="header-anchor" href="#glass-steagall-act" aria-label="Permalink to &quot;Glass-Steagall Act&quot;">​</a></h1><p>The Glass-Steagall Act established the separation of speculative from commercial banking, and that separation was the bedrock of financial regulation from its implementation in 1933.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><p>Its destruction in 1999, carried out as <a href="/entities/bill-clinton">Bill Clinton</a>&#39;s last act in office, is described by <a href="/entities/matthew-ehret">Matthew Ehret</a> as resulting in the creation of the largest bubble in history, amounting to a $700 trillion derivatives time bomb ready to explode.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a> Ehret places the 1999 repeal in a sequence with the collapse of the Soviet system, the creation of the European Union and <a href="/concepts/nafta">NAFTA</a>, and the founding of the <a href="/entities/world-trade-organization">World Trade Organization</a> — the institutional architecture of the unipolar order that converted the trans-Atlantic into a cage of &quot;post-sovereign nations&quot; no longer controlling their own powers of credit generation.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Re-Alignment of World Systems&quot;, URL: <a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-re-alignment-of-world-systems</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/glass-steagall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const glassSteagall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  glassSteagall as default
};
