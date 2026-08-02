import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bob Rae","description":"","frontmatter":{"title":"Bob Rae","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["canada","rhodes-scholar","ndp","liberal-party"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/bob-rae.md","filePath":"entities/bob-rae.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bob-rae.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bob-rae" tabindex="-1">Bob Rae <a class="header-anchor" href="#bob-rae" aria-label="Permalink to &quot;Bob Rae&quot;">​</a></h1><p>Bob Rae is a Canadian politician who served as the <a href="/entities/new-democratic-party">New Democratic Party</a> Premier of Ontario from 1990 to 1995 before later joining the Liberal Party of Canada. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, he is described as a Rhodes Scholar who acted as gatekeeper for <a href="/entities/chrystia-freeland">Chrystia Freeland</a>&#39;s entry into federal politics.</p><h2 id="role-in-freeland-s-rise" tabindex="-1">Role in Freeland&#39;s rise <a class="header-anchor" href="#role-in-freeland-s-rise" aria-label="Permalink to &quot;Role in Freeland&#39;s rise&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that Freeland&#39;s admission into politics &quot;was managed by another Rhodes Scholar named Bob Rae, who served as interim controller of the Liberal Party during several of the Harper years and was a major player in <a href="/entities/canada-2020">Canada 2020</a>.&quot; Rae, the article states, &quot;was happy to abdicate his seat to Freeland, ensuring her entry into Trudeau&#39;s inner circle, and thus becoming his official handler.&quot;</p><h2 id="ontario-hydro-and-maurice-strong" tabindex="-1">Ontario Hydro and Maurice Strong <a class="header-anchor" href="#ontario-hydro-and-maurice-strong" aria-label="Permalink to &quot;Ontario Hydro and Maurice Strong&quot;">​</a></h2><p>A footnote adds that as Premier of Ontario, Rae brought in <a href="/entities/maurice-strong">Maurice Strong</a> as President of Ontario Hydro from 1992 to 1994, &quot;during which time Canada&#39;s nuclear sector was nearly shut down and a prototype for a &#39;green New Deal&#39; was applied.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bob-rae.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bobRae = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bobRae as default
};
