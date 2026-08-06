import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Palm Sunday","description":"","frontmatter":{"title":"Palm Sunday","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["christianity","liturgy","jerusalem"],"sources":["raw/badlands-brief-724.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/palm-sunday.md","filePath":"concepts/palm-sunday.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/palm-sunday.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="palm-sunday" tabindex="-1">Palm Sunday <a class="header-anchor" href="#palm-sunday" aria-label="Permalink to &quot;Palm Sunday&quot;">​</a></h1><p>Palm Sunday is the Christian feast commemorating Jesus&#39; triumphal entry into Jerusalem, marking the start of <a href="/concepts/holy-week">Holy Week</a>.[1] In Jerusalem it is observed with processions and Masses centered on <a href="/entities/church-of-the-holy-sepulchre">the Church of the Holy Sepulchre</a>.[1]</p><h2 id="_2026-jerusalem-incident" tabindex="-1">2026 Jerusalem incident <a class="header-anchor" href="#_2026-jerusalem-incident" aria-label="Permalink to &quot;2026 Jerusalem incident&quot;">​</a></h2><p>On Palm Sunday, March 29, 2026, <a href="/entities/israeli-police">Israeli police</a> prevented senior Catholic leaders, including Latin Patriarch <a href="/entities/pierbattista-pizzaballa">Pierbattista Pizzaballa</a>, from entering the Holy Sepulchre to celebrate a private Mass limited to a handful of clergy.[1] Church authorities said it was the first time in centuries that top leaders had been unable to conduct Palm Sunday services at the site.[1] Italian leader <a href="/entities/giorgia-meloni">Giorgia Meloni</a> said barring the Patriarch and the Custos of the Holy Land on &quot;a solemnity central to the faith such as Palm Sunday&quot; was an offence against believers and against every community recognizing religious freedom.[1] U.S. ambassador <a href="/entities/mike-huckabee">Mike Huckabee</a> likewise called the exclusion difficult to justify.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Cancel Culture Comes for Holy Week in Jerusalem&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-724" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-724</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/palm-sunday.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const palmSunday = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  palmSunday as default
};
