import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Space Weather Prediction Center","description":"","frontmatter":{"title":"Space Weather Prediction Center","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["space-weather","noaa","forecasting","infrastructure"],"sources":["raw/badlands-news-brief-83b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/space-weather-prediction-center.md","filePath":"entities/space-weather-prediction-center.md","lastUpdated":null}');
const _sfc_main = { name: "entities/space-weather-prediction-center.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="space-weather-prediction-center" tabindex="-1">Space Weather Prediction Center <a class="header-anchor" href="#space-weather-prediction-center" aria-label="Permalink to &quot;Space Weather Prediction Center&quot;">​</a></h1><p>The <strong>Space Weather Prediction Center</strong> (SWPC) is the space weather forecasting arm of the <a href="/entities/national-oceanic-and-atmospheric-administration">National Oceanic and Atmospheric Administration</a>, responsible for issuing warnings about solar activity that can affect satellites, radio communications, navigation systems, and electrical grids.[1]</p><p>The center classifies geomagnetic storms on a scale from G1 to G5, with G5 representing the most extreme category.[1] On the Friday night of the <a href="/concepts/may-2024-g5-geomagnetic-storm">May 2024 G5 geomagnetic storm</a>, the SWPC warned that an &quot;extreme&quot; G5 storm was impacting Earth; the event lasted into the early morning hours and produced satellite orientation disturbances, degraded ionospheric radio communications, and GPS outages, but no significant US power grid failures.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Baits Israel as Solar Storms Bring the Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-83b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-83b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/space-weather-prediction-center.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spaceWeatherPredictionCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  spaceWeatherPredictionCenter as default
};
