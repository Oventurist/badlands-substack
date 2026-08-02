import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Clint Hickman","description":"","frontmatter":{"title":"Clint Hickman","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","maricopa-county","elections","republican"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/clint-hickman.md","filePath":"entities/clint-hickman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/clint-hickman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="clint-hickman" tabindex="-1">Clint Hickman <a class="header-anchor" href="#clint-hickman" aria-label="Permalink to &quot;Clint Hickman&quot;">​</a></h1><p>Clint Hickman is a member of the <a href="/entities/maricopa-county-board-of-supervisors">Maricopa County Board of Supervisors</a> in Arizona. He is named, in his official capacity, as one of the defendants in the election contest <a href="/entities/kari-lake">Kari Lake</a> filed on December 9, 2022 following the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>, alongside fellow supervisors <a href="/entities/bill-gates-arizona">Bill Gates</a>, <a href="/entities/jack-sellers">Jack Sellers</a>, <a href="/entities/thomas-galvin">Thomas Galvin</a>, and <a href="/entities/steve-gallardo">Steve Gallardo</a>.</p><p>As set out in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, the allegations against the Board include that it wrongly claimed Election Day tabulation problems had been fixed by mid-afternoon when at least 34 vote centers experienced breakdowns after 3 p.m., and that it attempted to conceal how many vote centers had waits exceeding 90 minutes.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/clint-hickman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clintHickman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  clintHickman as default
};
