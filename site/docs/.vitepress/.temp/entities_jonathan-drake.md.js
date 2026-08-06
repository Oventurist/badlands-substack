import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jonathan Drake","description":"","frontmatter":{"title":"Jonathan Drake","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands","commentary","law","juries"],"sources":["raw/badlands-brief-5ba.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jonathan-drake.md","filePath":"entities/jonathan-drake.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jonathan-drake.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jonathan-drake" tabindex="-1">Jonathan Drake <a class="header-anchor" href="#jonathan-drake" aria-label="Permalink to &quot;Jonathan Drake&quot;">​</a></h1><p>Jonathan Drake is a <a href="/entities/badlands-media">Badlands Media</a> contributor who works frequently with <a href="/entities/ashe-in-america">Ashe in America</a> on legal-themed content.[1]</p><p>At the Deadwood <a href="/entities/gart">GART</a>, Drake and Ashe in America debuted the Badlands Jury experience, a live mock-trial format in which Badlands was fictitiously indicted for violating the <a href="/concepts/electoral-confidence-preservation-act">Electoral Confidence Preservation Act</a>, an invented law criminalizing doubt about the delivery mechanism of democracy; the Brief reported it drew smash reviews.[1]</p><p>Drake also joined Ashe in America on the program <a href="/entities/culture-of-change">Culture of Change</a> to discuss the <a href="/entities/tyler-robinson">Tyler Robinson</a> case, along with broader questions about trials, juries, illegitimate international courts and the disputed Colombian election.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Guardians, Shields, &amp; Iranian House Arrest&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-5ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-5ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jonathan-drake.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jonathanDrake = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jonathanDrake as default
};
