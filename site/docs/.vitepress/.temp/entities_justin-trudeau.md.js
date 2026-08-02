import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Justin Trudeau","description":"","frontmatter":{"title":"Justin Trudeau","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["canada","liberal-party","politics"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/justin-trudeau.md","filePath":"entities/justin-trudeau.md","lastUpdated":null}');
const _sfc_main = { name: "entities/justin-trudeau.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="justin-trudeau" tabindex="-1">Justin Trudeau <a class="header-anchor" href="#justin-trudeau" aria-label="Permalink to &quot;Justin Trudeau&quot;">​</a></h1><p>Justin Trudeau is a Canadian politician who led the <a href="/entities/liberal-party-of-canada">Liberal Party of Canada</a> to power in 2015 and served as Prime Minister until being succeeded by <a href="/entities/mark-carney">Mark Carney</a>. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, Trudeau appears chiefly as the figure around whom <a href="/entities/chrystia-freeland">Chrystia Freeland</a> was positioned.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that after Freeland&#39;s stint as editor-at-large of Reuters, &quot;the time had come for her to play the role of Valery Jarrett to the &#39;Barack Obama&#39; of Canada then being prepped for Prime Ministership of Justin Trudeau.&quot; The article states that <a href="/entities/bob-rae">Bob Rae</a> abdicated his seat to Freeland, &quot;ensuring her entry into Trudeau&#39;s inner circle, and thus becoming his official handler.&quot;</p><p>Trudeau&#39;s government is the context for the policies the article criticizes, including Canada&#39;s support for Ukraine — $22 billion in taxpayer funds since February 2022 — and the 100% tariff on Chinese electric vehicles that triggered Chinese retaliation against Canadian canola.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/justin-trudeau.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const justinTrudeau = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  justinTrudeau as default
};
