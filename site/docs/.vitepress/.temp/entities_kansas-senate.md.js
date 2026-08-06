import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kansas Senate","description":"","frontmatter":{"title":"Kansas Senate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["kansas","state-legislature","legislation"],"sources":["raw/badlands-news-brief-6b6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kansas-senate.md","filePath":"entities/kansas-senate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kansas-senate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kansas-senate" tabindex="-1">Kansas Senate <a class="header-anchor" href="#kansas-senate" aria-label="Permalink to &quot;Kansas Senate&quot;">​</a></h1><p>The Kansas Senate is the upper chamber of the Kansas Legislature. In February 2023 the Republican-controlled body passed a &quot;women&#39;s bill of rights&quot; defining a &quot;woman&quot; as a biological female under state law, by a vote of 26–10 without any Democratic support.[1]</p><p>The measure, Senate Bill 180, was introduced by Republican Sen. <a href="/entities/renee-erickson">Renee Erickson</a>, who framed it as a codification of the legal definition of sex rather than a measure addressing gender identity.[1] Reporting at the time indicated the legislation was expected to pass the Republican-controlled Kansas House, but that Democratic Governor <a href="/entities/laura-kelly">Laura Kelly</a> was not expected to sign it into law.[1]</p><p>Badlands contributor <a href="/entities/justin-deschamps">Justin Deschamps</a> characterized the vote as evidence that &quot;a return to sanity has come to some places in the country.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Wheels of Justice Roll On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kansas-senate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kansasSenate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kansasSenate as default
};
