import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sean Vitka","description":"","frontmatter":{"title":"Sean Vitka","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["privacy","surveillance","attorney","civil-liberties"],"sources":["raw/badlands-news-brief-7a7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sean-vitka.md","filePath":"entities/sean-vitka.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sean-vitka.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sean-vitka" tabindex="-1">Sean Vitka <a class="header-anchor" href="#sean-vitka" aria-label="Permalink to &quot;Sean Vitka&quot;">​</a></h1><p>Sean Vitka is an attorney with the nonprofit <a href="/entities/demand-progress">Demand Progress</a> who works on surveillance and digital privacy policy.[1]</p><p>Vitka was quoted in June 2023 reacting to the newly declassified report, produced for Director of National Intelligence <a href="/entities/avril-haines">Avril Haines</a> by her own panel of advisers, documenting the intelligence community&#39;s purchases of commercially available data on American citizens.[1] He called the findings a confirmation of long-standing fears: &quot;This report reveals what we feared most. Intelligence agencies are flouting the law and buying information about Americans that Congress and the Supreme Court have made clear the government should not have.&quot;[1]</p><p>His critique framed the practice as an end-run around constitutional protections rather than a lawful collection program, part of a wider pattern in which the government used &quot;craven interpretations of aging laws&quot; to bypass privacy rights.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Defiant, Biden Protected &amp; Woke Worn&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sean-vitka.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seanVitka = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seanVitka as default
};
