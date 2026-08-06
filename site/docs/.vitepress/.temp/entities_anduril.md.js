import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anduril","description":"","frontmatter":{"title":"Anduril","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["defense","military-contractor","technology"],"sources":["raw/badlands-news-brief-1a0.md","raw/badlands-news-brief-762.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/anduril.md","filePath":"entities/anduril.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anduril.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anduril" tabindex="-1">Anduril <a class="header-anchor" href="#anduril" aria-label="Permalink to &quot;Anduril&quot;">​</a></h1><p>Anduril is an American military contractor co-founded by <a href="/entities/palmer-luckey">Palmer Luckey</a>.[1] The company is part of a cluster of defence-oriented technology firms — alongside <a href="/entities/palantir">Palantir</a> — associated with Silicon Valley investors including <a href="/entities/peter-thiel">Peter Thiel</a> and <a href="/entities/joe-lonsdale">Joe Lonsdale</a>.[1]</p><p>In July 2025, Anduril&#39;s founder was reported to be leading the launch of <a href="/entities/erebor">Erebor</a>, a proposed United States bank for start-ups and cryptocurrency businesses backed in part by Thiel&#39;s <a href="/entities/founders-fund">Founders Fund</a>.[1]</p><h2 id="munitions-acceleration-participation" tabindex="-1">Munitions acceleration participation <a class="header-anchor" href="#munitions-acceleration-participation" aria-label="Permalink to &quot;Munitions acceleration participation&quot;">​</a></h2><p>Anduril Industries was among the startups drawn to the June 2025 <a href="/entities/pentagon">Pentagon</a> roundtable of missile makers led by Defense Secretary <a href="/entities/pete-hegseth">Pete Hegseth</a> and General <a href="/entities/dan-caine">Dan Caine</a>, which launched the production drive later reported as the <a href="/concepts/munitions-acceleration-council">Munitions Acceleration Council</a>.[2] The effort presses contractors to double or quadruple output of twelve weapons the Pentagon wants on hand for a potential conflict with <a href="/entities/china">China</a>.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: IC Ignitions &amp; Double Detonations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1a0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1a0</a></li><li>Badlands Brief — &quot;Badlands News Brief: Shutdowns, Shakedowns, &amp; Two Sexes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-762" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-762</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anduril.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anduril = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  anduril as default
};
