import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thomas Galvin","description":"","frontmatter":{"title":"Thomas Galvin","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","maricopa-county","elections","republican"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/thomas-galvin.md","filePath":"entities/thomas-galvin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/thomas-galvin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thomas-galvin" tabindex="-1">Thomas Galvin <a class="header-anchor" href="#thomas-galvin" aria-label="Permalink to &quot;Thomas Galvin&quot;">​</a></h1><p>Thomas Galvin is a member of the <a href="/entities/maricopa-county-board-of-supervisors">Maricopa County Board of Supervisors</a> in Arizona. He is named in his official capacity among the defendants in <a href="/entities/kari-lake">Kari Lake</a>&#39;s December 9, 2022 election contest arising from the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>, alongside <a href="/entities/bill-gates-arizona">Bill Gates</a>, <a href="/entities/clint-hickman">Clint Hickman</a>, <a href="/entities/jack-sellers">Jack Sellers</a>, and <a href="/entities/steve-gallardo">Steve Gallardo</a>.</p><p>As described in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, the Board is accused of misrepresenting the timeline of Election Day tabulator failures across <a href="/entities/maricopa-county">Maricopa County</a>&#39;s 223 vote centers and of concealing the number of centers with waits over 90 minutes.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/thomas-galvin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thomasGalvin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thomasGalvin as default
};
