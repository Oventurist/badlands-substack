import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steve Gallardo","description":"","frontmatter":{"title":"Steve Gallardo","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","maricopa-county","elections","democrat"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/steve-gallardo.md","filePath":"entities/steve-gallardo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steve-gallardo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steve-gallardo" tabindex="-1">Steve Gallardo <a class="header-anchor" href="#steve-gallardo" aria-label="Permalink to &quot;Steve Gallardo&quot;">​</a></h1><p>Steve Gallardo is the sole Democratic member of the <a href="/entities/maricopa-county-board-of-supervisors">Maricopa County Board of Supervisors</a> during the 2022 election cycle. He is named in his official capacity as a defendant in the election contest <a href="/entities/kari-lake">Kari Lake</a> filed on December 9, 2022 following the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>, together with <a href="/entities/bill-gates-arizona">Bill Gates</a>, <a href="/entities/clint-hickman">Clint Hickman</a>, <a href="/entities/jack-sellers">Jack Sellers</a>, and <a href="/entities/thomas-galvin">Thomas Galvin</a>.</p><p>The allegations against the Board, as reported in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, concern its handling and public characterization of Election Day tabulator and printer failures in <a href="/entities/maricopa-county">Maricopa County</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steve-gallardo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steveGallardo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  steveGallardo as default
};
