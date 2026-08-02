import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"American Postal Workers Union","description":"","frontmatter":{"title":"American Postal Workers Union","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["labor","union","postal-service","public-banking"],"sources":["raw/a-seismic-shift.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/american-postal-workers-union.md","filePath":"entities/american-postal-workers-union.md","lastUpdated":null}');
const _sfc_main = { name: "entities/american-postal-workers-union.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="american-postal-workers-union" tabindex="-1">American Postal Workers Union <a class="header-anchor" href="#american-postal-workers-union" aria-label="Permalink to &quot;American Postal Workers Union&quot;">​</a></h1><p>The American Postal Workers Union (APWU) is the labor union representing employees of the <a href="/entities/united-states-postal-service">United States Postal Service</a>. In <a href="/concepts/a-seismic-shift">A Seismic Shift</a>, the union appears through its president, <a href="/entities/mark-dimondstein">Mark Dimondstein</a>, who authored an opinion piece in The Hill arguing for the revival and expansion of postal banking.</p><p>The union&#39;s position, as presented in the article, is that the banking system&#39;s existence depends entirely on federal support — deposit insurance, loan guarantees and interest-rate setting — and that the history of the <a href="/concepts/postal-savings-system">Postal Savings System</a> should therefore be the starting point for any debate about the future of American banking. Dimondstein describes postal banking as an essential public service and &quot;an old idea whose time has come again,&quot; and extends the argument to the creation of <a href="/concepts/fedaccounts">FedAccounts</a> at the <a href="/entities/federal-reserve">Federal Reserve</a> for individuals and small businesses.</p><p><a href="/entities/joe-lange">Joe Lange</a> cites the union&#39;s advocacy approvingly as independent support for the <a href="/concepts/public-banking">public banking</a> option he attributes to a plan by <a href="/entities/donald-trump">Donald Trump</a>, notwithstanding the union&#39;s own political orientation. The opposing position in the article is taken by the <a href="/entities/american-bankers-association">American Bankers Association</a>, which argues that postal banking would extend well beyond the Postal Service&#39;s core competencies.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-seismic-shift" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/american-postal-workers-union.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americanPostalWorkersUnion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americanPostalWorkersUnion as default
};
