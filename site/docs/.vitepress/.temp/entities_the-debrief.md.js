import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Debrief","description":"","frontmatter":{"title":"The Debrief","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","uap","journalism"],"sources":["raw/badlands-news-brief-423.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-debrief.md","filePath":"entities/the-debrief.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-debrief.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-debrief" tabindex="-1">The Debrief <a class="header-anchor" href="#the-debrief" aria-label="Permalink to &quot;The Debrief&quot;">​</a></h1><p>The Debrief is an online science and technology outlet best known in the disclosure community for publishing the June 2023 whistleblower account of former intelligence official <a href="/entities/david-grusch">David Grusch</a>.[1]</p><p>The article, reported by <a href="/entities/leslie-kean">Leslie Kean</a> and <a href="/entities/ralph-blumenthal">Ralph Blumenthal</a>, stated that a former intelligence official turned whistleblower had given <a href="/entities/congress">Congress</a> and the Intelligence Community Inspector General extensive classified information about deeply covert programs said to possess retrieved craft of non-human origin.[1] The outlet also reported that other intelligence officials, active and retired, had independently provided corroborating information through their work in various agencies.[1] The story was widely aggregated, including by <a href="/entities/zerohedge">ZeroHedge</a>, and was covered in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gheyliens, Ukrainian Nazis &amp; Post Office Shenanigans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-423" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-423</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-debrief.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theDebrief = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theDebrief as default
};
