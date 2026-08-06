import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Utah Department of Public Safety","description":"","frontmatter":{"title":"Utah Department of Public Safety","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","utah","state-agency"],"sources":["raw/badlands-news-brief-6e5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/utah-department-of-public-safety.md","filePath":"entities/utah-department-of-public-safety.md","lastUpdated":null}');
const _sfc_main = { name: "entities/utah-department-of-public-safety.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="utah-department-of-public-safety" tabindex="-1">Utah Department of Public Safety <a class="header-anchor" href="#utah-department-of-public-safety" aria-label="Permalink to &quot;Utah Department of Public Safety&quot;">​</a></h1><p>The Utah Department of Public Safety is the state law enforcement agency of Utah, responsible for the Utah Highway Patrol, state investigative bureaus, and emergency management functions.[1]</p><h2 id="role-in-the-charlie-kirk-investigation" tabindex="-1">Role in the Charlie Kirk investigation <a class="header-anchor" href="#role-in-the-charlie-kirk-investigation" aria-label="Permalink to &quot;Role in the Charlie Kirk investigation&quot;">​</a></h2><p>The department worked jointly with the <a href="/entities/fbi">FBI</a> on the manhunt following the <a href="/concepts/assassination-of-charlie-kirk">assassination of Charlie Kirk</a> at <a href="/entities/utah-valley-university">Utah Valley University</a> in September 2025.[1] Together with the FBI, the department released additional photographs of a person of interest in the shooting as authorities sought public assistance in identifying the suspect.[1] Utah Governor <a href="/entities/spencer-cox">Spencer Cox</a> publicly urged residents to help identify the individual, and officials released new video of the suspect&#39;s escape while a $100,000 federal reward was offered.[1] Investigators recovered a high-powered rifle in a wooded area where the suspect was believed to have fled, but acknowledged early in the probe that they did not know how far the suspect might have traveled.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manhunts, Mental Health, &amp; the Mother of a Monster&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/utah-department-of-public-safety.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utahDepartmentOfPublicSafety = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  utahDepartmentOfPublicSafety as default
};
