import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Patrick Leahy","description":"","frontmatter":{"title":"Michael Patrick Leahy","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","journalist","media","star-news-digital-media","arizona"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/michael-patrick-leahy.md","filePath":"entities/michael-patrick-leahy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-patrick-leahy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-patrick-leahy" tabindex="-1">Michael Patrick Leahy <a class="header-anchor" href="#michael-patrick-leahy" aria-label="Permalink to &quot;Michael Patrick Leahy&quot;">​</a></h1><p>Michael Patrick Leahy is CEO and editor-in-chief of Star News Digital Media, a conservative local-news network whose properties include <em>The Arizona Sun Times</em>.</p><h2 id="commentary-on-the-lake-lawsuit" tabindex="-1">Commentary on the Lake lawsuit <a class="header-anchor" href="#commentary-on-the-lake-lawsuit" aria-label="Permalink to &quot;Commentary on the Lake lawsuit&quot;">​</a></h2><p>Following the December 9, 2022 filing of <a href="/entities/kari-lake">Kari Lake</a>&#39;s election contest, Leahy appeared on Steve Bannon&#39;s <em>War Room</em> to give an overview of the suit and to offer his assessment of the judge assigned to hear it in <a href="/entities/maricopa-county-superior-court">Maricopa County Superior Court</a>. The Badlands Media article <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a> links to the interview on Rumble and uses Leahy&#39;s remarks as the pivot into its own extended criticism of the Arizona judiciary, which the author regards as unlikely to give the contest a fair hearing.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-patrick-leahy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelPatrickLeahy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelPatrickLeahy as default
};
