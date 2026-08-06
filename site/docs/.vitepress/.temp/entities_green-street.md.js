import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Green Street","description":"","frontmatter":{"title":"Green Street","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["real-estate","data","badlands-news-brief"],"sources":["raw/badlands-news-brief-001.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/green-street.md","filePath":"entities/green-street.md","lastUpdated":null}');
const _sfc_main = { name: "entities/green-street.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="green-street" tabindex="-1">Green Street <a class="header-anchor" href="#green-street" aria-label="Permalink to &quot;Green Street&quot;">​</a></h1><p>Green Street is a real estate data and analytics firm whose valuation indices are used to track commercial property price movements.[1]</p><p>During the 2023 <a href="/concepts/commercial-real-estate-crisis">commercial real estate crisis</a>, Green Street reported that Washington, D.C. office space values had slid 36% through March 2023 compared with a year earlier, attributing the decline to rising vacancies amid the post-Covid rise of remote and hybrid work.[1] The figure was cited alongside <a href="/entities/kastle-systems">Kastle Systems</a> occupancy data in coverage of <a href="/entities/brookfield">Brookfield</a>&#39;s $161.4 million default on twelve D.C. office buildings.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: FOX Guarding the Hen House?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-001" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-001</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/green-street.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const greenStreet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  greenStreet as default
};
