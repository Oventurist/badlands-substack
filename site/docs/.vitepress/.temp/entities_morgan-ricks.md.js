import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Morgan Ricks","description":"","frontmatter":{"title":"Morgan Ricks","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","academic","treasury","public-banking"],"sources":["raw/a-seismic-shift.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/morgan-ricks.md","filePath":"entities/morgan-ricks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/morgan-ricks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="morgan-ricks" tabindex="-1">Morgan Ricks <a class="header-anchor" href="#morgan-ricks" aria-label="Permalink to &quot;Morgan Ricks&quot;">​</a></h1><p>Morgan Ricks is an American legal scholar and former Treasury official identified in <a href="/concepts/a-seismic-shift">A Seismic Shift</a> as one of the originators of the <a href="/concepts/fedaccounts">FedAccounts</a> proposal. <a href="/entities/joe-lange">Joe Lange</a> introduces him as &quot;one of the people that worked at the treasury and came up with FedAccounts&quot; who went on to write further on the subject.</p><p>The FedAccounts proposal was advanced in 2018 by three researchers, two of whom had worked in the <a href="/entities/treasury-department">Treasury Department</a>, and would give all individuals and businesses in the United States the option of holding an account directly with the <a href="/entities/federal-reserve">Federal Reserve</a> rather than with a private bank or credit union.</p><p>JustMoney.org, summarising work by Ricks with co-authors John Crawford and Lev Menand, is quoted in the article describing FedAccounts as potentially offering all the functionality of ordinary bank transaction accounts — debit cards, ATM access, direct deposit, online bill payments, and online and mobile phone access — &quot;without any fees or minimum-balance requirements.&quot; Crucially for Lange&#39;s argument, the same work proposes that the Fed could partner with the <a href="/entities/united-states-postal-service">U.S. Postal Service</a> to provide a ubiquitous physical branch network to service these accounts, merging FedAccounts with <a href="/concepts/postal-savings-system">postal banking</a> proposals to create a robust public system for money and payments. The result, in the quoted formulation, would be that the U.S. money-and-payments system becomes &quot;fully public infrastructure akin to roads, sidewalks, public libraries and the judicial system.&quot;</p><p>Lange treats the fact that the proposal emerged from Treasury-affiliated researchers during <a href="/entities/donald-trump">Donald Trump</a>&#39;s presidency as evidence that its adoption is part of a deliberate plan rather than a coincidence.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-seismic-shift" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/morgan-ricks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const morganRicks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  morganRicks as default
};
