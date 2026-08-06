import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kazatomprom","description":"","frontmatter":{"title":"Kazatomprom","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["kazakhstan","uranium","state-owned-enterprise","uranium-one"],"sources":["raw/america-for-sale-part-3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kazatomprom.md","filePath":"entities/kazatomprom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kazatomprom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kazatomprom" tabindex="-1">Kazatomprom <a class="header-anchor" href="#kazatomprom" aria-label="Permalink to &quot;Kazatomprom&quot;">​</a></h1><p>Kazatomprom is the state-run uranium agency of <a href="/entities/kazakhstan">Kazakhstan</a>, and the seller of the mine stakes that opened the <a href="/concepts/uranium-one-deal">Uranium One</a> chain of transactions in the Badlands Media account.<a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">[1]</a></p><p>Within days of the September 2005 Almaty visit by <a href="/entities/bill-clinton">Bill Clinton</a> and <a href="/entities/frank-giustra">Frank Giustra</a>, during which the pair dined with president <a href="/entities/nursultan-nazarbayev">Nursultan Nazarbayev</a>, Giustra&#39;s company <a href="/entities/urasia-energy">UrAsia Energy Ltd.</a> signed a preliminary deal giving it stakes in three uranium mines controlled by Kazatomprom.<a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">[1]</a> Those Kazakh mines were described by the <em>New York Times</em> as among the most lucrative in the world, and became the most valuable asset carried into the 2007 UrAsia–<a href="/entities/uranium-one">Uranium One</a> merger.<a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;America for Sale - Part 3: Sanctions Are a Scam&quot;, URL: <a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/america-for-sale-part-3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kazatomprom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kazatomprom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kazatomprom as default
};
