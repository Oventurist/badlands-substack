import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Weather Service","description":"","frontmatter":{"title":"National Weather Service","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["government-agency","weather","wildfires","united-states"],"sources":["raw/badlands-news-brief-719.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-weather-service.md","filePath":"entities/national-weather-service.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-weather-service.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-weather-service" tabindex="-1">National Weather Service <a class="header-anchor" href="#national-weather-service" aria-label="Permalink to &quot;National Weather Service&quot;">​</a></h1><p>The <strong>National Weather Service</strong> (NWS) is the United States federal agency responsible for issuing weather forecasts and hazard warnings, including the fire-weather advisories at issue in litigation over the January 2025 Los Angeles firestorm.[1]</p><h2 id="role-in-the-palisades-fire-litigation" tabindex="-1">Role in the Palisades fire litigation <a class="header-anchor" href="#role-in-the-palisades-fire-litigation" aria-label="Permalink to &quot;Role in the Palisades fire litigation&quot;">​</a></h2><p>In their lawsuit against the <a href="/entities/los-angeles-department-of-water-and-power">Los Angeles Department of Water and Power</a>, federal judges <a href="/entities/dean-pregerson">Dean Pregerson</a> and <a href="/entities/vijay-gandhi">Vijay Gandhi</a> cited the National Weather Service&#39;s warnings as evidence that the utility should have been better prepared.[1] The complaint states that &quot;despite dire warnings by the National Weather Service of a &#39;Particularly Dangerous Condition-Red Flag Warning,&#39; of &#39;critical fire weather&#39; which had the potential for rapid fire spread and extreme fire behavior, the LADWP was unprepared for the <a href="/concepts/palisades-fire">Palisades fire</a>.&quot;[1] The agency&#39;s Red Flag Warning framework thus functioned in the litigation as the benchmark against which the utility&#39;s readiness was measured.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Atmospheric Phenomenon &amp; Record Deportations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-719" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-719</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-weather-service.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalWeatherService = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalWeatherService as default
};
