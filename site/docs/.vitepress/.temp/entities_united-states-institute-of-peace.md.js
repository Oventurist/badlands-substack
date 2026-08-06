import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Institute of Peace","description":"","frontmatter":{"title":"United States Institute of Peace","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["usip","doge","federal-agency","foreign-policy","budget-cuts"],"sources":["raw/badlands-news-brief-1c8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/united-states-institute-of-peace.md","filePath":"entities/united-states-institute-of-peace.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-states-institute-of-peace.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-institute-of-peace" tabindex="-1">United States Institute of Peace <a class="header-anchor" href="#united-states-institute-of-peace" aria-label="Permalink to &quot;United States Institute of Peace&quot;">​</a></h1><p>The <strong>United States Institute of Peace</strong> (USIP) is a federally funded U.S. institution working on conflict prevention and resolution abroad.[1]</p><p>In early 2025 the institute became one of the targets of the <a href="/entities/doge">Department of Government Efficiency</a> under <a href="/entities/elon-musk">Elon Musk</a>; DOGE attempted to dismantle the agency as part of a broader campaign of budget cuts and federal workforce reductions.[1] Protesters in the <a href="/concepts/tesla-takedown">#TeslaTakedown</a> movement cited the attempt to dismantle USIP — alongside a 20% staffing cut at the <a href="/entities/internal-revenue-service">Internal Revenue Service</a> — as evidence of DOGE&#39;s damage to public health, scientific research, and foreign aid.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Myanmar&#39;s Mayhem, Musk&#39;s Marxists, &amp; the Military&#39;s Secret Memo&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-states-institute-of-peace.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesInstituteOfPeace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesInstituteOfPeace as default
};
