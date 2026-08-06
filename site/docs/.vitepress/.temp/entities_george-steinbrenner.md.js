import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"George Steinbrenner","description":"","frontmatter":{"title":"George Steinbrenner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sports","baseball","new-york","owner"],"sources":["raw/badlands-news-brief-6e5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/george-steinbrenner.md","filePath":"entities/george-steinbrenner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/george-steinbrenner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="george-steinbrenner" tabindex="-1">George Steinbrenner <a class="header-anchor" href="#george-steinbrenner" aria-label="Permalink to &quot;George Steinbrenner&quot;">​</a></h1><p>George Steinbrenner was the owner of the <a href="/entities/new-york-yankees">New York Yankees</a> for nearly 40 years until his death.[1]</p><p>President <a href="/entities/donald-trump">Donald Trump</a> told Yankees players and coaches during his September 11, 2025 clubhouse visit that he had been friends with the late Steinbrenner.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manhunts, Mental Health, &amp; the Mother of a Monster&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/george-steinbrenner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const georgeSteinbrenner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  georgeSteinbrenner as default
};
