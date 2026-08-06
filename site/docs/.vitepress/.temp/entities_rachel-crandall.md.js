import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rachel Crandall","description":"","frontmatter":{"title":"Rachel Crandall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["activism","lgbt","michigan"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rachel-crandall.md","filePath":"entities/rachel-crandall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rachel-crandall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rachel-crandall" tabindex="-1">Rachel Crandall <a class="header-anchor" href="#rachel-crandall" aria-label="Permalink to &quot;Rachel Crandall&quot;">​</a></h1><p><strong>Rachel Crandall</strong> is an American transgender advocate and the head of <a href="/entities/transgender-michigan">Transgender Michigan</a>, a Michigan-based transgender advocacy organization.[1] She established the <a href="/concepts/transgender-day-of-visibility">Transgender Day of Visibility</a> in 2009, holding the first observance on March 31, 2009; the date has been used every year since.[1]</p><p>Crandall&#39;s role in founding the observance became relevant to political commentary in 2024, when the fixed March 31 date coincided with Easter Sunday and prompted a national dispute over a presidential proclamation issued by <a href="/entities/joe-biden">Joe Biden</a>.[1] Commentators in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> cited the 2009 origin of the date to argue that the overlap was structural rather than newly engineered, while still contending that the proclamation itself was intended to inflame the <a href="/concepts/culture-war">culture war</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rachel-crandall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rachelCrandall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rachelCrandall as default
};
