import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Naama Lazimi","description":"","frontmatter":{"title":"Naama Lazimi","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","knesset","democrats-party","oversight"],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/naama-lazimi.md","filePath":"entities/naama-lazimi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/naama-lazimi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="naama-lazimi" tabindex="-1">Naama Lazimi <a class="header-anchor" href="#naama-lazimi" aria-label="Permalink to &quot;Naama Lazimi&quot;">​</a></h1><p>Naama Lazimi is an Israeli member of the Knesset representing the Democrats party.[1]</p><p>Lazimi submitted a request for information regarding allegations that <a href="/entities/sara-netanyahu">Sara Netanyahu</a> had sought to intimidate a witness in the corruption case against her husband, Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>.[1] In response, the State Attorney&#39;s Office informed Lazimi that a police investigation had been opened against Sara Netanyahu on December 26, disclosing the existence of the probe publicly.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/naama-lazimi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const naamaLazimi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  naamaLazimi as default
};
