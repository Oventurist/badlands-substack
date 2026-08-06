import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amal Movement","description":"","frontmatter":{"title":"Amal Movement","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["lebanon","shia","hezbollah","nabih-berri","politics"],"sources":["raw/badlands-news-brief-290.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amal-movement.md","filePath":"entities/amal-movement.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amal-movement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amal-movement" tabindex="-1">Amal Movement <a class="header-anchor" href="#amal-movement" aria-label="Permalink to &quot;Amal Movement&quot;">​</a></h1><p>The Amal Movement is a Lebanese Shia political movement, described as an ally of <a href="/entities/hezbollah">Hezbollah</a> and of Iran within <a href="/entities/lebanon">Lebanon</a>&#39;s confessional political system.[1]</p><h2 id="role-in-the-2025-presidential-election" tabindex="-1">Role in the 2025 presidential election <a class="header-anchor" href="#role-in-the-2025-presidential-election" aria-label="Permalink to &quot;Role in the 2025 presidential election&quot;">​</a></h2><p>During the <a href="/concepts/2025-lebanese-presidential-election">2025 Lebanese presidential election</a>, lawmakers from Hezbollah and its Shia ally the Amal Movement backed army commander <a href="/entities/joseph-aoun">Joseph Aoun</a> in the second round of voting, carrying him past the required threshold with 99 votes after he had fallen short of the 86 votes needed in the first round.[1] The result was announced by parliament Speaker <a href="/entities/nabih-berri">Nabih Berri</a>, who leads the movement.[1] Badlands commentary highlighted the unusual convergence of Hezbollah, Iran, the United States and <a href="/entities/saudi-arabia">Saudi Arabia</a> behind a single candidate as evidence of a longer-running arrangement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Global Grifters, Fleeing Fellows, and a Surprisingly Friendly Funeral&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-290" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-290</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amal-movement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amalMovement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amalMovement as default
};
