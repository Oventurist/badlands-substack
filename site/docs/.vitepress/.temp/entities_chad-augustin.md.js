import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chad Augustin","description":"","frontmatter":{"title":"Chad Augustin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["wildfires","pasadena","emergency-response","california"],"sources":["raw/badlands-news-brief-59b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/chad-augustin.md","filePath":"entities/chad-augustin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chad-augustin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chad-augustin" tabindex="-1">Chad Augustin <a class="header-anchor" href="#chad-augustin" aria-label="Permalink to &quot;Chad Augustin&quot;">​</a></h1><p>Chad Augustin is the fire chief of the <a href="/entities/pasadena-fire-department">Pasadena Fire Department</a> in California, who served as a leading public voice during the <a href="/concepts/january-2025-los-angeles-wildfires">January 2025 Los Angeles wildfires</a>.[1]</p><h2 id="eaton-fire-response" tabindex="-1">Eaton Fire response <a class="header-anchor" href="#eaton-fire-response" aria-label="Permalink to &quot;Eaton Fire response&quot;">​</a></h2><p>On January 8, 2025, Augustin said his department was mobilizing 60 strike teams with 750 firefighters to battle the <a href="/entities/eaton-fire">Eaton Fire</a>, with help arriving from across California and from as far away as Arizona.[1] He described his local firefighters as &quot;exhausted&quot; and looking forward to the &quot;reinforcements&quot; that were coming, noting that the multiple simultaneous area fires had strained the resources Pasadena normally relies on through its partnership with Los Angeles County and created an unprecedented situation.[1]</p><p>Augustin estimated that 200 to 500 structures had been damaged or lost in the Eaton Fire, whose origins remained undetermined.[1] He explained that the water supply was stretched by demand and by power outages, but stated that the erratic wind conditions — not anything related to the water supply — were the driving cause of the fire&#39;s expansion.[1] He expressed hope that milder wind conditions that evening would give crews time to contain the blaze.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;A Song of Ice and Fire, Fraud, and Foreign Flashpoints&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-59b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-59b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chad-augustin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chadAugustin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chadAugustin as default
};
