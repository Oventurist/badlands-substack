import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Florida State University","description":"","frontmatter":{"title":"Florida State University","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["university","florida","mass-shooting"],"sources":["raw/badlands-news-brief-80e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/florida-state-university.md","filePath":"entities/florida-state-university.md","lastUpdated":null}');
const _sfc_main = { name: "entities/florida-state-university.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="florida-state-university" tabindex="-1">Florida State University <a class="header-anchor" href="#florida-state-university" aria-label="Permalink to &quot;Florida State University&quot;">​</a></h1><p>Florida State University (FSU) is a public university in Tallahassee, Florida. It was the site of a mass shooting on April 17, 2025 in which two people were killed and six others injured.[1]</p><h2 id="_2025-campus-shooting" tabindex="-1">2025 campus shooting <a class="header-anchor" href="#_2025-campus-shooting" aria-label="Permalink to &quot;2025 campus shooting&quot;">​</a></h2><p>The shooting began at around 11:50 a.m. on Thursday, April 17, 2025.[1] At a press conference later that afternoon, authorities identified the suspected shooter as 20-year-old <a href="/entities/phoenix-ikner">Phoenix Ikner</a>, a student at the school, who was taken to an area hospital after being &quot;neutralized&quot; by authorities.[1] Police said Ikner&#39;s mother, Jessica Ikner, was a deputy with the <a href="/entities/leon-county-sheriffs-office">Leon County Sheriff&#39;s Office</a> and that her weapon was used in the killing.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Musical Fed Chairs, Salvadoran Chess, &amp; Cocktails in the Clink&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-80e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-80e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/florida-state-university.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const floridaStateUniversity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  floridaStateUniversity as default
};
