import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Oceanic and Atmospheric Administration","description":"","frontmatter":{"title":"National Oceanic and Atmospheric Administration","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["noaa","climate","federal-agency","science"],"sources":["raw/badlands-brief-0bd.md"],"confidence":"low"},"headers":[],"relativePath":"entities/national-oceanic-and-atmospheric-administration.md","filePath":"entities/national-oceanic-and-atmospheric-administration.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-oceanic-and-atmospheric-administration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-oceanic-and-atmospheric-administration" tabindex="-1">National Oceanic and Atmospheric Administration <a class="header-anchor" href="#national-oceanic-and-atmospheric-administration" aria-label="Permalink to &quot;National Oceanic and Atmospheric Administration&quot;">​</a></h1><p>The National Oceanic and Atmospheric Administration (NOAA) is the US federal agency responsible for atmospheric, oceanic, and climate science.[1]</p><h2 id="connection-to-the-2026-white-house-climate-office" tabindex="-1">Connection to the 2026 White House climate office <a class="header-anchor" href="#connection-to-the-2026-white-house-climate-office" aria-label="Permalink to &quot;Connection to the 2026 White House climate office&quot;">​</a></h2><p><a href="/entities/david-legates">David Legates</a>, the climate policy critic named in July 2026 to head a new <a href="/entities/white-house">White House</a> climate office, is a former NOAA official who has questioned aspects of mainstream climate modeling.[1] The office was tasked by administration officials with reviewing federal climate science and policy to ensure analyses are objective and free from political bias, a step critics said could weaken existing climate initiatives and alter how climate research informs policymaking.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mossad Bait &amp; Labor Tackles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0bd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0bd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-oceanic-and-atmospheric-administration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalOceanicAndAtmosphericAdministration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalOceanicAndAtmosphericAdministration as default
};
