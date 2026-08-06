import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"OpenVAERS","description":"","frontmatter":{"title":"OpenVAERS","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["vaccine-safety","vaers","transparency","covid-19"],"sources":["raw/badlands-news-brief-845.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/openvaers.md","filePath":"entities/openvaers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/openvaers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="openvaers" tabindex="-1">OpenVAERS <a class="header-anchor" href="#openvaers" aria-label="Permalink to &quot;OpenVAERS&quot;">​</a></h1><p>OpenVAERS is a U.S. transparency project, founded by <a href="/entities/liz-willner">Liz Willner</a>, that republishes data from the federal Vaccine Adverse Event Reporting System in a form the public can browse and search directly.[1]</p><h2 id="role-in-the-vaccine-safety-surveillance-debate" tabindex="-1">Role in the vaccine safety surveillance debate <a class="header-anchor" href="#role-in-the-vaccine-safety-surveillance-debate" aria-label="Permalink to &quot;Role in the vaccine safety surveillance debate&quot;">​</a></h2><p>OpenVAERS became a reference point in the controversy that followed the February 15, 2024 hearing of the House <a href="/entities/select-subcommittee-on-the-coronavirus-pandemic">Select Subcommittee on the Coronavirus Pandemic</a>, where <a href="/entities/food-and-drug-administration">FDA</a> official <a href="/entities/peter-marks">Peter Marks</a> and <a href="/entities/centers-for-disease-control-and-prevention">CDC</a> official <a href="/entities/daniel-jernigan">Daniel Jernigan</a> were asked by Rep. <a href="/entities/nicole-malliotakis">Nicole Malliotakis</a> whether active long-term surveillance of early <a href="/concepts/covid-19-vaccines">COVID-19 vaccine</a> recipients was being conducted.[1] Willner subsequently told <a href="/entities/epoch-times">The Epoch Times</a> that no long-term vaccine safety surveillance system exists in the United States.[1]</p><p>Badlands Media commentary credited OpenVAERS with making it possible to demonstrate that officials who dismissed vaccine-skeptical parents were not tracking the long-term effects of the products they mandated, and tied the episode to demands that legislators be publicly pressed for accountability if sworn testimony proved misleading.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: DemoCrabs in Biden&#39;s Bucket&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-845" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-845</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/openvaers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const openvaers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  openvaers as default
};
