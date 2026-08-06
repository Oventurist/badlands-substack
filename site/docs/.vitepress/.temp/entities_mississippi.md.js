import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mississippi","description":"","frontmatter":{"title":"Mississippi","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["states","elections","mail-in-ballots","litigation"],"sources":["raw/badlands-brief-169.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mississippi.md","filePath":"entities/mississippi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mississippi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mississippi" tabindex="-1">Mississippi <a class="header-anchor" href="#mississippi" aria-label="Permalink to &quot;Mississippi&quot;">​</a></h1><p>Mississippi is a US state whose absentee ballot statute was the subject of a June 2026 <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> decision.[1]</p><h2 id="mail-ballot-law" tabindex="-1">Mail ballot law <a class="header-anchor" href="#mail-ballot-law" aria-label="Permalink to &quot;Mail ballot law&quot;">​</a></h2><p>Mississippi law allows election officials to count absentee ballots received up to five business days after Election Day, provided the ballots were postmarked on or before Election Day.[1] The <a href="/entities/republican-national-committee">Republican National Committee</a> challenged the statute as preempted by the federal statutes establishing a uniform Election Day.[1]</p><p>The Court rejected that challenge 5-4, with Justice <a href="/entities/amy-coney-barrett">Amy Coney Barrett</a> writing that federal law sets Election Day but does not require every valid absentee ballot to be received by that date.[1] Chief Justice <a href="/entities/john-roberts">John Roberts</a> joined the majority; Justice <a href="/entities/samuel-alito">Samuel Alito</a> dissented.[1] The ruling left Mississippi&#39;s law intact and, in Badlands commentary, shifted the burden of reform onto <a href="/entities/congress">Congress</a> and state legislatures rather than the judiciary.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Condemnation, Calibration, &amp; Constitutional Boxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-169" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-169</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mississippi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mississippi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mississippi as default
};
