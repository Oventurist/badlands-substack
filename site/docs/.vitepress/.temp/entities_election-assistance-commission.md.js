import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Election Assistance Commission","description":"","frontmatter":{"title":"Election Assistance Commission","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["institution","elections","federal-agency","voting-machines","certification"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/election-assistance-commission.md","filePath":"entities/election-assistance-commission.md","lastUpdated":null}');
const _sfc_main = { name: "entities/election-assistance-commission.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="election-assistance-commission" tabindex="-1">Election Assistance Commission <a class="header-anchor" href="#election-assistance-commission" aria-label="Permalink to &quot;Election Assistance Commission&quot;">​</a></h1><p>The United States Election Assistance Commission (EAC) is the federal body responsible for accrediting the laboratories that test and certify voting systems used in American elections. It enters the Badlands Media corpus through the expert testimony offered in support of <a href="/entities/kari-lake">Kari Lake</a>&#39;s December 2022 Arizona election contest.</p><h2 id="role-in-the-lake-contest" tabindex="-1">Role in the Lake contest <a class="header-anchor" href="#role-in-the-lake-contest" aria-label="Permalink to &quot;Role in the Lake contest&quot;">​</a></h2><p>As relayed by <a href="/entities/liz-harrington">Liz Harrington</a> and reported in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, the complaint relies on a cyber expert who had spent nine years performing security tests for the EAC — described elsewhere in the same passage as the laboratory that certified <a href="/entities/maricopa-county">Maricopa County</a>&#39;s machines. That expert is quoted concluding that the machine failures Arizona voters experienced on Election Day &quot;could not have occurred absent intentional misconduct,&quot; and that &quot;an unintentional widespread failure of this magnitude occurring could not arise absent intentional misconduct.&quot;</p><p>The certification question recurs in the parallel suit brought by <a href="/entities/mark-finchem">Mark Finchem</a> and <a href="/entities/jeff-zink">Jeff Zink</a>, which alleges that Secretary of State <a href="/entities/katie-hobbs">Katie Hobbs</a> failed to have Arizona&#39;s tabulation machines properly certified.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/election-assistance-commission.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const electionAssistanceCommission = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  electionAssistanceCommission as default
};
