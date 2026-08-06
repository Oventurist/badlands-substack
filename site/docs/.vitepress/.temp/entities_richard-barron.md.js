import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Richard Barron","description":"","frontmatter":{"title":"Richard Barron","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["georgia","fulton-county","2020-election","election-official"],"sources":["raw/badlands-brief-695.md"],"confidence":"low"},"headers":[],"relativePath":"entities/richard-barron.md","filePath":"entities/richard-barron.md","lastUpdated":null}');
const _sfc_main = { name: "entities/richard-barron.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="richard-barron" tabindex="-1">Richard Barron <a class="header-anchor" href="#richard-barron" aria-label="Permalink to &quot;Richard Barron&quot;">​</a></h1><p>Richard Barron is the former Fulton County, Georgia elections director whose testimony during the 2020 certification week became a central exhibit in later election-integrity investigations.[1]</p><h2 id="certification-week-testimony" tabindex="-1">Certification-week testimony <a class="header-anchor" href="#certification-week-testimony" aria-label="Permalink to &quot;Certification-week testimony&quot;">​</a></h2><p>Barron testified on the Friday of Georgia&#39;s 2020 certification week that county officials were aware their tallies fell short, stating &quot;we knew we were short&quot; and that &quot;we called the state.&quot;[1] Investigator <a href="/entities/joe-rossi">Joe Rossi</a>, presenting to the <a href="/entities/georgia-state-election-board">Georgia State Election Board</a> in January 2026, assumed the reference to &quot;the state&quot; meant the office of Secretary of State <a href="/entities/brad-raffensperger">Brad Raffensperger</a>.[1]</p><p>Rossi paired Barron&#39;s statement with a report generated at 12:06 p.m. on December 3, 2020 and emailed minutes later to <a href="/entities/ryan-macias">Ryan Macias</a>, arguing the sequence showed intentional human intervention in the count.[1] Badlands writers summarized the resulting narrative as: officials knew on November 19, 2020 that the counts did not match, and on December 3, 2020 they appear to have made them match.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Election Bombshells, Peace Board Bangers, &amp; Clintons in Contempt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-695" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-695</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/richard-barron.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const richardBarron = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  richardBarron as default
};
