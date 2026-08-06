import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sloan Rachmuth","description":"","frontmatter":{"title":"Sloan Rachmuth","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","north-carolina","education","gender-medicine"],"sources":["raw/badlands-news-brief-13b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sloan-rachmuth.md","filePath":"entities/sloan-rachmuth.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sloan-rachmuth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sloan-rachmuth" tabindex="-1">Sloan Rachmuth <a class="header-anchor" href="#sloan-rachmuth" aria-label="Permalink to &quot;Sloan Rachmuth&quot;">​</a></h1><p>Sloan Rachmuth is an investigative journalist associated with Education First Alliance of North Carolina whose reporting alleged that leading North Carolina medical institutions — <a href="/entities/duke-university">Duke</a>, UNC, and ECU — were offering &quot;transgender&quot; treatments to children as young as two, three, and four years old.[1]</p><h2 id="reporting" tabindex="-1">Reporting <a class="header-anchor" href="#reporting" aria-label="Permalink to &quot;Reporting&quot;">​</a></h2><p>Rachmuth&#39;s investigation documented the 2015 launch of the Duke Medicine Gender Clinic under director <a href="/entities/deanna-adkins">Dr. Deanna Adkins</a>, which offered a comprehensive range of treatments for gender dysphoria in children as young as two.[1] The findings were amplified nationally by <a href="/entities/the-gateway-pundit">The Gateway Pundit</a> and circulated through the Truth Community via the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><p>Commentary accompanying the coverage disputed the framing that early-childhood care is benign, noting the standard claim that &quot;before puberty, treatment does not include any drug or surgical intervention&quot; but instead encourages social transition.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hunters Hunted, Gender Confusion &amp; the Spiritual War&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-13b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-13b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sloan-rachmuth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sloanRachmuth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sloanRachmuth as default
};
