import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Todd Young","description":"","frontmatter":{"title":"Todd Young","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-senate","republicans","war-powers","venezuela"],"sources":["raw/badlands-brief-c07.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/todd-young.md","filePath":"entities/todd-young.md","lastUpdated":null}');
const _sfc_main = { name: "entities/todd-young.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="todd-young" tabindex="-1">Todd Young <a class="header-anchor" href="#todd-young" aria-label="Permalink to &quot;Todd Young&quot;">​</a></h1><p>Todd Young is a Republican United States Senator who figured in the January 2026 fight over war powers and <a href="/entities/venezuela">Venezuela</a>.[1]</p><h2 id="venezuela-war-powers-vote" tabindex="-1">Venezuela war powers vote <a class="header-anchor" href="#venezuela-war-powers-vote" aria-label="Permalink to &quot;Venezuela war powers vote&quot;">​</a></h2><p>Young was among the senators who supported the initial advancement of the bipartisan war powers resolution led by <a href="/entities/tim-kaine">Tim Kaine</a>, which cleared a procedural vote 52–47 on January 8, 2026, and which would have required President <a href="/entities/donald-trump">Donald Trump</a> to obtain congressional authorization before further military action against Venezuela.[1] On January 14, 2026, Young — along with <a href="/entities/josh-hawley">Josh Hawley</a> — switched positions and voted against the measure, contributing to the 51–50 outcome in which Vice President <a href="/entities/jd-vance">JD Vance</a> cast the tie-breaking vote to block the resolution.[1] The resolution consequently did not become law.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;13 Germans, A Seized Smartwatch, &amp; An American Tithe&#39;s Worth of Fraud&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c07" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c07</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/todd-young.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toddYoung = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  toddYoung as default
};
