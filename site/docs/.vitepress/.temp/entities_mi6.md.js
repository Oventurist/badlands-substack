import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MI6","description":"","frontmatter":{"title":"MI6","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["mi6","british-intelligence","city-of-london","deep-state"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/mi6.md","filePath":"entities/mi6.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mi6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mi6" tabindex="-1">MI6 <a class="header-anchor" href="#mi6" aria-label="Permalink to &quot;MI6&quot;">​</a></h1><p>MI6, the British Secret Intelligence Service, appears in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as the intelligence agency that outranks its American and Israeli counterparts.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> states the hierarchy directly: &quot;Above the <a href="/entities/cia">CIA</a> and <a href="/entities/mossad">Mossad</a> is the British MI6. Above Tel Aviv and DC is the <a href="/entities/city-of-london">City of London</a>.&quot; The claim functions as the intelligence-community expression of the essay&#39;s broader thesis that visible national actors are middle management for a controlling layer seated in London, and it underpins the article&#39;s argument that focusing on Israel, Iran, or China mistakes the face of power for its substance.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mi6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mi6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mi6 as default
};
