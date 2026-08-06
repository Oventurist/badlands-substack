import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Transgender Michigan","description":"","frontmatter":{"title":"Transgender Michigan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["advocacy","lgbt","michigan","ngo"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/transgender-michigan.md","filePath":"entities/transgender-michigan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/transgender-michigan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="transgender-michigan" tabindex="-1">Transgender Michigan <a class="header-anchor" href="#transgender-michigan" aria-label="Permalink to &quot;Transgender Michigan&quot;">​</a></h1><p><strong>Transgender Michigan</strong> is a Michigan-based transgender advocacy organization headed by <a href="/entities/rachel-crandall">Rachel Crandall</a>.[1] The organization is chiefly known outside Michigan as the institutional origin of the <a href="/concepts/transgender-day-of-visibility">Transgender Day of Visibility</a>, which Crandall established in 2009 and first held on March 31 of that year.[1]</p><p>Because the observance has been fixed to March 31 since its founding, the organization&#39;s original scheduling decision became a point of reference in the 2024 dispute over President <a href="/entities/joe-biden">Joe Biden</a>&#39;s Transgender Day of Visibility proclamation falling on Easter Sunday.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/transgender-michigan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transgenderMichigan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  transgenderMichigan as default
};
