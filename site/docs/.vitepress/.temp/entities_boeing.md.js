import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Boeing","description":"","frontmatter":{"title":"Boeing","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["corporation","aerospace","deep-state","markets"],"sources":["raw/a-week-to-remember.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/boeing.md","filePath":"entities/boeing.md","lastUpdated":null}');
const _sfc_main = { name: "entities/boeing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boeing" tabindex="-1">Boeing <a class="header-anchor" href="#boeing" aria-label="Permalink to &quot;Boeing&quot;">​</a></h1><p>Boeing is the largest American aerospace manufacturer and, with the European consortium <a href="/entities/airbus">Airbus</a>, one of the two dominant producers of commercial aircraft worldwide.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>The Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> offers Boeing&#39;s share price as circumstantial evidence for its claim that <a href="/concepts/deep-state">Deep State</a> power was shifting from the United States to Europe. <a href="/entities/erik-carlson">Erik Carlson</a> writes: &quot;Boeing stock was at $323 the day <a href="/entities/joe-biden">Biden</a> took office. Within eight weeks, it was down to $95 a share.&quot;</p><p>The author then poses a pair of rhetorical questions — &quot;Have you heard any bad news come out about Airbus during the past few years? Where is Airbus located?&quot; — answering with a single word: &quot;France.&quot; The implication drawn in the article is that the sustained flow of negative coverage and misfortune affecting Boeing, contrasted with the relative quiet around its European rival, reflects a deliberate transfer of industrial and financial advantage across the Atlantic rather than ordinary corporate fortunes.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/boeing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boeing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  boeing as default
};
