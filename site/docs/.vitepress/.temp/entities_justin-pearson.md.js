import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Justin Pearson","description":"","frontmatter":{"title":"Justin Pearson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["tennessee","democrats","gun-control","badlands-news-brief"],"sources":["raw/badlands-news-brief-001.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/justin-pearson.md","filePath":"entities/justin-pearson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/justin-pearson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="justin-pearson" tabindex="-1">Justin Pearson <a class="header-anchor" href="#justin-pearson" aria-label="Permalink to &quot;Justin Pearson&quot;">​</a></h1><p>Justin Pearson is a Democratic member of the Tennessee House of Representatives. In April 2023 he joined fellow Democratic state Representatives <a href="/entities/justin-jones">Justin Jones</a> and <a href="/entities/gloria-johnson">Gloria Johnson</a> in the state House chamber alongside protesters, chanting for gun-control legislation after the <a href="/concepts/nashville-school-shooting">Nashville school shooting</a> in which three children and three adults were killed.[1] The demonstration prompted a GOP-led move to expel the three Democrats from the House.[1]</p><p>Pearson and Jones were subsequently returned to office, with Jones voted back in roughly a week before his April 17, 2023 attempt to carry a child-size coffin into the Tennessee State Capitol during a gun-violence protest.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: FOX Guarding the Hen House?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-001" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-001</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/justin-pearson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const justinPearson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  justinPearson as default
};
