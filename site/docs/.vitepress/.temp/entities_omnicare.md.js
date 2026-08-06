import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Omnicare","description":"","frontmatter":{"title":"Omnicare","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pharmacy","long-term-care","false-claims-act","fraud"],"sources":["raw/badlands-news-brief-1a7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/omnicare.md","filePath":"entities/omnicare.md","lastUpdated":null}');
const _sfc_main = { name: "entities/omnicare.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="omnicare" tabindex="-1">Omnicare <a class="header-anchor" href="#omnicare" aria-label="Permalink to &quot;Omnicare&quot;">​</a></h1><p>Omnicare is a long-term care pharmacy services provider founded in 1981 and acquired by <a href="/entities/cvs-health">CVS Health</a> in August 2015 in a $12.7 billion transaction.[1] In July 2025 the unit became the subject of one of the largest pharmacy fraud judgments on record when a federal judge ordered it to pay $948.8 million in penalties and damages.[1]</p><h2 id="fraudulent-billing-case" tabindex="-1">Fraudulent billing case <a class="header-anchor" href="#fraudulent-billing-case" aria-label="Permalink to &quot;Fraudulent billing case&quot;">​</a></h2><p>The federal lawsuit alleged that Omnicare fraudulently billed the government for invalid drug prescriptions dispensed to residents of long-term care facilities.[1] US District Judge <a href="/entities/colleen-mcmahon">Colleen McMahon</a> of the Southern District of New York imposed a $542 million penalty for the filing of more than 3.3 million false claims over an eight-year period beginning in 2010, with additional damages bringing the total award to roughly $949 million.[1]</p><h2 id="reaction" tabindex="-1">Reaction <a class="header-anchor" href="#reaction" aria-label="Permalink to &quot;Reaction&quot;">​</a></h2><p>Badlands commentary on the ruling emphasized the absence of individual criminal liability, arguing that a monetary penalty against the corporate parent was an inadequate response to conduct that defrauded taxpayers of close to $1 billion.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Epstein Angst, Autopen Privilege, &amp; Migrant Cash Cards&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1a7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1a7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/omnicare.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const omnicare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  omnicare as default
};
