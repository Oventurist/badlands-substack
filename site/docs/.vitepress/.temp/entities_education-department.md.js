import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Department of Education","description":"","frontmatter":{"title":"United States Department of Education","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["education","federal-agency","civil-rights","antisemitism"],"sources":["raw/badlands-news-brief-0be.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/education-department.md","filePath":"entities/education-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/education-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-department-of-education" tabindex="-1">United States Department of Education <a class="header-anchor" href="#united-states-department-of-education" aria-label="Permalink to &quot;United States Department of Education&quot;">​</a></h1><p>The U.S. Department of Education is the federal agency responsible for enforcing anti-discrimination law in federally funded educational institutions, a role that placed it at the center of the 2024 fight over campus antisemitism.[1]</p><h2 id="role-under-the-antisemitism-awareness-act" tabindex="-1">Role under the Antisemitism Awareness Act <a class="header-anchor" href="#role-under-the-antisemitism-awareness-act" aria-label="Permalink to &quot;Role under the Antisemitism Awareness Act&quot;">​</a></h2><p>The <a href="/concepts/antisemitism-awareness-act">Antisemitism Awareness Act</a>, passed by the House of Representatives 320–91 on May 1, 2024, would mandate that the Education Department adopt the broad definition of antisemitism used by the <a href="/entities/international-holocaust-remembrance-alliance">International Holocaust Remembrance Alliance</a> when enforcing anti-discrimination laws.[1] That definition describes antisemitism as &quot;a certain perception of Jews, which may be expressed as hatred toward Jews,&quot; and includes among its manifestations calls to kill or harm Jews and holding Jews collectively responsible for actions taken by <a href="/entities/israel">Israel</a>.[1]</p><p>Critics writing at Badlands Media argued that routing the IHRA definition through the Education Department&#39;s enforcement machinery would convert criticism of a foreign government into actionable &quot;hate speech,&quot; and warned the mechanism could later be expanded to cover criticism of the U.S. government itself.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Plan B for Israel &amp; Ouroborosian Protests Consume Clown World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0be" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0be</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/education-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const educationDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  educationDepartment as default
};
