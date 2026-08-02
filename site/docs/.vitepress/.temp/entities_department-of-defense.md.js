import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Department of Defense","description":"","frontmatter":{"title":"United States Department of Defense","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["military","government-agency","technology","federal-government"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"high"},"headers":[],"relativePath":"entities/department-of-defense.md","filePath":"entities/department-of-defense.md","lastUpdated":null}');
const _sfc_main = { name: "entities/department-of-defense.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-department-of-defense" tabindex="-1">United States Department of Defense <a class="header-anchor" href="#united-states-department-of-defense" aria-label="Permalink to &quot;United States Department of Defense&quot;">​</a></h1><p>The Department of Defense (DOD) is the executive department of the United States government responsible for the armed forces. In the Badlands corpus it is significant chiefly as the parent institution of <a href="/entities/darpa">darpa</a>, and therefore as the ultimate source of technologies that the corpus argues were transferred into the civilian economy.</p><h2 id="role-in-the-technology-pipeline" tabindex="-1">Role in the technology pipeline <a class="header-anchor" href="#role-in-the-technology-pipeline" aria-label="Permalink to &quot;Role in the technology pipeline&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> describes DARPA as &quot;a research and development agency of the United States Department of Defense that focuses on developing new technologies for the military,&quot; and stresses that &quot;US tax dollars are used to create this technology that often finds its way into American society and the American economy.&quot; The internet is offered as the leading example.</p><p>The department is also identified as the home of the Information Processing Techniques Office that ran <a href="/concepts/darpa-lifelog">LifeLog</a>, the comprehensive personal-data program cancelled on February 4, 2004. In the essay&#39;s account, the <a href="/entities/cia">cia</a> took technologies developed under Defense Department sponsorship and deployed them, through nominally private companies, to influence and monitor Americans.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/department-of-defense.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const departmentOfDefense = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  departmentOfDefense as default
};
