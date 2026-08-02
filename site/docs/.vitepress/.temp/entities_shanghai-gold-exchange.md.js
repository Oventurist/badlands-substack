import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shanghai Gold Exchange","description":"","frontmatter":{"title":"Shanghai Gold Exchange","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["exchange","china","gold","financial-system"],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/shanghai-gold-exchange.md","filePath":"entities/shanghai-gold-exchange.md","lastUpdated":null}');
const _sfc_main = { name: "entities/shanghai-gold-exchange.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="shanghai-gold-exchange" tabindex="-1">Shanghai Gold Exchange <a class="header-anchor" href="#shanghai-gold-exchange" aria-label="Permalink to &quot;Shanghai Gold Exchange&quot;">​</a></h1><p>The Shanghai Gold Exchange is China&#39;s principal marketplace for physical gold. In <a href="/entities/joe-lange">Joe Lange</a>&#39;s article <a href="/concepts/are-cbdcs-the-path-to-fear-or-freedom">&quot;Are CBDCs The Path To Fear, or Freedom?&quot;</a> it functions as the second half of a mechanism that the author says began the displacement of the <a href="/concepts/petrodollar">petrodollar</a>.</p><p>Under that mechanism, oil producers selling crude for yuan on the <a href="/entities/shanghai-petroleum-and-natural-gas-exchange">Shanghai Petroleum and Natural Gas Exchange</a>, opened in March 2018, can convert the proceeds immediately into gold on the Shanghai Gold Exchange. The article presents this convertibility as what makes yuan-denominated oil sales attractive, effectively reintroducing a gold link into global energy trade and giving <a href="/entities/china">China</a> and the wider <a href="/concepts/brics">brics</a> bloc a route around dollar settlement. It is offered as an early instance of the broader return to a <a href="/concepts/gold-standard">gold standard</a> that Lange argues is now underway worldwide.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/shanghai-gold-exchange.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shanghaiGoldExchange = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shanghaiGoldExchange as default
};
