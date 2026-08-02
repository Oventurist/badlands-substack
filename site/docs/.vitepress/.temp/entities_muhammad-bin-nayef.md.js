import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Muhammad bin Nayef","description":"","frontmatter":{"title":"Muhammad bin Nayef","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["saudi-arabia","house-of-saud","2017-purge","succession"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/muhammad-bin-nayef.md","filePath":"entities/muhammad-bin-nayef.md","lastUpdated":null}');
const _sfc_main = { name: "entities/muhammad-bin-nayef.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="muhammad-bin-nayef" tabindex="-1">Muhammad bin Nayef <a class="header-anchor" href="#muhammad-bin-nayef" aria-label="Permalink to &quot;Muhammad bin Nayef&quot;">​</a></h1><p>Muhammad bin Nayef, referred to in the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> simply as Nayef, was the crown prince of <a href="/entities/saudi-arabia">saudi-arabia</a> displaced by <a href="/entities/mohammed-bin-salman">mohammed-bin-salman</a>.</p><p>The source describes the moves made by MBS and <a href="/entities/king-salman">king-salman</a> to depose &quot;the would-be Crown Prince, and the prince/minister in charge of the Saudi military, both cousins of MBS,&quot; who were arrested and stripped of all their powers. Nayef, it states, was charged with treason and later accused of plotting to murder King Salman.</p><p>His removal is presented in the article as part of the November 2017 consolidation in which roughly forty relatives and officials — a number the source reads as an Arabian idiom for &quot;dozens&quot; rather than an exact count — were detained at the Riyadh Ritz-Carlton on accusations of corruption and treason, alongside figures such as <a href="/entities/alwaleed-bin-talal">alwaleed-bin-talal</a>. The essay&#39;s argument is that these actions were not directed by <a href="/entities/donald-trump">donald-trump</a> but originated with MBS himself.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/muhammad-bin-nayef.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const muhammadBinNayef = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  muhammadBinNayef as default
};
