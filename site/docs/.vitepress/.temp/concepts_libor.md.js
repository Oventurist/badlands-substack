import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LIBOR","description":"","frontmatter":{"title":"LIBOR","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["libor","benchmark-rates","city-of-london","banking"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/libor.md","filePath":"concepts/libor.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/libor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libor" tabindex="-1">LIBOR <a class="header-anchor" href="#libor" aria-label="Permalink to &quot;LIBOR&quot;">​</a></h1><p>LIBOR, the London Interbank Offered Rate, was the London-set benchmark interest rate used to price loans and derivatives worldwide. In the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a>, LIBOR is treated as the financial mechanism through which the <a href="/entities/city-of-london">City of London</a> exercised control over the American banking system.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> writes that since early in his first presidency, <a href="/entities/donald-trump">Donald Trump</a> &quot;has been fighting a silent war against the City of London,&quot; and that &quot;he has replaced the LIBOR system with the <a href="/concepts/sofr">SOFR</a> system, taking control of the American banking system away from the City of London and giving it to the American <a href="/entities/federal-reserve">Federal Reserve</a>.&quot; The transition is presented in the article as one of the concrete, verifiable moves in a conflict the author considers largely invisible to the public, alongside the onshoring of manufacturing and the use of tariffs against globalist power.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/libor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libor as default
};
