import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CVS Health","description":"","frontmatter":{"title":"CVS Health","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pharmacy","healthcare","fraud","false-claims-act","litigation"],"sources":["raw/badlands-news-brief-1a7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cvs-health.md","filePath":"entities/cvs-health.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cvs-health.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cvs-health" tabindex="-1">CVS Health <a class="header-anchor" href="#cvs-health" aria-label="Permalink to &quot;CVS Health&quot;">​</a></h1><p>CVS Health is a Woonsocket, Rhode Island–based pharmacy and healthcare services corporation whose long-term care pharmacy subsidiary, <a href="/entities/omnicare">Omnicare</a>, was ordered by a federal court in July 2025 to pay $948.8 million in penalties and damages over fraudulent billing of the federal government for invalid drug prescriptions.[1]</p><h2 id="omnicare-judgment" tabindex="-1">Omnicare judgment <a class="header-anchor" href="#omnicare-judgment" aria-label="Permalink to &quot;Omnicare judgment&quot;">​</a></h2><p>US District Judge <a href="/entities/colleen-mcmahon">Colleen McMahon</a>, sitting in Manhattan, ordered a $542 million penalty against the company for filing more than 3.3 million false claims across an eight-year period beginning in 2010, with the remainder of the roughly $949 million total accounted for by damages.[1] CVS Health had purchased Omnicare — a long-term care pharmacy services provider founded in 1981 — in August 2015 in a deal valued at $12.7 billion, thereby inheriting the liability arising from the conduct at issue.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor <a href="/entities/canncon">CannCon</a> argued that the scale of the fraud warranted criminal accountability rather than a corporate monetary penalty, writing that &quot;there should be people going to prison for this&quot; and framing the case as the defrauding of the American people of nearly $1 billion during a period when many citizens were &quot;forced out of work and given scraps&quot; — an allusion to the COVID-era economic shutdowns.[1] The commentary called for a consumer boycott of the chain.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Epstein Angst, Autopen Privilege, &amp; Migrant Cash Cards&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1a7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1a7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cvs-health.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cvsHealth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cvsHealth as default
};
