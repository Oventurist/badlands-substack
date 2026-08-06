import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Central Kitchen","description":"","frontmatter":{"title":"World Central Kitchen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["humanitarian-aid","gaza","ngo","israel"],"sources":["raw/badlands-news-brief-158.md"],"confidence":"high"},"headers":[],"relativePath":"entities/world-central-kitchen.md","filePath":"entities/world-central-kitchen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-central-kitchen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-central-kitchen" tabindex="-1">World Central Kitchen <a class="header-anchor" href="#world-central-kitchen" aria-label="Permalink to &quot;World Central Kitchen&quot;">​</a></h1><p>World Central Kitchen is a humanitarian aid organization whose personnel were killed in an Israeli strike in Gaza in early April 2024, an incident that became a diplomatic inflection point in <a href="/entities/israel">Israel</a>&#39;s relations with both Gulf states and its supporters in the United States Congress.[1]</p><h2 id="the-gaza-strike-and-its-fallout" tabindex="-1">The Gaza strike and its fallout <a class="header-anchor" href="#the-gaza-strike-and-its-fallout" aria-label="Permalink to &quot;The Gaza strike and its fallout&quot;">​</a></h2><p>Seven World Central Kitchen humanitarian workers were killed in Gaza in a strike attributed to the <a href="/entities/israel-defense-forces">Israeli Defense Force</a>.[1] In the wake of the deaths, the <a href="/entities/united-arab-emirates">United Arab Emirates</a> announced a suspension of diplomatic coordination with Israel and a halt to all coordination on humanitarian aid, bringing ties between the two states to what observers described as near breaking point only a few years after normalization under the <a href="/concepts/abraham-accords">Abraham Accords</a>.[1]</p><p>In Washington, the killings prompted progressive members of <a href="/entities/congress">Congress</a> to call for a halt to US weapons transfers to Israel, a letter that former House Speaker <a href="/entities/nancy-pelosi">Nancy Pelosi</a> signed.[1] The lawmakers wrote to President <a href="/entities/joe-biden">Joe Biden</a> and Secretary of State <a href="/entities/antony-blinken">Antony Blinken</a> that &quot;in light of the recent strike against aid workers and the ever-worsening humanitarian crisis, we believe it is unjustifiable to approve these weapons transfers.&quot;[1] The letter, released after the IDF announced the initial findings of its own investigation into the attack, also called for an independent probe.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Middle Eastern Powder Kegs &amp; Crisis Cascades Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-158" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-158</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-central-kitchen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldCentralKitchen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldCentralKitchen as default
};
