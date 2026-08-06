import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"New Caledonia","description":"","frontmatter":{"title":"New Caledonia","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","pacific","elections","unrest","colonialism"],"sources":["raw/badlands-news-brief-502.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/new-caledonia.md","filePath":"entities/new-caledonia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/new-caledonia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="new-caledonia" tabindex="-1">New Caledonia <a class="header-anchor" href="#new-caledonia" aria-label="Permalink to &quot;New Caledonia&quot;">​</a></h1><p>New Caledonia is a Pacific island territory of France that became a focus of international attention in 2024 amid violent unrest and the postponement of its local elections.[1]</p><h2 id="_2024-unrest" tabindex="-1">2024 unrest <a class="header-anchor" href="#_2024-unrest" aria-label="Permalink to &quot;2024 unrest&quot;">​</a></h2><p>The territory was hit by violent unrest between indigenous Kanaks and French loyalists, including a September 2024 police operation in which two people were shot dead.[1]</p><h2 id="election-delay" tabindex="-1">Election delay <a class="header-anchor" href="#election-delay" aria-label="Permalink to &quot;Election delay&quot;">​</a></h2><p>On Tuesday, October 1, 2024, French Prime Minister <a href="/entities/michel-barnier">Michel Barnier</a> told parliament that he was delaying local elections in New Caledonia until the end of 2025.[1] Badlands commentary framed the postponement as part of a broader pattern in which the delaying of elections is &quot;becoming increasingly normalized,&quot; noting that Barnier had taken the decision less than one month into his tenure.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sidecar Debates at Home, Missile Barrages Abroad&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-502" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-502</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/new-caledonia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newCaledonia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newCaledonia as default
};
