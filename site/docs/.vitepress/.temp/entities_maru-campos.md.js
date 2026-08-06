import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Maru Campos","description":"","frontmatter":{"title":"Maru Campos","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","chihuahua","governor"],"sources":["raw/badlands-brief-cfa.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/maru-campos.md","filePath":"entities/maru-campos.md","lastUpdated":null}');
const _sfc_main = { name: "entities/maru-campos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maru-campos" tabindex="-1">Maru Campos <a class="header-anchor" href="#maru-campos" aria-label="Permalink to &quot;Maru Campos&quot;">​</a></h1><p>Maru Campos is the governor of the northern Mexican state of Chihuahua.[1]</p><h2 id="pressure-after-the-2026-crash" tabindex="-1">Pressure after the 2026 crash <a class="header-anchor" href="#pressure-after-the-2026-crash" aria-label="Permalink to &quot;Pressure after the 2026 crash&quot;">​</a></h2><p>Campos came under political pressure in May 2026 following the fatal crash that killed two <a href="/entities/cia">CIA</a> officers and two Mexican officials returning from a counter-narcotics raid in the El Pinal area of Chihuahua.[1] She skipped a congressional hearing during the week of the incident, saying the decision was intended to &quot;ensure the proper development of the ongoing proceedings, avoiding at all times the compromising of information of a confidential or classified nature.&quot;[1]</p><p>The episode also cost state attorney general <a href="/entities/cesar-jauregui-moreno">César Jáuregui Moreno</a> his post after he admitted &quot;omissions&quot; about the American agents&#39; presence, and unfolded alongside fallout from the <a href="/concepts/indictment-of-mexican-officials-in-the-sinaloa-cartel-case">U.S. indictments of Mexican officials</a> over alleged <a href="/entities/sinaloa-cartel">Sinaloa Cartel</a> ties.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Cartel &amp; Comey Indictments Plus War Ripples &amp; Election Fraud&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-cfa" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-cfa</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/maru-campos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maruCampos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maruCampos as default
};
