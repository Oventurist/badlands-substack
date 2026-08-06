import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"San Antonio Police Department","description":"","frontmatter":{"title":"San Antonio Police Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","texas","immigration","gangs"],"sources":["raw/badlands-news-brief-4bb.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/san-antonio-police-department.md","filePath":"entities/san-antonio-police-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/san-antonio-police-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="san-antonio-police-department" tabindex="-1">San Antonio Police Department <a class="header-anchor" href="#san-antonio-police-department" aria-label="Permalink to &quot;San Antonio Police Department&quot;">​</a></h1><p>The San Antonio Police Department (SAPD) is the municipal police force of San Antonio, Texas. In Badlands coverage it appears as the lead local agency in <a href="/concepts/operation-aurora">Operation Aurora</a>, the October 2024 crackdown on suspected <a href="/entities/tren-de-aragua">Tren de Aragua</a> members in the city.[1]</p><h2 id="operation-aurora" tabindex="-1">Operation Aurora <a class="header-anchor" href="#operation-aurora" aria-label="Permalink to &quot;Operation Aurora&quot;">​</a></h2><p>SAPD participated in a predawn sweep of the Palatia Apartments on San Antonio&#39;s North Side on October 5, 2024, in which twenty people were detained and nineteen charged.[1] Working alongside the Texas Department of Public Safety, the FBI, Homeland Security Investigations, the ATF, and Texas Anti-Gang Unit members, department personnel inspected about 300 vacant apartments believed to be in use by gang members.[1] SAPD stated that the initiative grew out of intelligence gathered by undercover officers operating within the Migrant Resource Center.[1] Homeland Security Enforcement and Removal Operations agents lodged ICE detainers against those arrested at the City Magistrate building.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Campaign Strategies &amp; Ukrainian Nazis&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4bb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4bb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/san-antonio-police-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sanAntonioPoliceDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sanAntonioPoliceDepartment as default
};
