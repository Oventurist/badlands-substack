import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SOFR","description":"","frontmatter":{"title":"SOFR","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["sofr","benchmark-rates","federal-reserve","banking","trump"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/sofr.md","filePath":"concepts/sofr.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/sofr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sofr" tabindex="-1">SOFR <a class="header-anchor" href="#sofr" aria-label="Permalink to &quot;SOFR&quot;">​</a></h1><p>SOFR, the Secured Overnight Financing Rate, is the American benchmark interest rate that replaced <a href="/concepts/libor">LIBOR</a>. The Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> presents the changeover as a decisive act in what it calls a silent war between <a href="/entities/donald-trump">Donald Trump</a> and the <a href="/entities/city-of-london">City of London</a>.</p><p>According to <a href="/entities/erik-carlson">Erik Carlson</a>, Trump &quot;has replaced the LIBOR system with the SOFR system, taking control of the American banking system away from the City of London and giving it to the American <a href="/entities/federal-reserve">Federal Reserve</a>.&quot; In the article&#39;s framing this is not a technical reform of a discredited benchmark but a transfer of sovereignty over dollar-denominated finance from London to Washington — one component of a campaign that also includes onshoring manufacturing out of China and using tariffs to dismantle globalist power.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/sofr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sofr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sofr as default
};
