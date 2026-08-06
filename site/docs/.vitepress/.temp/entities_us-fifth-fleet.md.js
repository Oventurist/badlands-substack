import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Fifth Fleet","description":"","frontmatter":{"title":"US Fifth Fleet","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","us-navy","middle-east","persian-gulf","red-sea"],"sources":["raw/badlands-news-brief-6bc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-fifth-fleet.md","filePath":"entities/us-fifth-fleet.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-fifth-fleet.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-fifth-fleet" tabindex="-1">US Fifth Fleet <a class="header-anchor" href="#us-fifth-fleet" aria-label="Permalink to &quot;US Fifth Fleet&quot;">​</a></h1><p>The US Fifth Fleet is the <a href="/entities/us-navy">United States Navy</a> numbered fleet responsible for naval operations in the Middle East, including the Persian Gulf, the Red Sea, and adjacent waters.[1]</p><h2 id="_2023-red-sea-reinforcement" tabindex="-1">2023 Red Sea reinforcement <a class="header-anchor" href="#_2023-red-sea-reinforcement" aria-label="Permalink to &quot;2023 Red Sea reinforcement&quot;">​</a></h2><p>In a statement issued on Monday, August 7, 2023, the Fifth Fleet announced that upwards of 3,000 US sailors and Marines had sailed into the Red Sea after transiting the Suez Canal in a pre-announced deployment.[1] The reinforcements arrived aboard the warships USS <em>Bataan</em> and USS <em>Carter Hall</em>, which the fleet said afforded it &quot;greater flexibility and maritime capability.&quot;[1]</p><p>The deployment formed part of the wider <a href="/concepts/2023-us-middle-east-military-build-up">US Middle East military build-up</a>, which followed an announcement the previous month that the United States would send a destroyer, F-35 and F-16 warplanes, and an Amphibious Readiness Group/Marine Expeditionary Unit to the region to deter <a href="/entities/iran">Iran</a> from seizing ships in the Gulf.[1] American military officials said Iran had seized or attempted to seize nearly twenty internationally flagged vessels in the region over the previous two years.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Smith Slips, China Encroaches &amp; Trump Preps&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6bc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6bc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-fifth-fleet.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usFifthFleet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usFifthFleet as default
};
