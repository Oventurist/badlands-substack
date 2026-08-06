import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Hsu","description":"","frontmatter":{"title":"Michael Hsu","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["health","research","cannabis","ucla"],"sources":["raw/badlands-news-brief-2e4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michael-hsu.md","filePath":"entities/michael-hsu.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-hsu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-hsu" tabindex="-1">Michael Hsu <a class="header-anchor" href="#michael-hsu" aria-label="Permalink to &quot;Michael Hsu&quot;">​</a></h1><p><strong>Dr. Michael Hsu</strong> is a physician-researcher at <a href="/entities/ucla-health">UCLA Health</a> and the first author of a large 2025 review of <a href="/concepts/medical-cannabis">medical cannabis</a> evidence published in <a href="/entities/jama">JAMA</a>.[1]</p><p>Hsu said that many people believe cannabis provides broad medical benefits even though the latest research often does not support those beliefs. &quot;While many people turn to cannabis seeking relief, our review highlights significant gaps between public perception and scientific evidence regarding its effectiveness for most medical conditions,&quot; he said.[1] The review he led examined more than 2,500 studies published between January 2010 and September 2025 and concluded that strong evidence was lacking for most conditions cannabis is commonly used to treat, including chronic pain, anxiety and insomnia.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Escalating Elections, Fragmented Forums, &amp; Merry Murder Metrics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-hsu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelHsu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelHsu as default
};
