import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gloria Johnson","description":"","frontmatter":{"title":"Gloria Johnson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["tennessee","democrats","gun-control","badlands-news-brief"],"sources":["raw/badlands-news-brief-001.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gloria-johnson.md","filePath":"entities/gloria-johnson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gloria-johnson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gloria-johnson" tabindex="-1">Gloria Johnson <a class="header-anchor" href="#gloria-johnson" aria-label="Permalink to &quot;Gloria Johnson&quot;">​</a></h1><p>Gloria Johnson is a Democratic member of the Tennessee House of Representatives. In April 2023 she joined fellow Democratic state Representatives <a href="/entities/justin-jones">Justin Jones</a> and <a href="/entities/justin-pearson">Justin Pearson</a> in joining protesters in the state House chamber and chanting for gun-control legislation following the <a href="/concepts/nashville-school-shooting">mass shooting in Nashville</a> that killed three children and three adults.[1] The protest prompted a GOP-led effort to expel the three Democrats from the chamber.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: FOX Guarding the Hen House?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-001" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-001</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gloria-johnson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gloriaJohnson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gloriaJohnson as default
};
