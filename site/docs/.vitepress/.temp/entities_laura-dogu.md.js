import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Laura Dogu","description":"","frontmatter":{"title":"Laura Dogu","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["diplomacy","state-department","venezuela"],"sources":["raw/badlands-brief-bdc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/laura-dogu.md","filePath":"entities/laura-dogu.md","lastUpdated":null}');
const _sfc_main = { name: "entities/laura-dogu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="laura-dogu" tabindex="-1">Laura Dogu <a class="header-anchor" href="#laura-dogu" aria-label="Permalink to &quot;Laura Dogu&quot;">​</a></h1><p>Laura Dogu is an American career diplomat who previously served as US ambassador to Honduras and to Nicaragua.[1]</p><h2 id="charge-d-affaires-in-caracas" tabindex="-1">Chargé d&#39;affaires in Caracas <a class="header-anchor" href="#charge-d-affaires-in-caracas" aria-label="Permalink to &quot;Chargé d&#39;affaires in Caracas&quot;">​</a></h2><p>Dogu has led United States efforts on the ground in Caracas as chargé d&#39;affaires, overseeing restoration work at the chancery building ahead of a broader return of personnel and the eventual resumption of consular services at the <a href="/entities/us-embassy-in-caracas">US Embassy in Caracas</a>, which formally resumed operations in late March 2026 after being closed since 2019.[1] <a href="/entities/state-department">State Department</a> officials noted that Dogu met with US investors in the week before the reopening, emphasizing that the private sector would play a central role in rebuilding <a href="/entities/venezuela">Venezuela</a>&#39;s economy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Reversed Rulings &amp; Reasonable Regimes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bdc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bdc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/laura-dogu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lauraDogu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lauraDogu as default
};
