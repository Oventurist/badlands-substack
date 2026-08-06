import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Leon County Sheriff's Office","description":"","frontmatter":{"title":"Leon County Sheriff's Office","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","florida"],"sources":["raw/badlands-news-brief-80e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/leon-county-sheriffs-office.md","filePath":"entities/leon-county-sheriffs-office.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/leon-county-sheriffs-office.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="leon-county-sheriff-s-office" tabindex="-1">Leon County Sheriff&#39;s Office <a class="header-anchor" href="#leon-county-sheriff-s-office" aria-label="Permalink to &quot;Leon County Sheriff&#39;s Office&quot;">​</a></h1><p>The Leon County Sheriff&#39;s Office is the county law enforcement agency serving Leon County, Florida, which includes Tallahassee.[1]</p><h2 id="connection-to-the-2025-fsu-shooting" tabindex="-1">Connection to the 2025 FSU shooting <a class="header-anchor" href="#connection-to-the-2025-fsu-shooting" aria-label="Permalink to &quot;Connection to the 2025 FSU shooting&quot;">​</a></h2><p>The agency drew national attention after the April 17, 2025 shooting at <a href="/entities/florida-state-university">Florida State University</a>, in which two people were killed and six injured.[1] Police said the suspected shooter, 20-year-old <a href="/entities/phoenix-ikner">Phoenix Ikner</a>, used a weapon belonging to his mother, Jessica Ikner, a deputy with the Leon County Sheriff&#39;s Office.[1] Authorities said she had served as an officer for over 18 years and had done a &quot;tremendous job&quot; in her position.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Musical Fed Chairs, Salvadoran Chess, &amp; Cocktails in the Clink&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-80e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-80e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/leon-county-sheriffs-office.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leonCountySheriffsOffice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  leonCountySheriffsOffice as default
};
