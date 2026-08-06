import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Washington Examiner","description":"","frontmatter":{"title":"The Washington Examiner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","conservative-press"],"sources":["raw/badlands-news-brief-092.md","raw/badlands-news-brief-28e.md"],"confidence":"low"},"headers":[],"relativePath":"entities/washington-examiner.md","filePath":"entities/washington-examiner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/washington-examiner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-washington-examiner" tabindex="-1">The Washington Examiner <a class="header-anchor" href="#the-washington-examiner" aria-label="Permalink to &quot;The Washington Examiner&quot;">​</a></h1><p><strong>The Washington Examiner</strong> is an American conservative-leaning news outlet covering national politics and policy.[1]</p><p>Its reporting was cited in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> for coverage of <a href="/concepts/georgia-senate-bill-189">Georgia Senate Bill 189</a>, the election legislation approved by Georgia Republicans in March 2024 that clarified voter eligibility challenge standards, strengthened paper ballot security, and eased presidential ballot access for parties already qualified in twenty states.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li><li>Badlands News Brief — &quot;The Week of Rage Continues ... Biden to the Rescue?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-28e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-28e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/washington-examiner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const washingtonExaminer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  washingtonExaminer as default
};
