import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zhong Nanshan","description":"","frontmatter":{"title":"Zhong Nanshan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","epidemiology","covid-19","public-health"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/zhong-nanshan.md","filePath":"entities/zhong-nanshan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zhong-nanshan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zhong-nanshan" tabindex="-1">Zhong Nanshan <a class="header-anchor" href="#zhong-nanshan" aria-label="Permalink to &quot;Zhong Nanshan&quot;">​</a></h1><p>Zhong Nanshan is one of China&#39;s leading pulmonologists and epidemiologists.[1]</p><p>In an interview with China-based media on May 19, 2025, Zhong said that the &quot;razor blade throat&quot; symptom — severe burning throat pain — was more pronounced in the ongoing wave of COVID-19 resurgence in China, and was accompanied by more frequent coughing.[1] He identified the dominant strain in the wave as the Omicron XDV variant, describing it as highly transmissible but relatively less virulent, with early symptoms including fever, headaches, fatigue, a burning throat, and severe coughing.[1] Zhong assessed that the epidemic remained in its &quot;climbing phase&quot; and would likely last six to eight weeks before subsiding by the end of June.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zhong-nanshan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zhongNanshan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zhongNanshan as default
};
