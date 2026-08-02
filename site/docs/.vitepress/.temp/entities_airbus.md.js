import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Airbus","description":"","frontmatter":{"title":"Airbus","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["corporation","aerospace","europe","deep-state"],"sources":["raw/a-week-to-remember.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/airbus.md","filePath":"entities/airbus.md","lastUpdated":null}');
const _sfc_main = { name: "entities/airbus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="airbus" tabindex="-1">Airbus <a class="header-anchor" href="#airbus" aria-label="Permalink to &quot;Airbus&quot;">​</a></h1><p>Airbus is the European aerospace consortium that competes with <a href="/entities/boeing">Boeing</a> for dominance of the global commercial aircraft market. Its principal operations and headquarters are based in France.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>Airbus is invoked in the Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> as a foil to Boeing. Having noted that Boeing&#39;s share price fell from $323 to $95 within eight weeks of <a href="/entities/joe-biden">Joe Biden</a> taking office, <a href="/entities/erik-carlson">Erik Carlson</a> asks: &quot;Have you heard any bad news come out about Airbus during the past few years? Where is Airbus located?&quot; The answer given is &quot;France.&quot;</p><p>The comparison supports the article&#39;s forecast that &quot;the <a href="/concepts/deep-state">Deep State</a> in America will continue to shift to Europe, more outside of <a href="/entities/donald-trump">Trump</a>&#39;s control,&quot; and its accompanying prediction of a struggle among what the author calls Cabal families in England, France, and Germany for a larger share of that power. Airbus itself is not accused of any conduct in the source; it functions as a geographic and reputational contrast.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/airbus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const airbus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  airbus as default
};
