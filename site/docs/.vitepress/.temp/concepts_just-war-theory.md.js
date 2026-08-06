import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Just War Theory","description":"","frontmatter":{"title":"Just War Theory","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["doctrine","christianity","warfare","ethics"],"sources":["raw/badlands-news-brief-6f7.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/just-war-theory.md","filePath":"concepts/just-war-theory.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/just-war-theory.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="just-war-theory" tabindex="-1">Just War Theory <a class="header-anchor" href="#just-war-theory" aria-label="Permalink to &quot;Just War Theory&quot;">​</a></h1><p>Just War Theory is the Christian doctrine of warfare described in the Badlands News Brief as having been created by Saint Augustine in the 4th century, arguing that preserving and protecting civilian lives during warfare should be a top priority for all combatants at all times.[1] The Brief states that this was the doctrine on which all European nations operated for 1,600 years.[1]</p><p>The concept appears in the Brief&#39;s discussion of <a href="/entities/winston-churchill">Winston Churchill</a>, who is said to have forsaken Just War Theory in his decision to engage in total warfare against the European continent, replacing it with the &quot;strategic bombing&quot; doctrine drawn up by Marshal of the <a href="/entities/royal-air-force">Royal Air Force</a> <a href="/entities/arthur-harris">Arthur Harris</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Psyops Abound as the Media Landscape Shifts Rapidly&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6f7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6f7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/just-war-theory.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const justWarTheory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  justWarTheory as default
};
