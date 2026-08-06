import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Alberque","description":"","frontmatter":{"title":"William Alberque","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nato","nuclear","arms-control","analyst"],"sources":["raw/badlands-news-brief-36a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/william-alberque.md","filePath":"entities/william-alberque.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-alberque.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-alberque" tabindex="-1">William Alberque <a class="header-anchor" href="#william-alberque" aria-label="Permalink to &quot;William Alberque&quot;">​</a></h1><p>William Alberque is a former <a href="/entities/nato">NATO</a> official who comments publicly on nuclear and arms-control matters.[1]</p><p>In August 2024 he was quoted in reporting on the <a href="/concepts/russian-nuclear-strike-plans-leak">Russian nuclear strike plans leak</a>, saying of the alleged Russian target mapping that &quot;there could be hundreds, if not thousands, of targets mapped across Europe, including military and infrastructure targets.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Monkeypox ... For Real? And Other Info War Oddities&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-36a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-36a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-alberque.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamAlberque = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamAlberque as default
};
