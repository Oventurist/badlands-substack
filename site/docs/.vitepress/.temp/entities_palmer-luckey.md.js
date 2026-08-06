import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Palmer Luckey","description":"","frontmatter":{"title":"Palmer Luckey","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","defense","banking","entrepreneurs"],"sources":["raw/badlands-news-brief-1a0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/palmer-luckey.md","filePath":"entities/palmer-luckey.md","lastUpdated":null}');
const _sfc_main = { name: "entities/palmer-luckey.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="palmer-luckey" tabindex="-1">Palmer Luckey <a class="header-anchor" href="#palmer-luckey" aria-label="Permalink to &quot;Palmer Luckey&quot;">​</a></h1><p>Palmer Luckey is an American technology entrepreneur and the co-founder of the military contractor <a href="/entities/anduril">Anduril</a>.[1]</p><h2 id="erebor" tabindex="-1">Erebor <a class="header-anchor" href="#erebor" aria-label="Permalink to &quot;Erebor&quot;">​</a></h2><p>In July 2025, Luckey was reported to be leading a group of technology billionaires preparing to launch a United States bank named <a href="/entities/erebor">Erebor</a>, intended to serve start-ups — including cryptocurrency businesses — in the gap left by the failure of <a href="/entities/silicon-valley-bank">Silicon Valley Bank</a>.[1] Other reported backers included <a href="/entities/joe-lonsdale">Joe Lonsdale</a> of <a href="/entities/8vc">8VC</a> and <a href="/entities/peter-thiel">Peter Thiel</a>&#39;s <a href="/entities/founders-fund">Founders Fund</a>.[1] Badlands contributor <a href="/entities/gmoney">GMONEY</a> characterized the venture as a digital bank built specifically for crypto and technology start-ups.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: IC Ignitions &amp; Double Detonations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1a0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1a0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/palmer-luckey.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const palmerLuckey = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  palmerLuckey as default
};
