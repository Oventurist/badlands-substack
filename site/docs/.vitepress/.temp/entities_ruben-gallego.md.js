import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ruben Gallego","description":"","frontmatter":{"title":"Ruben Gallego","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","democrat","congress","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/ruben-gallego.md","filePath":"entities/ruben-gallego.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ruben-gallego.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ruben-gallego" tabindex="-1">Ruben Gallego <a class="header-anchor" href="#ruben-gallego" aria-label="Permalink to &quot;Ruben Gallego&quot;">​</a></h1><p>Ruben Gallego is a Democratic member of the United States House of Representatives from Arizona&#39;s Congressional District 3. In the Badlands Media corpus he appears as a named defendant in the December 2022 election contest filed by Republican challenger <a href="/entities/jeff-zink">Jeff Zink</a> and <a href="/entities/arizona-secretary-of-state">Secretary of State</a> candidate <a href="/entities/mark-finchem">Mark Finchem</a>.</p><h2 id="the-2022-contest" tabindex="-1">The 2022 contest <a class="header-anchor" href="#the-2022-contest" aria-label="Permalink to &quot;The 2022 contest&quot;">​</a></h2><p>Gallego defeated Zink in the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>. On December 9, 2022, within the five-day window that followed certification of the results by <a href="/entities/katie-hobbs">Katie Hobbs</a>, Zink and Finchem filed a joint suit naming Gallego, <a href="/entities/adrian-fontes">Adrian Fontes</a>, and Hobbs. As described in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, the allegations in the complaint are directed at Hobbs&#39;s administration of the election rather than at any conduct by Gallego.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ruben-gallego.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rubenGallego = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rubenGallego as default
};
