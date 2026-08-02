import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Roosevelt Institute","description":"","frontmatter":{"title":"Roosevelt Institute","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["think-tank","policy","public-banking","research"],"sources":["raw/a-seismic-shift.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/roosevelt-institute.md","filePath":"entities/roosevelt-institute.md","lastUpdated":null}');
const _sfc_main = { name: "entities/roosevelt-institute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="roosevelt-institute" tabindex="-1">Roosevelt Institute <a class="header-anchor" href="#roosevelt-institute" aria-label="Permalink to &quot;Roosevelt Institute&quot;">​</a></h1><p>The Roosevelt Institute is an American progressive think tank. In <a href="/concepts/a-seismic-shift">A Seismic Shift</a> it is cited as the principal source for the history of the <a href="/concepts/postal-savings-system">Postal Savings System</a>, through its 2022 report &quot;Banking for All.&quot;</p><p>The quoted passages establish three points used by <a href="/entities/joe-lange">Joe Lange</a>. First, that during much of the twentieth century Americans without access to traditional banks did not need to rely on predatory nonbank businesses, because for more than fifty years the United States operated &quot;a hugely popular and secure public option through the Postal Service&quot; — created in 1911, before the <a href="/entities/federal-reserve">Federal Reserve</a> was founded — which relied on local banks to manage accounts and allowed all Americans to make deposits into no-cost savings accounts at post offices, with deposits earning interest and the original $500 limit raised to $2,500 by 1918.</p><p>Second, that during the Great Depression, when the public justifiably lost faith in private banks, the Postal Savings System was a uniquely safe and reliable alternative, so that by 1947 more than four million people held $3.4 billion in savings in more than 8,000 postal units.</p><p>Third, that during the post-war economic boom, as interest rates at private banks rose and after the <a href="/entities/federal-deposit-insurance-corporation">Federal Deposit Insurance Corporation</a> offered depositors at private banks a guarantee, usage of the system declined and the program was discontinued in 1967. Lange builds his central argument about deposit insurance as a competitive weapon against <a href="/concepts/public-banking">public banking</a> on this last passage.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-seismic-shift" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/roosevelt-institute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rooseveltInstitute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rooseveltInstitute as default
};
