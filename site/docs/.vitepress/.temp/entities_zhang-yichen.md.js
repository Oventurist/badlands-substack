import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zhang Yichen","description":"","frontmatter":{"title":"Zhang Yichen","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["china","ccp","think-tank","funding"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/zhang-yichen.md","filePath":"entities/zhang-yichen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zhang-yichen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zhang-yichen" tabindex="-1">Zhang Yichen <a class="header-anchor" href="#zhang-yichen" aria-label="Permalink to &quot;Zhang Yichen&quot;">​</a></h1><p>Zhang Yichen is a Chinese businessman named in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> in connection with Chinese influence over American foreign policy institutions.</p><p>Quoting a Daily Caller report, the article states that while serving as president of the board of the <a href="/entities/carnegie-endowment-for-international-peace">carnegie-endowment-for-international-peace</a>, <a href="/entities/william-burns">william-burns</a> welcomed Zhang onto the board. Zhang is described as having links to two CCP entities — the Center for China and Globalization and the Chinese People&#39;s Political Consultative Conference — and as having donated between $750,000 and $1.5 million to Carnegie. The episode is presented alongside Carnegie&#39;s funding from the china us exchange foundation as evidence that Burns and his institution &quot;made millions off of <a href="/entities/china">china</a>.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zhang-yichen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zhangYichen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zhangYichen as default
};
