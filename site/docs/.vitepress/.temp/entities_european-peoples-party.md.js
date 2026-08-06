import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"European People's Party","description":"","frontmatter":{"title":"European People's Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["european-union","political-party","center-right","eu-parliament"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"low"},"headers":[],"relativePath":"entities/european-peoples-party.md","filePath":"entities/european-peoples-party.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/european-peoples-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="european-people-s-party" tabindex="-1">European People&#39;s Party <a class="header-anchor" href="#european-people-s-party" aria-label="Permalink to &quot;European People&#39;s Party&quot;">​</a></h1><p>The European People&#39;s Party (EPP) is the powerful center-right political family that constitutes the largest group in the European Parliament and is the political home of <a href="/entities/european-commission">European Commission</a> president <a href="/entities/ursula-von-der-leyen">Ursula von der Leyen</a>.[1]</p><p>In February 2024 the EPP spearheaded the changes that gutted the <a href="/concepts/eu-2040-climate-proposal">EU 2040 climate proposal</a>, removing the mandated 30 percent cut to agricultural production by 2040, the citizen lifestyle-change mandate, and the push to end fossil fuel subsidies, in response to the <a href="/concepts/2024-european-farmer-protests">farmer protests</a> sweeping the continent.[1] The party&#39;s influence was also visible in the scrapping of plans to halve EU pesticide use by 2030 under the Green Deal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/european-peoples-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const europeanPeoplesParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  europeanPeoplesParty as default
};
