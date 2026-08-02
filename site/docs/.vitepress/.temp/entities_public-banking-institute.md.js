import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Public Banking Institute","description":"","frontmatter":{"title":"Public Banking Institute","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["organization","public-banking","advocacy"],"sources":["raw/a-seismic-shift.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/public-banking-institute.md","filePath":"entities/public-banking-institute.md","lastUpdated":null}');
const _sfc_main = { name: "entities/public-banking-institute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="public-banking-institute" tabindex="-1">Public Banking Institute <a class="header-anchor" href="#public-banking-institute" aria-label="Permalink to &quot;Public Banking Institute&quot;">​</a></h1><p>The Public Banking Institute is an American advocacy organisation promoting the establishment of publicly owned banks. It appears in <a href="/concepts/a-seismic-shift">A Seismic Shift</a> through its chair, <a href="/entities/ellen-brown">Ellen Brown</a>, whose book <em>Banking on the People</em> is quoted by In These Times in support of the claim that a public banking system can fund the goods, services and infrastructure required by the people and the economy without unsustainable debt, taxation or environmental degradation.</p><p><a href="/entities/joe-lange">Joe Lange</a> situates the institute within the century-long argument for <a href="/concepts/public-banking">public banking</a> that begins with the <a href="/entities/bank-of-north-dakota">Bank of North Dakota</a> and continues in the contemporary state-level campaigns in California and nearly two dozen other states. Its case — that public funds should stabilise local economies rather than be extracted to fuel Wall Street speculation — parallels the arguments the article makes for reviving the <a href="/concepts/postal-savings-system">Postal Savings System</a> and creating <a href="/concepts/fedaccounts">FedAccounts</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-seismic-shift" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/public-banking-institute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const publicBankingInstitute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  publicBankingInstitute as default
};
