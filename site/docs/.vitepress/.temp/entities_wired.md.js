import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wired","description":"","frontmatter":{"title":"Wired","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","technology-journalism","surveillance"],"sources":["raw/badlands-news-brief-7a7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/wired.md","filePath":"entities/wired.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wired.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wired" tabindex="-1">Wired <a class="header-anchor" href="#wired" aria-label="Permalink to &quot;Wired&quot;">​</a></h1><p>Wired is an American technology-focused magazine and news outlet.[1]</p><p>In June 2023, Wired obtained and reported on a newly declassified report prepared for Director of National Intelligence <a href="/entities/avril-haines">Avril Haines</a> by her own panel of senior advisers, revealing that the United States government had been secretly amassing a &quot;large amount&quot; of &quot;sensitive and intimate information&quot; on its own citizens through purchases from commercial data brokers.[1] The magazine reported that Haines had first tasked those advisers in late 2021 with untangling a web of secretive business arrangements between commercial data brokers and members of the US intelligence community.[1]</p><p>The story was amplified by ZeroHedge and by Badlands Media commentary, which treated it as documentary evidence of a broader pattern of intelligence-community overreach.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Defiant, Biden Protected &amp; Woke Worn&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wired.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wired = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wired as default
};
