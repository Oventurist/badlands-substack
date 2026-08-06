import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Phantom Space Strike","description":"","frontmatter":{"title":"Phantom Space Strike","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["china","military-technology","missile-defense","space-warfare"],"sources":["raw/badlands-news-brief-5b3.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/phantom-space-strike.md","filePath":"concepts/phantom-space-strike.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/phantom-space-strike.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="phantom-space-strike" tabindex="-1">Phantom Space Strike <a class="header-anchor" href="#phantom-space-strike" aria-label="Permalink to &quot;Phantom Space Strike&quot;">​</a></h1><p>&quot;Phantom space strike&quot; is the name given to a military tactic reportedly tested successfully by <a href="/entities/china">China</a> in February 2023, designed to overwhelm and sabotage an adversary&#39;s missile defences by emitting fake target signals from space.[1]</p><p>Chinese military engineers announced earlier that month that they had completed a computer simulation of the technique and achieved positive results.[1] The tactic rests on the premise that a missile defence system can only track and engage a finite number of targets: by saturating it with phantom returns, an attacker can exhaust the defender&#39;s interceptor supply and make subsequent destruction of the target easier — potentially as a precursor to a nuclear strike.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands Media contributor <a href="/entities/absolutetruth1776">absolutetruth1776</a> cited the reported test as validation of President <a href="/entities/donald-trump">Donald Trump</a>&#39;s push to stand up the <a href="/entities/united-states-space-force">Space Force</a> quickly, arguing that Trump knew in advance what other countries were capable of or building toward in space warfare and that the new branch provides the United States a viable defense against such weaponry.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Election Laws &amp; Justice for the Exploited&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/phantom-space-strike.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phantomSpaceStrike = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phantomSpaceStrike as default
};
