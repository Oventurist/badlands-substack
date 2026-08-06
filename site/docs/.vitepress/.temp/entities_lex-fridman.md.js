import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lex Fridman","description":"","frontmatter":{"title":"Lex Fridman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","podcasting","interviews","ukraine"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lex-fridman.md","filePath":"entities/lex-fridman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lex-fridman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lex-fridman" tabindex="-1">Lex Fridman <a class="header-anchor" href="#lex-fridman" aria-label="Permalink to &quot;Lex Fridman&quot;">​</a></h1><p>Lex Fridman is a podcaster known for long-form interviews with political and technical figures.[1]</p><p>In early January 2025 Fridman published a three-hour interview with Ukrainian President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a> that the Ukrainian government-run United24 platform described as &quot;bold&quot; and candid. The conversation focused largely on the ongoing Russian invasion of Ukraine and on Kyiv&#39;s relationship with the United States under both <a href="/entities/joe-biden">Joe Biden</a> and President-elect <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><p>In that interview Zelensky lamented Biden&#39;s hesitation to preventatively sanction Russia before the 2022 full-scale invasion, describing the practice of threatening to sanction Moscow only after an invasion as &quot;bullshit.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lex-fridman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lexFridman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lexFridman as default
};
