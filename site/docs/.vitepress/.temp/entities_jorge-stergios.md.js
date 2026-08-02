import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jorge Stergios","description":"","frontmatter":{"title":"Jorge Stergios","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["money-laundering","gulf-cartel"],"sources":["raw/a-family-affair.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/jorge-stergios.md","filePath":"entities/jorge-stergios.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jorge-stergios.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jorge-stergios" tabindex="-1">Jorge Stergios <a class="header-anchor" href="#jorge-stergios" aria-label="Permalink to &quot;Jorge Stergios&quot;">​</a></h1><p>Jorge Stergios is identified in the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a> as the &quot;bagman&quot; for <a href="/entities/mario-ruiz-massieu">mario-ruiz-massieu</a>, responsible for transporting cash proceeds from drug trafficking from Mexico to <a href="/entities/texas-commerce-bank">texas-commerce-bank</a> in Houston.</p><h2 id="role-in-money-laundering" tabindex="-1">Role in money laundering <a class="header-anchor" href="#role-in-money-laundering" aria-label="Permalink to &quot;Role in money laundering&quot;">​</a></h2><p>According to <a href="/entities/the-guardian">the-guardian</a> and U.S. grand jury testimony cited in the article, Stergios carried money in cardboard boxes or suitcases from Mexico to Texas on commercial flights. Between December 1993 and February 1995, <a href="/entities/mario-ruiz-massieu">mario-ruiz-massieu</a> made 26 cash deposits totaling nearly $10 million at Texas Commerce Bank in Houston. U.S. prosecutors alleged these were bribes paid by drug traffickers in exchange for immunity from prosecution.</p><h2 id="current-status" tabindex="-1">Current status <a class="header-anchor" href="#current-status" aria-label="Permalink to &quot;Current status&quot;">​</a></h2><p>The article notes that Stergios &quot;is currently on the run,&quot; suggesting he escaped prosecution for his role in the money-laundering operation. The source uses his status to argue that the network connected to the salinas family, the <a href="/entities/gulf-cartel">gulf-cartel</a>, and the <a href="/entities/bush-family">bush-family</a> has been protected from accountability.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jorge-stergios.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jorgeStergios = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jorgeStergios as default
};
