import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Citigroup","description":"","frontmatter":{"title":"Citigroup","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","finance","argentina","wall-street"],"sources":["raw/badlands-news-brief-021.md"],"confidence":"low"},"headers":[],"relativePath":"entities/citigroup.md","filePath":"entities/citigroup.md","lastUpdated":null}');
const _sfc_main = { name: "entities/citigroup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="citigroup" tabindex="-1">Citigroup <a class="header-anchor" href="#citigroup" aria-label="Permalink to &quot;Citigroup&quot;">​</a></h1><p>Citigroup is a major American global bank.[1] It was one of three lenders — with <a href="/entities/jpmorgan-chase">JPMorgan Chase</a> and <a href="/entities/bank-of-america">Bank of America</a> — slated to provide a $20 billion bank-led debt facility to <a href="/entities/argentina">Argentina</a> as part of the <a href="/concepts/argentina-bailout-package-2025">2025 Argentina bailout package</a> backed by the <a href="/entities/donald-trump">Trump</a> administration.[1]</p><p>That facility was shelved in November 2025 in favor of a smaller, short-term loan package, after Argentina&#39;s October congressional elections delivered a resounding victory for President <a href="/entities/javier-milei">Javier Milei</a>&#39;s party and sent Argentine bonds and currency rallying.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Seditious Overreactions, Billion Dollar Bailouts, &amp; NATO-Style Guarantees&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-021" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-021</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/citigroup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const citigroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  citigroup as default
};
