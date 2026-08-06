import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Texas Department of Public Safety","description":"","frontmatter":{"title":"Texas Department of Public Safety","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","law-enforcement","border","immigration"],"sources":["raw/badlands-news-brief-2db.md"],"confidence":"low"},"headers":[],"relativePath":"entities/texas-department-of-public-safety.md","filePath":"entities/texas-department-of-public-safety.md","lastUpdated":null}');
const _sfc_main = { name: "entities/texas-department-of-public-safety.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="texas-department-of-public-safety" tabindex="-1">Texas Department of Public Safety <a class="header-anchor" href="#texas-department-of-public-safety" aria-label="Permalink to &quot;Texas Department of Public Safety&quot;">​</a></h1><p>The Texas Department of Public Safety (DPS) is the state law-enforcement agency of Texas, active in border enforcement operations along the Rio Grande.[1]</p><h2 id="el-paso-border-riot-arrests-2024" tabindex="-1">El Paso border riot arrests (2024) <a class="header-anchor" href="#el-paso-border-riot-arrests-2024" aria-label="Permalink to &quot;El Paso border riot arrests (2024)&quot;">​</a></h2><p>Following a stampede that overwhelmed <a href="/entities/national-guard">National Guard</a> troops along the Rio Grande, DPS booked about 220 people on riot charges in El Paso.[1] Of those, 39 were processed for release to <a href="/entities/immigration-and-customs-enforcement">U.S. Immigration and Customs Enforcement</a> and remained jailed on immigration detainers.[1] On March 31, 2024, magistrate judge <a href="/entities/humberto-acosta">Humberto Acosta</a> ordered all rioting participation cases released on their own recognizance.[1] See <a href="/concepts/el-paso-border-riot-case">el-paso-border-riot-case</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Trump Counters, Musk Sues &amp; Biden Lies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/texas-department-of-public-safety.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const texasDepartmentOfPublicSafety = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  texasDepartmentOfPublicSafety as default
};
