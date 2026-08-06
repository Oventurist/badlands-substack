import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Adrian Fontes","description":"","frontmatter":{"title":"Adrian Fontes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","elections","democratic-party","secretary-of-state","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"low"},"headers":[],"relativePath":"entities/adrian-fontes.md","filePath":"entities/adrian-fontes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/adrian-fontes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="adrian-fontes" tabindex="-1">Adrian Fontes <a class="header-anchor" href="#adrian-fontes" aria-label="Permalink to &quot;Adrian Fontes&quot;">​</a></h1><p>Adrian Fontes is the Democratic politician who defeated Republican <a href="/entities/mark-finchem">Mark Finchem</a> in the contest for Secretary of State of Arizona in the <a href="/concepts/2022-arizona-general-election">2022 general election</a>.[1]</p><p>Fontes was named as a defendant in the lawsuit that Finchem filed jointly with congressional candidate <a href="/entities/jeff-zink">Jeff Zink</a> on Friday, December 9, 2022, one of several suits brought by Republican candidates during the five-day contest window that followed certification of the results on December 5.[1] The other defendants were Representative <a href="/entities/ruben-gallego">Ruben Gallego</a> and sitting Secretary of State <a href="/entities/katie-hobbs">Katie Hobbs</a>; the substance of the complaint concerned Hobbs&#39;s alleged abuses of office rather than conduct by Fontes himself.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Arizona Earthquake!&quot;, URL: <a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arizona-earthquake</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/adrian-fontes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adrianFontes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  adrianFontes as default
};
