import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ali Al-Thawadi","description":"","frontmatter":{"title":"Ali Al-Thawadi","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["qatar","mediation","diplomacy","iran"],"sources":["raw/badlands-brief-029.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ali-al-thawadi.md","filePath":"entities/ali-al-thawadi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ali-al-thawadi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ali-al-thawadi" tabindex="-1">Ali Al-Thawadi <a class="header-anchor" href="#ali-al-thawadi" aria-label="Permalink to &quot;Ali Al-Thawadi&quot;">​</a></h1><p><strong>Ali Al-Thawadi</strong> is a Qatari mediator involved in the United States–<a href="/entities/iran">Iran</a> negotiations of June 2026.[1]</p><p>Axios reported that negotiators reached a tentative agreement on a Wednesday night following talks involving Al-Thawadi and Iranian Foreign Minister <a href="/entities/abbas-araghchi">Abbas Araghchi</a>, citing diplomats and US officials familiar with the discussions.[1] The resulting framework, reportedly to be called the <a href="/concepts/islamabad-agreement">Islamabad agreement</a>, was mediated jointly by <a href="/entities/qatar">Qatar</a> and <a href="/entities/pakistan">Pakistan</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mixed Gender Crews, Trafficking Stings, &amp; Shadow Cabal Reruns&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-029" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-029</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ali-al-thawadi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aliAlThawadi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aliAlThawadi as default
};
