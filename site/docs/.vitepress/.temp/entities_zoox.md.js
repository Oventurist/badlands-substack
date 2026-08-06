import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zoox","description":"","frontmatter":{"title":"Zoox","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","autonomous-vehicles","amazon","recall"],"sources":["raw/badlands-news-brief-222.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/zoox.md","filePath":"entities/zoox.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zoox.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zoox" tabindex="-1">Zoox <a class="header-anchor" href="#zoox" aria-label="Permalink to &quot;Zoox&quot;">​</a></h1><p><strong>Zoox</strong> is a robotaxi manufacturer owned by <a href="/entities/amazon">Amazon</a> that develops purpose-built driverless vehicles for autonomous ride-hailing service.[1]</p><h2 id="las-vegas-crash-and-2025-software-recall" tabindex="-1">Las Vegas crash and 2025 software recall <a class="header-anchor" href="#las-vegas-crash-and-2025-software-recall" aria-label="Permalink to &quot;Las Vegas crash and 2025 software recall&quot;">​</a></h2><p>In May 2025 Zoox initiated a recall to update software in 270 driverless vehicles following a crash in Las Vegas.[1] The company announced the software recall on a Monday, saying the update addressed the &quot;root cause&quot; of the recent collision and had already been deployed to potentially affected vehicles.[1]</p><p>The crash, involving an unoccupied Zoox robotaxi and a passenger car, occurred on April 8, according to a National Highway Traffic Safety Administration recall report filed by the company. Nobody was hurt in the accident.[1]</p><p>Zoox stated that the accident happened after a passenger car was &quot;quickly approaching the lane where our purpose-built robotaxi was traveling.&quot; The company added: &quot;Anticipating that the passenger car would proceed forward, the Zoox robotaxi slowed down and steered to the right. Instead, the car came to a full stop, fully yielding to the Zoox robotaxi and remaining in the shoulder lane. The Zoox robotaxi braked hard, but contact was unavoidable.&quot;[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Writing in the <em>Badlands News Brief</em>, <a href="/entities/ashe-in-america">Ashe in America</a> paired the Zoox recall with reporting on rising hallucination rates in generative AI models, noting sardonically that driverless robotaxis were being recalled because their software contained a flaw that ended in crashes — a flaw discovered only after a crash had occurred.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Intelligence Narratives &amp; Seemingly Impossible Deals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-222" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-222</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zoox.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zoox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zoox as default
};
