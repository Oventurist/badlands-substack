import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fox Business","description":"","frontmatter":{"title":"Fox Business","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","business-news","television"],"sources":["raw/badlands-news-brief-07e.md","raw/badlands-news-brief-2ca.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/fox-business.md","filePath":"entities/fox-business.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fox-business.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fox-business" tabindex="-1">Fox Business <a class="header-anchor" href="#fox-business" aria-label="Permalink to &quot;Fox Business&quot;">​</a></h1><p>Fox Business is the American business news television network, cited in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> as the venue for market and economic commentary carried onward by other outlets.[1]</p><p>In December 2023, economist <a href="/entities/harry-dent">Harry Dent</a> appeared on Fox Business to warn that 2024 would bring &quot;the biggest single crash year we&#39;ll see in our lifetimes,&quot; describing the post-2009 economy as sustained by $27 trillion of &quot;100 percent artificial&quot; money printing and deficits and predicting a decline on the scale of 1929–1932.[1] <a href="/entities/the-epoch-times">The Epoch Times</a> reported the interview, and the item was reproduced as a bonus entry in the December 22, 2023 Brief.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;MAGA Gets Branded as Biden Bungles Everything&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-07e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-07e</a></li><li>Badlands Brief — &quot;Badlands News Brief: Ukrainian Nazis, Spirit Cooks &amp; Potato Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ca" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ca</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fox-business.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const foxBusiness = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  foxBusiness as default
};
