import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VOZ News","description":"","frontmatter":{"title":"VOZ News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","spanish-language-press","technology-coverage"],"sources":["raw/badlands-news-brief-31b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/voz-news.md","filePath":"entities/voz-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/voz-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="voz-news" tabindex="-1">VOZ News <a class="header-anchor" href="#voz-news" aria-label="Permalink to &quot;VOZ News&quot;">​</a></h1><p>VOZ News is a bilingual news outlet cited by Badlands Media for its coverage of ideological bias in American technology companies.[1]</p><h2 id="gemini-coverage" tabindex="-1">Gemini coverage <a class="header-anchor" href="#gemini-coverage" aria-label="Permalink to &quot;Gemini coverage&quot;">​</a></h2><p>In March 2024, VOZ reported that <a href="/concepts/google-gemini">Gemini</a>, <a href="/entities/google">Google</a>&#39;s artificial intelligence tool, had generated controversy in the United States over its pronounced progressive tendencies on political, historical, racial and gender questions, and had previously been &quot;exposed for its discrimination&quot; in declining to show favorable information or images of white people.[1] The outlet relayed accounts from former Google employees, published by The Free Press, asserting that the model&#39;s ideological design was deliberate rather than accidental.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Government Spending &amp; Unprecedented Unhappiness&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-31b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-31b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/voz-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vozNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vozNews as default
};
