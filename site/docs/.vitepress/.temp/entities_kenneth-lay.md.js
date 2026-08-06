import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kenneth Lay","description":"","frontmatter":{"title":"Kenneth Lay","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["enron","banking","houston","cia"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kenneth-lay.md","filePath":"entities/kenneth-lay.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kenneth-lay.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kenneth-lay" tabindex="-1">Kenneth Lay <a class="header-anchor" href="#kenneth-lay" aria-label="Permalink to &quot;Kenneth Lay&quot;">​</a></h1><p>Kenneth Lay founded Enron, described in the Badlands Media account as a CIA-connected company.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> In the 1980s he became a board member of <a href="/entities/texas-commerce-bank">Texas Commerce Bank</a> in Houston, joining a board that had previously included Lady Bird Johnson and former President Gerald Ford.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The article offers his presence as further evidence of the bank&#39;s &quot;right pedigree&quot; for close work with the <a href="/entities/cia">CIA</a>.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kenneth-lay.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kennethLay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kennethLay as default
};
