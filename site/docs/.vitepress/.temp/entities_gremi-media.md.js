import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gremi Media","description":"","frontmatter":{"title":"Gremi Media","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["poland","media","newspapers","soros","ownership"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gremi-media.md","filePath":"entities/gremi-media.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gremi-media.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gremi-media" tabindex="-1">Gremi Media <a class="header-anchor" href="#gremi-media" aria-label="Permalink to &quot;Gremi Media&quot;">​</a></h1><p>Gremi Media is the Polish media company that owns the daily newspaper Rzeczpospolita and the financial daily Parkiet, two of Poland&#39;s most prominent titles.[1]</p><p>In August 2023 its Polish owner, Grzegorz Hajdarowicz, sold a large proportion of his shares to the Dutch company <a href="/entities/pluralis">Pluralis</a>, completing a deal originally struck in 2021 under which Pluralis had bought a minority stake with an option to acquire more shares later.[1] As a result Hajdarowicz ceased to be majority shareholder and Pluralis — backed by the Soros Economic Development Fund associated with <a href="/entities/george-soros">George Soros</a> — came to own 57 percent of Gremi Media and take control of the company.[1] The transaction was reported by <a href="/entities/remix-news">Remix News</a>, citing Business Insider, and framed as raising concerns over media bias in Poland.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gremi-media.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gremiMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gremiMedia as default
};
