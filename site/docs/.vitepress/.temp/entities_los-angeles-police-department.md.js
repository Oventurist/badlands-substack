import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Los Angeles Police Department","description":"","frontmatter":{"title":"Los Angeles Police Department","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["lapd","police-brutality","rodney-king","los-angeles"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/los-angeles-police-department.md","filePath":"entities/los-angeles-police-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/los-angeles-police-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="los-angeles-police-department" tabindex="-1">Los Angeles Police Department <a class="header-anchor" href="#los-angeles-police-department" aria-label="Permalink to &quot;Los Angeles Police Department&quot;">​</a></h1><p>The Los Angeles Police Department (LAPD) is the municipal police force of Los Angeles, California. It appears in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> chiefly through the 1991 beating of <a href="/entities/rodney-king">Rodney King</a> by its officers.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> describes his initial reaction to the footage as outrage at officers who had &quot;given their oath to protect and serve&quot; and who &quot;appeared to be trying to kill a man,&quot; and concludes that whatever job pressures may have contributed, they &quot;probably shouldn&#39;t be cops any longer.&quot; He also records the mitigating circumstances reported at the time — that King was intoxicated, speeding, and resisting arrest.</p><p>The acquittal of four LAPD officers by a jury a year later precipitated the <a href="/concepts/los-angeles-riots-1992">1992 Los Angeles riots</a>. In the essay&#39;s reconstruction, the department&#39;s officers are participants in but not authors of the event: the article contends that the camcorder recording of the beating was staged, placing the LAPD within a broader operation of engineered racial division rather than at its origin.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/los-angeles-police-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const losAngelesPoliceDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  losAngelesPoliceDepartment as default
};
