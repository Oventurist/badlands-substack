import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ben Crump","description":"","frontmatter":{"title":"Ben Crump","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["civil-rights","attorney","mississippi",2025],"sources":["raw/badlands-news-brief-1c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ben-crump.md","filePath":"entities/ben-crump.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ben-crump.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ben-crump" tabindex="-1">Ben Crump <a class="header-anchor" href="#ben-crump" aria-label="Permalink to &quot;Ben Crump&quot;">​</a></h1><p>Ben Crump is an American civil rights attorney known for representing families in high-profile death investigations.[1]</p><h2 id="delta-state-university-case" tabindex="-1">Delta State University case <a class="header-anchor" href="#delta-state-university-case" aria-label="Permalink to &quot;Delta State University case&quot;">​</a></h2><p>In September 2025, Crump said he would lead an independent investigation into the death of <a href="/entities/trey-reed">Trey Reed</a>, a 21-year-old Black student found hanging from a tree on the campus of <a href="/entities/delta-state-university">Delta State University</a> in Cleveland, Mississippi.[1] His involvement was announced before the release of official autopsy results; Reed&#39;s family and their lawyers had called for an independent autopsy and pressed police to disclose security camera recordings and other video gathered as evidence.[1] On 18 September 2025, the Mississippi state medical examiner&#39;s office concluded that Reed had died by suicide, consistent with a county coroner&#39;s preliminary finding of no foul play.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: International Antifa, Hezbollah Strongholds, &amp; Nuclear Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ben-crump.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benCrump = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benCrump as default
};
