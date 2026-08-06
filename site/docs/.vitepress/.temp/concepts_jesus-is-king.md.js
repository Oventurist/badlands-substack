import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jesus Is King","description":"","frontmatter":{"title":"Jesus Is King","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["music","christianity","culture"],"sources":["raw/badlands-brief-282.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/jesus-is-king.md","filePath":"concepts/jesus-is-king.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/jesus-is-king.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jesus-is-king" tabindex="-1">Jesus Is King <a class="header-anchor" href="#jesus-is-king" aria-label="Permalink to &quot;Jesus Is King&quot;">​</a></h1><p>Jesus Is King is the 2019 gospel album released by <a href="/entities/kanye-west">Kanye West</a>, described by <a href="/entities/badlands-media">Badlands Media</a> as the most commercially successful gospel album of all time.[1] Badlands treated the record — alongside <a href="/entities/mel-gibson">Mel Gibson</a>&#39;s The Passion of the Christ — as evidence that individual artists can spread Christian content to mass audiences despite what the outlet calls a Satanic cabal controlling American culture.[1] The accompanying tour included an October 2019 performance by West and his gospel choir on a CBS late-night program.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Jesus Walks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-282" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-282</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/jesus-is-king.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jesusIsKing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jesusIsKing as default
};
