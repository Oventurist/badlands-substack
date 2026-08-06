import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Minneapolis Police Department","description":"","frontmatter":{"title":"Minneapolis Police Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","minneapolis","protest","gaza-war"],"sources":["raw/badlands-news-brief-363.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/minneapolis-police-department.md","filePath":"entities/minneapolis-police-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/minneapolis-police-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="minneapolis-police-department" tabindex="-1">Minneapolis Police Department <a class="header-anchor" href="#minneapolis-police-department" aria-label="Permalink to &quot;Minneapolis Police Department&quot;">​</a></h1><p>The Minneapolis Police Department (MPD) is the municipal law enforcement agency serving <a href="/entities/minneapolis">Minneapolis</a>, Minnesota.[1]</p><h2 id="october-2023-pro-palestinian-rally-incident" tabindex="-1">October 2023 pro-Palestinian rally incident <a class="header-anchor" href="#october-2023-pro-palestinian-rally-incident" aria-label="Permalink to &quot;October 2023 pro-Palestinian rally incident&quot;">​</a></h2><p>On Sunday, October 22, 2023, the department received several reports of disturbances surrounding a demonstration held in support of Palestinians near the intersection of Hennepin Avenue and Lyndale Avenue at approximately 3:23 p.m.[1] Various witnesses reported that a vehicle drove through the crowd, and one person reported hearing the sound of a gunshot.[1]</p><p>MPD stated that no injuries had been reported in connection with the demonstrations, that no victims had come forward, and that no arrests had been made, while follow-up investigations remained under way.[1] The rally had been organized with the help of the <a href="/entities/minnesota-anti-war-committee">Minnesota Anti-War Committee</a>, which announced a further protest for the following Wednesday outside the St. Paul office of Representative <a href="/entities/betty-mccollum">Betty McCollum</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Free Market of Ideas Condemns the Regime&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-363" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-363</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/minneapolis-police-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const minneapolisPoliceDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  minneapolisPoliceDepartment as default
};
