import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kirk Tanner","description":"","frontmatter":{"title":"Kirk Tanner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["business","wendys","ceo","dynamic-pricing"],"sources":["raw/badlands-news-brief-3c0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kirk-tanner.md","filePath":"entities/kirk-tanner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kirk-tanner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kirk-tanner" tabindex="-1">Kirk Tanner <a class="header-anchor" href="#kirk-tanner" aria-label="Permalink to &quot;Kirk Tanner&quot;">​</a></h1><p>Kirk Tanner is the chief executive officer of the fast-food chain <a href="/entities/wendys">Wendy&#39;s</a>, having risen to the chief role in February 2024.[1]</p><h2 id="surge-pricing-announcement" tabindex="-1">Surge pricing announcement <a class="header-anchor" href="#surge-pricing-announcement" aria-label="Permalink to &quot;Surge pricing announcement&quot;">​</a></h2><p>Shortly after taking the top job, Tanner announced on a call with investors that Wendy&#39;s would test an &quot;Uber-style&quot; surge-pricing model in which menu prices fluctuate throughout the day according to demand.[1] He said the Ohio-based company would invest $20 million in high-tech digital menu boards able to update prices in real time without incurring additional overhead costs.[1]</p><p>&quot;As we continue to show the benefit of this technology in our company-operated restaurants, franchisee interest in digital menu boards should increase further supporting sales and profit growth across the system,&quot; Tanner said.[1] He declined to place a ceiling on how much the dynamic pricing model could raise the cost of a meal, and did not say whether base prices would actually fall during slower periods — an omission critics seized on amid broader inflation frustration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Trounces Haley (Again) as the Media Spins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3c0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3c0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kirk-tanner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kirkTanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kirkTanner as default
};
