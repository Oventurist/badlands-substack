import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Air Force One","description":"","frontmatter":{"title":"Air Force One","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aviation","presidency","qatar","boeing"],"sources":["raw/badlands-brief-c91.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/air-force-one.md","filePath":"entities/air-force-one.md","lastUpdated":null}');
const _sfc_main = { name: "entities/air-force-one.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="air-force-one" tabindex="-1">Air Force One <a class="header-anchor" href="#air-force-one" aria-label="Permalink to &quot;Air Force One&quot;">​</a></h1><p>Air Force One is the call sign and aircraft used for travel by the President of the United States. In June 2026 the Badlands Brief reported that a new presidential aircraft had been delivered after many years of delays and was expected to enter service officially on July 4, 2026.[1]</p><h2 id="procurement-history-and-the-qatari-gift" tabindex="-1">Procurement history and the Qatari gift <a class="header-anchor" href="#procurement-history-and-the-qatari-gift" aria-label="Permalink to &quot;Procurement history and the Qatari gift&quot;">​</a></h2><p>President <a href="/entities/donald-trump">Donald Trump</a> ordered the new aircraft during his first term in office.[1] According to Badlands commentary, <a href="/entities/boeing">Boeing</a> failed to deliver on schedule, with repeated delays and cost increases.[1] <a href="/entities/qatar">Qatar</a> subsequently stepped in and gifted the United States one of its 747 aircraft — described by contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> as a symbolic gesture that would come to define the evolving American relationship with the Arab states of the Middle East.[1]</p><p>The delivery of the aircraft was noted as coinciding with the signing of the <a href="/concepts/us-iran-memorandum-of-understanding">US–Iran memorandum of understanding</a>, in which Qatar had played a backchannel role.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Rugs the Deltas with an Early MOU&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c91" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c91</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/air-force-one.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const airForceOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  airForceOne as default
};
