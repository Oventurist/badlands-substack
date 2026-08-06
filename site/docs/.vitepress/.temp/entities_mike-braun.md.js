import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mike Braun","description":"","frontmatter":{"title":"Mike Braun","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["indiana","governor","republican","tax-policy"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mike-braun.md","filePath":"entities/mike-braun.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mike-braun.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mike-braun" tabindex="-1">Mike Braun <a class="header-anchor" href="#mike-braun" aria-label="Permalink to &quot;Mike Braun&quot;">​</a></h1><p>Mike Braun is the Governor of Indiana.[1]</p><h2 id="property-tax-relief-legislation" tabindex="-1">Property tax relief legislation <a class="header-anchor" href="#property-tax-relief-legislation" aria-label="Permalink to &quot;Property tax relief legislation&quot;">​</a></h2><p>On Tuesday, April 15, 2025, Braun signed Senate Bill One into law after lawmakers sent it to him late the previous night.[1] The legislation, a priority bill for the governor and Senate Republicans, was aimed at delivering property tax relief and was anticipated by his office to save Hoosiers $1.3 billion in long-term tax reform.[1]</p><p>Senate Enrolled Act 1 introduces new deductions for certain homeowners that reduce the taxable value of their homes, and places limits on the total amount of property tax that local governments can impose.[1]</p><h2 id="badlands-commentary" tabindex="-1">Badlands commentary <a class="header-anchor" href="#badlands-commentary" aria-label="Permalink to &quot;Badlands commentary&quot;">​</a></h2><p><a href="/entities/chris-paul">Chris Paul</a> grouped Braun&#39;s action with Pennsylvania Governor <a href="/entities/josh-shapiro">Josh Shapiro</a>&#39;s budget proposal, arguing in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> that &quot;all the Uniparty governors are trying to get out in front of the collapse of the property tax scam,&quot; and that publicizing the relief as a favor indicated the outcome was already locked in and inevitable.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mike-braun.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikeBraun = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikeBraun as default
};
