import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Billings Logan International Airport","description":"","frontmatter":{"title":"Billings Logan International Airport","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["montana","aviation","chinese-spy-balloon"],"sources":["raw/badlands-news-brief-3ae.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/billings-logan-international-airport.md","filePath":"entities/billings-logan-international-airport.md","lastUpdated":null}');
const _sfc_main = { name: "entities/billings-logan-international-airport.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="billings-logan-international-airport" tabindex="-1">Billings Logan International Airport <a class="header-anchor" href="#billings-logan-international-airport" aria-label="Permalink to &quot;Billings Logan International Airport&quot;">​</a></h1><p>Billings Logan International Airport (BIL) is the commercial airport serving Billings, Montana. It briefly entered national news on February 1, 2023, when it was shut down for roughly two hours during the transit of what was later confirmed to be a Chinese surveillance balloon.[1]</p><h2 id="february-2023-shutdown" tabindex="-1">February 2023 shutdown <a class="header-anchor" href="#february-2023-shutdown" aria-label="Permalink to &quot;February 2023 shutdown&quot;">​</a></h2><p>Shane Ketterling, the airport&#39;s Director of Aviation, said two inbound flights were diverted and one departure delayed while the airspace was closed; the diverted flights eventually landed.[1] Ketterling stated that BIL was directed to shut down by the Salt Lake City <a href="/entities/federal-aviation-administration">FAA</a> tower, which closed approximately 50 square miles of airspace over the Livingston area, with knock-on effects for Bozeman, Helena and Billings.[1] The closure coincided with numerous Montanans reporting an unidentified object overhead, and residents also reported seeing military jets in the area.[1]</p><p>The following day the <a href="/entities/department-of-defense">Department of Defense</a> confirmed the object was an intelligence-gathering balloon &quot;most certainly launched by the People&#39;s Republic of China,&quot; making the airport shutdown an early public marker of the <a href="/concepts/chinese-spy-balloon-incident-2023">Chinese spy balloon incident</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Mutations, Laptops &amp; Chinese Balloons&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3ae" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3ae</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/billings-logan-international-airport.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billingsLoganInternationalAirport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billingsLoganInternationalAirport as default
};
