import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Martin Armstrong","description":"","frontmatter":{"title":"Martin Armstrong","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["economics","commentary","europe","politics"],"sources":["raw/badlands-news-brief-3df.md"],"confidence":"low"},"headers":[],"relativePath":"entities/martin-armstrong.md","filePath":"entities/martin-armstrong.md","lastUpdated":null}');
const _sfc_main = { name: "entities/martin-armstrong.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="martin-armstrong" tabindex="-1">Martin Armstrong <a class="header-anchor" href="#martin-armstrong" aria-label="Permalink to &quot;Martin Armstrong&quot;">​</a></h1><p>Martin Armstrong is an economic analyst associated with Armstrong Economics whose commentary is frequently republished by <a href="/entities/zerohedge">ZeroHedge</a> and similar outlets.[1]</p><h2 id="commentary-on-european-politics" tabindex="-1">Commentary on European politics <a class="header-anchor" href="#commentary-on-european-politics" aria-label="Permalink to &quot;Commentary on European politics&quot;">​</a></h2><p>In November 2023, Armstrong argued that a &quot;shift to the middle&quot; was coming in European politics and that the media had become so hostile to common sense that anyone taking a contrary view was branded &quot;far-right,&quot; as though they were Nazis.[1] In his framing, simply wanting to return to normal life had become grounds for the label, while acceptable opinion required supporting a wider war, high taxes, lifestyle sacrifice for climate change, and gender ideology in primary schooling.[1] His analysis was cited alongside mapping of European populist strength published after the <a href="/concepts/2023-dutch-general-election">2023 Dutch general election</a> won by <a href="/entities/geert-wilders">Geert Wilders</a>&#39; <a href="/entities/party-for-freedom">PVV</a>.[1]</p><p>The name also appears in this context attached to Statista chart work on right-wing populism&#39;s potential across Europe, which the coverage credited to a Martin Armstrong at Statista.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Media Spin Cycle Continues ... As We Defect&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3df" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3df</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/martin-armstrong.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const martinArmstrong = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  martinArmstrong as default
};
