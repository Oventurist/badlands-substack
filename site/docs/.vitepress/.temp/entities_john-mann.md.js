import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Mann","description":"","frontmatter":{"title":"John Mann","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","antisemitism","house-of-lords","nhs","government-adviser"],"sources":["raw/badlands-news-brief-6e6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-mann.md","filePath":"entities/john-mann.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-mann.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-mann" tabindex="-1">John Mann <a class="header-anchor" href="#john-mann" aria-label="Permalink to &quot;John Mann&quot;">​</a></h1><p>Lord John Mann is a British peer associated with the United Kingdom government&#39;s work on antisemitism.[1]</p><h2 id="nhs-antisemitism-review" tabindex="-1">NHS antisemitism review <a class="header-anchor" href="#nhs-antisemitism-review" aria-label="Permalink to &quot;NHS antisemitism review&quot;">​</a></h2><p>In October 2025 the Prime Minister ordered an urgent review of antisemitism and all forms of racism in the <a href="/entities/nhs">National Health Service</a>, and Mann was named to lead it.[1] The review was announced following recent incidents of antisemitism from doctors that drew stark attention to problems of culture and regulation in the health system, and was tasked with looking at how to protect patients and staff from racism and hold perpetrators to account.[1]</p><p>The review was accompanied by the immediate rollout of strengthened mandatory antisemitism and antiracism training across the health service and a directive for <a href="/entities/nhs-england">NHS England</a> to review its uniform guidance.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>The Badlands News Brief presented the Mann review alongside commentary arguing that <a href="/concepts/antisemitism">antisemitism</a> in the UK is frequently downplayed, denied, or justified by reference to the war in Gaza, and that many British Jews are now afraid to be visibly Jewish in public.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Familiar Formulas, Blue Skies, &amp; Antisemitic Nonchalance&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-mann.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnMann = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnMann as default
};
