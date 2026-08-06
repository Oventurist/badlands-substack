import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Myanmar","description":"","frontmatter":{"title":"Myanmar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["myanmar","southeast-asia","military-coup","civil-war","disaster"],"sources":["raw/badlands-news-brief-1c8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/myanmar.md","filePath":"entities/myanmar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/myanmar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="myanmar" tabindex="-1">Myanmar <a class="header-anchor" href="#myanmar" aria-label="Permalink to &quot;Myanmar&quot;">​</a></h1><p><strong>Myanmar</strong> is a Southeast Asian country described as one of Asia&#39;s poorest nations, governed since 2021 by a military administration.[1]</p><h2 id="political-situation" tabindex="-1">Political situation <a class="header-anchor" href="#political-situation" aria-label="Permalink to &quot;Political situation&quot;">​</a></h2><p>The country has been reeling from a civil war sparked by the 2021 military coup.[1] Swathes of national territory are run by a patchwork of militias, making it extremely difficult to gather reliable information, and the military regularly cuts communications in conflict zones.[1] Weak infrastructure leaves the country ill-equipped to deal with major natural disasters.[1]</p><h2 id="_2025-earthquake" tabindex="-1">2025 earthquake <a class="header-anchor" href="#_2025-earthquake" aria-label="Permalink to &quot;2025 earthquake&quot;">​</a></h2><p>On March 28, 2025, a magnitude 7.7 earthquake struck central Myanmar; the <a href="/entities/united-states-geological-survey">USGS</a> estimated the death toll could exceed 10,000 and issued a red alert, while the military government initially reported at least 144 deaths.[1] See <a href="/concepts/2025-myanmar-earthquake">2025 Myanmar earthquake</a>.[1]</p><p>Badlands commentary noted that Western state media framed the disaster response as complicated by the fact that Western-aligned influence — described by contributor Chris Paul as &quot;the Regime&quot; — was &quot;kicked out of Myanmar in 2021.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Myanmar&#39;s Mayhem, Musk&#39;s Marxists, &amp; the Military&#39;s Secret Memo&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/myanmar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myanmar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  myanmar as default
};
