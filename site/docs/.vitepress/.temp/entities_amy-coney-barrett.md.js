import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amy Coney Barrett","description":"","frontmatter":{"title":"Amy Coney Barrett","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["supreme-court","elections","mail-in-ballots","judiciary"],"sources":["raw/badlands-brief-169.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amy-coney-barrett.md","filePath":"entities/amy-coney-barrett.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amy-coney-barrett.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amy-coney-barrett" tabindex="-1">Amy Coney Barrett <a class="header-anchor" href="#amy-coney-barrett" aria-label="Permalink to &quot;Amy Coney Barrett&quot;">​</a></h1><p>Amy Coney Barrett is an Associate Justice of the <a href="/entities/supreme-court-of-the-united-states">Supreme Court of the United States</a> who authored the majority opinion in the Court&#39;s June 2026 decision upholding Mississippi&#39;s late-arriving mail ballot law.[1]</p><h2 id="mississippi-mail-ballot-opinion" tabindex="-1">Mississippi mail ballot opinion <a class="header-anchor" href="#mississippi-mail-ballot-opinion" aria-label="Permalink to &quot;Mississippi mail ballot opinion&quot;">​</a></h2><p>Writing for a 5-4 majority, Barrett concluded that federal law sets a uniform Election Day but does not require that every valid absentee ballot be physically received by that date.[1] The holding left in place <a href="/entities/mississippi">Mississippi</a>&#39;s statute permitting election officials to count absentee ballots received up to five business days after Election Day, provided they were postmarked on or before Election Day.[1] Chief Justice <a href="/entities/john-roberts">John Roberts</a> joined Barrett and the Court&#39;s three liberal justices to form the majority, over a dissent by Justice <a href="/entities/samuel-alito">Samuel Alito</a>.[1]</p><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> framed the ruling as consistent with the broader project of returning government to its constitutional boxes, arguing that a Court declining to legislate from the bench is a positive development even when a particular outcome disappoints.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Condemnation, Calibration, &amp; Constitutional Boxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-169" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-169</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amy-coney-barrett.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amyConeyBarrett = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amyConeyBarrett as default
};
