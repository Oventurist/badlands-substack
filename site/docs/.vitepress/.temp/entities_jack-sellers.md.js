import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jack Sellers","description":"","frontmatter":{"title":"Jack Sellers","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","maricopa-county","elections","republican"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/jack-sellers.md","filePath":"entities/jack-sellers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jack-sellers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jack-sellers" tabindex="-1">Jack Sellers <a class="header-anchor" href="#jack-sellers" aria-label="Permalink to &quot;Jack Sellers&quot;">​</a></h1><p>Jack Sellers is a member of the <a href="/entities/maricopa-county-board-of-supervisors">Maricopa County Board of Supervisors</a>, serving as its chairman during the 2022 election cycle. He is named in his official capacity as a defendant in the election contest <a href="/entities/kari-lake">Kari Lake</a> filed on December 9, 2022 after the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>, together with <a href="/entities/bill-gates-arizona">Bill Gates</a>, <a href="/entities/clint-hickman">Clint Hickman</a>, <a href="/entities/thomas-galvin">Thomas Galvin</a>, and <a href="/entities/steve-gallardo">Steve Gallardo</a>, county recorder <a href="/entities/stephen-richer">Stephen Richer</a>, elections director <a href="/entities/scott-jarrett">Scott Jarrett</a>, and Secretary of State <a href="/entities/katie-hobbs">Katie Hobbs</a>.</p><p>The complaint, as summarized in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, faults the Board for representing that Election Day tabulator failures had been resolved by mid-afternoon and for suppressing information about the extent of long lines at <a href="/entities/maricopa-county">Maricopa County</a> vote centers.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jack-sellers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jackSellers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jackSellers as default
};
