import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jim Clyburn","description":"","frontmatter":{"title":"Jim Clyburn","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["democratic-party","congress","south-carolina","2024-election","badlands-brief"],"sources":["raw/badlands-news-brief-19b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jim-clyburn.md","filePath":"entities/jim-clyburn.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jim-clyburn.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jim-clyburn" tabindex="-1">Jim Clyburn <a class="header-anchor" href="#jim-clyburn" aria-label="Permalink to &quot;Jim Clyburn&quot;">​</a></h1><p>Jim Clyburn is a Democratic member of the U.S. House of Representatives from South Carolina and a longtime party powerbroker, described in July 2024 reporting as one of the &quot;party heavyweights&quot; whose endorsement would shape the succession if <a href="/entities/joe-biden">Joe Biden</a> withdrew from the presidential race.[1]</p><p>Amid the pressure campaign to persuade Biden to step aside following the June 2024 debate, Clyburn was among the senior Democrats who publicly said they would back Vice President <a href="/entities/kamala-harris">Kamala Harris</a> should Biden drop out.[1] Axios cited his expected endorsement as one of five reasons that efforts by some Democratic officials and operatives to bypass Harris — in favor of figures such as <a href="/entities/gretchen-whitmer">Gretchen Whitmer</a>, <a href="/entities/josh-shapiro">Josh Shapiro</a>, or <a href="/entities/gavin-newsom">Gavin Newsom</a> — were unlikely to succeed.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Transforms as Biden Goes Into Hiding&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-19b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-19b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jim-clyburn.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jimClyburn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jimClyburn as default
};
