import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Burning Glass Institute","description":"","frontmatter":{"title":"Burning Glass Institute","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["economy","labor","research"],"sources":["raw/badlands-news-brief-0ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/burning-glass-institute.md","filePath":"entities/burning-glass-institute.md","lastUpdated":null}');
const _sfc_main = { name: "entities/burning-glass-institute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="burning-glass-institute" tabindex="-1">Burning Glass Institute <a class="header-anchor" href="#burning-glass-institute" aria-label="Permalink to &quot;Burning Glass Institute&quot;">​</a></h1><p>The Burning Glass Institute is a labor-analytics research firm cited in coverage of the United States labor market.[1]</p><p>Its director of economic research, Guy Berger, was quoted by <a href="/entities/business-insider">Business Insider</a> in August 2024 assessing the deterioration in US employment data following the July jobs report, saying that &quot;there was a lot of data that was sort of in the greenish area, and now there&#39;s a lot more data that&#39;s flashing yellow lights.&quot;[1] The remark appeared in an article excerpted in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> arguing that America&#39;s post-pandemic hiring boom had ended, a subject covered at <a href="/concepts/july-2024-us-jobs-report">the July 2024 US jobs report</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Walz Cycle Consumes Itself as Tensions Pause&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/burning-glass-institute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const burningGlassInstitute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  burningGlassInstitute as default
};
