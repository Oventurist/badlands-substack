import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Larry Nassar","description":"","frontmatter":{"title":"Larry Nassar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sexual-abuse","gymnastics","olympics","criminal-justice"],"sources":["raw/badlands-news-brief-11d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/larry-nassar.md","filePath":"entities/larry-nassar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/larry-nassar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="larry-nassar" tabindex="-1">Larry Nassar <a class="header-anchor" href="#larry-nassar" aria-label="Permalink to &quot;Larry Nassar&quot;">​</a></h1><p>Larry Nassar is a convicted sexual predator and former Team USA gymnastics doctor.[1] He is serving a sentence of 40 to 175 years in prison for sexually abusing hundreds of gymnasts, including Olympians <a href="/entities/simone-biles">Simone Biles</a>, Aly Raisman and Gabby Douglas.[1]</p><p>Nassar&#39;s crimes re-entered public debate in June 2025 when activist <a href="/entities/riley-gaines">Riley Gaines</a> invoked them in an online exchange with Biles over transgender participation in women&#39;s sports, contrasting the abuse Biles had witnessed and denounced with what Gaines characterized as Biles&#39;s willingness to see women &quot;forced to strip naked in front of men.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fake MAGA Break-ups and Based Accelerationism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/larry-nassar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const larryNassar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  larryNassar as default
};
