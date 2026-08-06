import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pinchas Wallerstein","description":"","frontmatter":{"title":"Pinchas Wallerstein","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","settler-movement"],"sources":["raw/badlands-brief-625.md"],"confidence":"low"},"headers":[],"relativePath":"entities/pinchas-wallerstein.md","filePath":"entities/pinchas-wallerstein.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pinchas-wallerstein.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pinchas-wallerstein" tabindex="-1">Pinchas Wallerstein <a class="header-anchor" href="#pinchas-wallerstein" aria-label="Permalink to &quot;Pinchas Wallerstein&quot;">​</a></h1><p>Pinchas Wallerstein is a founder of the modern <a href="/entities/israeli-settler-movement">Israeli Settler Movement</a>.[1]</p><p>In an interview published in April 2026 by <a href="/entities/haaretz">Haaretz</a> — the oldest operating newspaper in <a href="/entities/israel">Israel</a> — Wallerstein said he was horrified by the rise of <a href="/concepts/jewish-terrorism">Jewish terrorism</a> in the region, labelling it &quot;treason&quot; against the State of Israel.[1] Badlands cited the remarks as evidence that criticism of settler and <a href="/entities/israel-defense-forces">IDF</a> violence was emerging from within the movement&#39;s own founding generation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mr. Nice Guy Leaves the Building (plus, Jewish Terrorism)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-625" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-625</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pinchas-wallerstein.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinchasWallerstein = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pinchasWallerstein as default
};
