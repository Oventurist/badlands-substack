import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill and Melinda Gates Foundation","description":"","frontmatter":{"title":"Bill and Melinda Gates Foundation","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["philanthropy","reputation-management","plutocracy","foundation"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/bill-and-melinda-gates-foundation.md","filePath":"entities/bill-and-melinda-gates-foundation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-and-melinda-gates-foundation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-and-melinda-gates-foundation" tabindex="-1">Bill and Melinda Gates Foundation <a class="header-anchor" href="#bill-and-melinda-gates-foundation" aria-label="Permalink to &quot;Bill and Melinda Gates Foundation&quot;">​</a></h1><p>The Bill and Melinda Gates Foundation is the philanthropic organization established by <a href="/entities/bill-gates">bill-gates</a> in the year 2000. In the Badlands corpus it is presented less as a charity than as an instrument of reputation laundering.</p><h2 id="in-the-badlands-account" tabindex="-1">In the Badlands account <a class="header-anchor" href="#in-the-badlands-account" aria-label="Permalink to &quot;In the Badlands account&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> recalls that &quot;by the late 1990s, Bill Gates was one of the most hated men in the world.&quot; The founding of the foundation in 2000 is described as having transformed that standing almost immediately: &quot;in no time, he was considered one of the world&#39;s greatest philanthropists.&quot;</p><p>The essay&#39;s sharpest observation concerns the financial reality behind the perception. &quot;While the world believed he was giving away all his money,&quot; Carlson writes, &quot;his net worth doubled in a year.&quot; The foundation is therefore positioned in the corpus alongside the essay&#39;s other claims about <a href="/entities/microsoft">microsoft</a> — including the rumor that Gates&#39;s mother hired IBM engineers to produce the company&#39;s early software — as part of an argument that the public image of the technology industry&#39;s founders was constructed rather than earned.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-and-melinda-gates-foundation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billAndMelindaGatesFoundation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billAndMelindaGatesFoundation as default
};
