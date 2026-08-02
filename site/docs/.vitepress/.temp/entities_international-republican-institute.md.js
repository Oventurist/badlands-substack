import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"International Republican Institute","description":"","frontmatter":{"title":"International Republican Institute","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["ned","democracy-promotion","non-governmental-organization"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/international-republican-institute.md","filePath":"entities/international-republican-institute.md","lastUpdated":null}');
const _sfc_main = { name: "entities/international-republican-institute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="international-republican-institute" tabindex="-1">International Republican Institute <a class="header-anchor" href="#international-republican-institute" aria-label="Permalink to &quot;International Republican Institute&quot;">​</a></h1><p>The International Republican Institute (IRI) is a U.S. non-profit organization founded in 1983 that promotes democracy abroad, closely aligned with the Republican Party and heavily funded by the <a href="/entities/national-endowment-for-democracy">National Endowment for Democracy</a>. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, IRI is listed among the &quot;CIA-adjacent cut-outs&quot; funded by NED.</p><h2 id="role-in-the-ned-network" tabindex="-1">Role in the NED network <a class="header-anchor" href="#role-in-the-ned-network" aria-label="Permalink to &quot;Role in the NED network&quot;">​</a></h2><p>The article groups IRI with the <a href="/entities/national-democratic-institute">National Democratic Institute (NDI)</a> and the <a href="/entities/center-for-international-private-enterprise">Center for International Private Enterprise (CIPE)</a> as CIA-adjacent organizations through which NED distributes funding. The article describes NED as &quot;the CIA&#39;s chief grantmaking body&quot; and portrays these institutes as instruments of the &quot;democracy promotion&quot; agenda it characterizes as regime destabilization. It notes that the NED-affiliated <a href="/entities/solidarity-center">Solidarity Center</a> is the channel for NED/CIA influence over labor unions.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/international-republican-institute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalRepublicanInstitute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  internationalRepublicanInstitute as default
};
