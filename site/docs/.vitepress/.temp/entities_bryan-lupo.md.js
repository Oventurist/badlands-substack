import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bryan Lupo","description":"","frontmatter":{"title":"Bryan Lupo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","commentary","media"],"sources":["raw/badlands-news-brief-575.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bryan-lupo.md","filePath":"entities/bryan-lupo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bryan-lupo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bryan-lupo" tabindex="-1">Bryan Lupo <a class="header-anchor" href="#bryan-lupo" aria-label="Permalink to &quot;Bryan Lupo&quot;">​</a></h1><p><strong>Bryan Lupo</strong> is a contributor and on-air commentator associated with <a href="/entities/badlands-media">Badlands Media</a>.[1]</p><h2 id="coverage-of-the-putin-interview" tabindex="-1">Coverage of the Putin interview <a class="header-anchor" href="#coverage-of-the-putin-interview" aria-label="Permalink to &quot;Coverage of the Putin interview&quot;">​</a></h2><p>On the evening of February 8, 2024, Lupo joined <a href="/entities/jon-herold">Jon Herold</a> and <a href="/entities/chris-paul">Chris Paul</a> in providing live Badlands Media commentary on the <a href="/concepts/tucker-carlson-putin-interview">Tucker Carlson–Putin interview</a>, a broadcast carried on Rumble alongside the interview itself.[1] The Badlands brief for that day pointed readers to the trio&#39;s post-interview coverage for those who missed the original release.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Putin Pandemonium Competes with A Biden Blitz&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-575" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-575</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bryan-lupo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bryanLupo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bryanLupo as default
};
