import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"American Enterprise Institute","description":"","frontmatter":{"title":"American Enterprise Institute","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["think-tank","neoconservatism","foreign-policy"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/american-enterprise-institute.md","filePath":"entities/american-enterprise-institute.md","lastUpdated":null}');
const _sfc_main = { name: "entities/american-enterprise-institute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="american-enterprise-institute" tabindex="-1">American Enterprise Institute <a class="header-anchor" href="#american-enterprise-institute" aria-label="Permalink to &quot;American Enterprise Institute&quot;">​</a></h1><p>The American Enterprise Institute (AEI) is a Washington think tank described by Badlands Media as a &quot;storied neocon hotbed&quot; with strong ties to the <a href="/entities/project-for-the-new-american-century">Project for the New American Century</a>.[1]</p><p>In the article&#39;s account of the intellectual lineage behind U.S. regime-change policy, AEI supplied the institutional milieu from which PNAC emerged in 1997 under <a href="/entities/william-kristol">William Kristol</a> and <a href="/entities/robert-kagan">Robert Kagan</a>.[1] That network — including <a href="/entities/dick-cheney">Dick Cheney</a>, <a href="/entities/paul-wolfowitz">Paul Wolfowitz</a>, <a href="/entities/john-bolton">John Bolton</a>, and <a href="/entities/donald-rumsfeld">Donald Rumsfeld</a> — advanced the <a href="/concepts/pax-americana">Pax Americana</a> doctrine that the article identifies as the pretext for interventions in Libya, Iraq, Iran, and Syria.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/american-enterprise-institute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americanEnterpriseInstitute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americanEnterpriseInstitute as default
};
