import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Crowley","description":"","frontmatter":{"title":"David Crowley","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["wisconsin","local-government","elections"],"sources":["raw/badlands-brief-f87.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-crowley.md","filePath":"entities/david-crowley.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-crowley.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-crowley" tabindex="-1">David Crowley <a class="header-anchor" href="#david-crowley" aria-label="Permalink to &quot;David Crowley&quot;">​</a></h1><p>David Crowley is the Milwaukee County Executive in Wisconsin.[1]</p><h2 id="response-to-the-2026-federal-election-inquiry" tabindex="-1">Response to the 2026 federal election inquiry <a class="header-anchor" href="#response-to-the-2026-federal-election-inquiry" aria-label="Permalink to &quot;Response to the 2026 federal election inquiry&quot;">​</a></h2><p>In May 2026, following reports that the <a href="/entities/fbi">FBI</a> was preparing to interview Milwaukee police officers about the administration of the 2020 presidential election, Crowley criticized the reported federal inquiry, joining Milwaukee Mayor <a href="/entities/cavalier-johnson">Cavalier Johnson</a> in calling it &quot;an act of intimidation.&quot;[1] The reported inquiry concerned activities at Milwaukee&#39;s <a href="/concepts/milwaukee-central-count-facility">Central Count facility</a> during election-night ballot processing, including whether officers assigned there had been instructed to avoid certain areas.[1] The episode intersected with longstanding <a href="/concepts/2020-election-fraud-claims">2020 election fraud claims</a> surrounding former <a href="/entities/milwaukee-election-commission">Milwaukee Election Commission</a> director <a href="/entities/claire-woodall-vogg">Claire Woodall-Vogg</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Resigns; Iran Peace Deal on the Horizon&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-f87" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-f87</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-crowley.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidCrowley = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidCrowley as default
};
