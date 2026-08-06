import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Harrison Deal","description":"","frontmatter":{"title":"Harrison Deal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["georgia","2020-election","election-integrity"],"sources":["raw/badlands-brief-990.md"],"confidence":"low"},"headers":[],"relativePath":"entities/harrison-deal.md","filePath":"entities/harrison-deal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harrison-deal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="harrison-deal" tabindex="-1">Harrison Deal <a class="header-anchor" href="#harrison-deal" aria-label="Permalink to &quot;Harrison Deal&quot;">​</a></h1><p>Harrison Deal was a young Georgia political aide connected to Governor <a href="/entities/brian-kemp">Brian Kemp</a>, Senator Kelly Loeffler, and Senator <a href="/entities/david-perdue">David Perdue</a>, who died in a highway crash in Georgia in the period following the 2020 presidential election.[1]</p><h2 id="significance-in-election-integrity-commentary" tabindex="-1">Significance in election-integrity commentary <a class="header-anchor" href="#significance-in-election-integrity-commentary" aria-label="Permalink to &quot;Significance in election-integrity commentary&quot;">​</a></h2><p>Attorney <a href="/entities/sidney-powell">Sidney Powell</a> invoked Deal&#39;s death in February 2026, noting that it occurred after Kemp, Loeffler, and Perdue had all called for a signature audit of the 2020 results, and urging observers to &quot;run the timeline on Kemp&#39;s change of heart.&quot;[1] Badlands closed its commentary on the Georgia grand jury revelations with &quot;RIP, Harrison Deal. We may still get justice for you, yet.&quot;[1] No causal link between the crash and the election dispute has been established in any legal proceeding.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Secret Seizures, Sovereign Signals, &amp; Unnamed Somalis Close to the Matter&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-990" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-990</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harrison-deal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harrisonDeal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harrisonDeal as default
};
