import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dali (container ship)","description":"","frontmatter":{"title":"Dali (container ship)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["maritime","shipping","baltimore","disaster"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dali.md","filePath":"entities/dali.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dali.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dali-container-ship" tabindex="-1">Dali (container ship) <a class="header-anchor" href="#dali-container-ship" aria-label="Permalink to &quot;Dali (container ship)&quot;">​</a></h1><p>The <strong>Dali</strong> is a 984-foot Singapore-flagged container ship that struck and destroyed the Francis Scott Key Bridge at the Port of Baltimore on March 26, 2024.[1] Following the <a href="/concepts/francis-scott-key-bridge-collapse">collapse</a>, the vessel remained in the shipping channel amid the wreckage, blocking port traffic.[1]</p><p>Captain <a href="/entities/john-konrad">John Konrad</a>, CEO of the shipping-industry site <a href="/entities/gcaptain">gCaptain</a>, reported that the Dali was apparently &quot;sitting atop a high-pressure underwater gas line,&quot; and that sources at ICS indicated the salvage effort would likely be delayed while the line was surveyed and additional risk assessed.[1]</p><p>The ship is carrying 1.8 million gallons of fuel, a fact <a href="/entities/ashe-in-america">Ashe in America</a> highlighted in raising questions about whether hull damage had compromised fuel storage, whether the pipeline beneath the bridge had been damaged, and whether moving the vessel could create spill conditions.[1] The ship&#39;s owner, Grace Ocean, had contended immediately after the disaster that no pollution had resulted, despite sheening observed on the water near the crash site.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dali.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dali = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dali as default
};
