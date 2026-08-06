import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stefan Homburg","description":"","frontmatter":{"title":"Stefan Homburg","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","economics","afd","commentary"],"sources":["raw/badlands-news-brief-4ee.md"],"confidence":"low"},"headers":[],"relativePath":"entities/stefan-homburg.md","filePath":"entities/stefan-homburg.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stefan-homburg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stefan-homburg" tabindex="-1">Stefan Homburg <a class="header-anchor" href="#stefan-homburg" aria-label="Permalink to &quot;Stefan Homburg&quot;">​</a></h1><p>Stefan Homburg is a German economist known for public commentary critical of official narratives.[1]</p><h2 id="comment-on-afd-candidate-deaths" tabindex="-1">Comment on AfD candidate deaths <a class="header-anchor" href="#comment-on-afd-candidate-deaths" aria-label="Permalink to &quot;Comment on AfD candidate deaths&quot;">​</a></h2><p>In late August 2025, after four candidates of the <a href="/entities/alternative-for-germany">Alternative für Deutschland</a> died unexpectedly ahead of North Rhine-Westphalia local elections, Homburg described the coincidence as &quot;statistically almost impossible&quot; in a post on X.[1] His remark was widely quoted in coverage of the deaths and was cited by Badlands commentator Ashe in America, who noted that German authorities reported no evidence of foul play and that no investigations were reportedly under way.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Heightened Homohysteria, AI Scabs, &amp; A Dutch Diddler&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4ee" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4ee</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stefan-homburg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stefanHomburg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stefanHomburg as default
};
