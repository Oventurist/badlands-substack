import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Salt Lake City Police Department","description":"","frontmatter":{"title":"Salt Lake City Police Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","utah","salt-lake-city","domestic-terrorism"],"sources":["raw/badlands-news-brief-8cd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/salt-lake-city-police-department.md","filePath":"entities/salt-lake-city-police-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/salt-lake-city-police-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="salt-lake-city-police-department" tabindex="-1">Salt Lake City Police Department <a class="header-anchor" href="#salt-lake-city-police-department" aria-label="Permalink to &quot;Salt Lake City Police Department&quot;">​</a></h1><p>The Salt Lake City Police Department (SLCPD) is the municipal police agency serving Salt Lake City, Utah. In September 2025 it participated in a multiagency investigation, led jointly with the <a href="/entities/fbi">Federal Bureau of Investigation</a>, into the planting of an incendiary device under a news van in Salt Lake City.[1]</p><h2 id="_2025-news-van-device-investigation" tabindex="-1">2025 news van device investigation <a class="header-anchor" href="#_2025-news-van-device-investigation" aria-label="Permalink to &quot;2025 news van device investigation&quot;">​</a></h2><p>That investigation resulted in the arrest of <a href="/entities/adeeb-nasir">Adeeb Nasir</a>, 58, and a co-suspect identified as &quot;Adil,&quot; on terrorism and weapons-of-mass-destruction charges, as reported by local stations KUTV and ABC4.[1] Nasir faces eight felony counts including attempted aggravated arson.[1] The case was described as a dangerous escalation in threats against news media, coming days after the <a href="/concepts/assassination-of-charlie-kirk">assassination of Charlie Kirk</a> at <a href="/entities/utah-valley-university">Utah Valley University</a> on September 10, 2025.[1]</p><p>The Kirk shooting heightened security concerns across Utah and on campuses nationwide, accompanied by a wave of <a href="/concepts/swatting">swatting</a> hoax calls that forced lockdowns at at least eight historically Black colleges and universities in a single week.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Vigils, Vanguards, &amp; Various Investigations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8cd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8cd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/salt-lake-city-police-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const saltLakeCityPoliceDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  saltLakeCityPoliceDepartment as default
};
