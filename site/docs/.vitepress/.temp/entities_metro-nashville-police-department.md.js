import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Metro Nashville Police Department","description":"","frontmatter":{"title":"Metro Nashville Police Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","nashville","tennessee",2023],"sources":["raw/badlands-news-brief-6e3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/metro-nashville-police-department.md","filePath":"entities/metro-nashville-police-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/metro-nashville-police-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="metro-nashville-police-department" tabindex="-1">Metro Nashville Police Department <a class="header-anchor" href="#metro-nashville-police-department" aria-label="Permalink to &quot;Metro Nashville Police Department&quot;">​</a></h1><p>The <strong>Metro Nashville Police Department</strong> is the municipal police force of Nashville, Tennessee. It led the investigation into the mass shooting at a Nashville Christian school on Monday, March 27, 2023, in which three children and three adults were killed.[1]</p><p>The department moved swiftly in the hours after the attack, posting video showing the shooter, <a href="/entities/audrey-hale">Audrey Hale</a>, shooting a way into the building and then methodically stalking through its interior.[1] At an earlier press conference, the department reported that Hale had left behind a &quot;manifesto&quot; together with maps annotating security camera locations, doorways and other building details.[1]</p><p>Police Chief <a href="/entities/john-drake">John Drake</a> told reporters that investigators held writings pertaining to the date and the incident itself, along with a drawn map of how the attack was to unfold, and said a theory of motive existed but remained unconfirmed.[1] Departmental spokespeople acknowledged to reporters that there was &quot;some theory&quot; that the shooter&#39;s gender identity related to the choice of target and confirmed that the attack was targeted.[1] The department&#39;s rapid release of footage and details drew wide national attention to the <a href="/concepts/nashville-school-shooting">Nashville school shooting</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: PsyActs, Leakers &amp; Color Revolutions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/metro-nashville-police-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const metroNashvillePoliceDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  metroNashvillePoliceDepartment as default
};
