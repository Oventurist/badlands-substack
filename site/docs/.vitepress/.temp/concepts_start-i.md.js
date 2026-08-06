import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"START I","description":"","frontmatter":{"title":"START I","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["nuclear","arms-control","russia","treaty"],"sources":["raw/badlands-news-brief-36a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/start-i.md","filePath":"concepts/start-i.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/start-i.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="start-i" tabindex="-1">START I <a class="header-anchor" href="#start-i" aria-label="Permalink to &quot;START I&quot;">​</a></h1><p>The Strategic Arms Reduction Treaty (START I) was signed by the United States and <a href="/entities/russia">Russia</a> in 1991.[1]</p><p>Among its effects, the treaty was supposed to have eliminated the possibility of nuclear weapons being transported aboard surface ships, although many observers have often questioned Moscow&#39;s adherence to it.[1] The point resurfaced in August 2024 when leaked documents reported by the <a href="/entities/financial-times">Financial Times</a> indicated that Russia remained evidently capable of transporting nuclear weapons on surface ships — a practice experts say carries significant risk of escalation or accident — as part of the reporting on alleged <a href="/concepts/russian-nuclear-strike-plans-leak">Russian nuclear strike plans against NATO targets</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Monkeypox ... For Real? And Other Info War Oddities&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-36a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-36a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/start-i.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const startI = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  startI as default
};
