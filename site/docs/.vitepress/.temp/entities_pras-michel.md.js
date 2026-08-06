import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pras Michel","description":"","frontmatter":{"title":"Pras Michel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["haiti","foreign-lobbying","celebrity","corruption"],"sources":["raw/badlands-news-brief-120.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pras-michel.md","filePath":"entities/pras-michel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pras-michel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pras-michel" tabindex="-1">Pras Michel <a class="header-anchor" href="#pras-michel" aria-label="Permalink to &quot;Pras Michel&quot;">​</a></h1><p>Pras Michel is a musician known as a member of the Fugees and a figure in a federal conspiracy case tied to <a href="/entities/haiti">Haiti</a>, China, and the United States.[1]</p><h2 id="conviction" tabindex="-1">Conviction <a class="header-anchor" href="#conviction" aria-label="Permalink to &quot;Conviction&quot;">​</a></h2><p>Michel was found guilty on ten criminal counts in 2023 in a conspiracy case that linked Haiti, China, and the United States together through an illegal foreign lobbying scheme.[1] He has also been accused of outright stealing charitable funds intended for his native homeland.[1] Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> cited his case alongside broader allegations that U.S. aid to Haiti was laundered through NGOs such as the <a href="/entities/clinton-foundation">Clinton Foundation</a>, noting that Haiti&#39;s collapse followed less than a year after his verdict.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;J6 Returns to Headlines as Fear Mars AI and Airplanes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-120" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-120</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pras-michel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prasMichel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  prasMichel as default
};
