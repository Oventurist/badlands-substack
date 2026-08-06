import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Cloud","description":"","frontmatter":{"title":"Michael Cloud","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","texas","covid-19"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michael-cloud.md","filePath":"entities/michael-cloud.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-cloud.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-cloud" tabindex="-1">Michael Cloud <a class="header-anchor" href="#michael-cloud" aria-label="Permalink to &quot;Michael Cloud&quot;">​</a></h1><p>Michael Cloud is a Republican member of the United States House of Representatives from Texas.[1]</p><p>During the June 3, 2024 hearing of the <a href="/entities/house-select-subcommittee-on-the-coronavirus-pandemic">House Select Subcommittee on the Coronavirus Pandemic</a>, Cloud engaged in a heated exchange with former <a href="/entities/national-institute-of-allergy-and-infectious-diseases">NIAID</a> director <a href="/entities/anthony-fauci">Anthony Fauci</a> over pandemic-era measures, at one point pressing Fauci into admitting that the COVID-19 vaccine does not stop transmission.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-cloud.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelCloud = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelCloud as default
};
