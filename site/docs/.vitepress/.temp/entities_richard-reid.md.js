import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Richard Reid","description":"","frontmatter":{"title":"Richard Reid","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["terrorism","aviation-security","tsa","post-9-11"],"sources":["raw/badlands-news-brief-6af.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/richard-reid.md","filePath":"entities/richard-reid.md","lastUpdated":null}');
const _sfc_main = { name: "entities/richard-reid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="richard-reid" tabindex="-1">Richard Reid <a class="header-anchor" href="#richard-reid" aria-label="Permalink to &quot;Richard Reid&quot;">​</a></h1><p>Richard Reid is the man behind the attempted 2001 shoe bombing of a trans-Atlantic American Airlines flight, during which he tried to ignite explosives concealed inside his footwear.[1]</p><h2 id="legacy-in-airport-screening" tabindex="-1">Legacy in airport screening <a class="header-anchor" href="#legacy-in-airport-screening" aria-label="Permalink to &quot;Legacy in airport screening&quot;">​</a></h2><p>The incident led the <a href="/entities/transportation-security-administration">Transportation Security Administration</a> to place heightened emphasis on screening footwear for concealed threats, and in 2006 the agency introduced the rule requiring all passengers to remove their shoes at security checkpoints — a requirement that quickly became a staple of post-9/11 airport security procedures across the United States.[1]</p><p>The policy attributed to the Reid episode was relaxed only gradually: children aged 12 and under were exempted in 2011, passengers aged 75 and older in 2012, and in July 2025 news outlets reported that passengers at certain US airports were no longer required to remove their shoes at all.[1] Badlands commentary by <a href="/entities/ashe-in-america">Ashe in America</a> characterized the fifteen-year lifespan of the blanket rule as the product of an equity rationale rather than security efficacy, since threat-based profiling had been framed as racist.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: ICE Swarms, TikTok Pivots, &amp; Shoes Stay On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6af" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6af</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/richard-reid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const richardReid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  richardReid as default
};
