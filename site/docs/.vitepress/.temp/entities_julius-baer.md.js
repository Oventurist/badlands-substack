import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Julius Baer","description":"","frontmatter":{"title":"Julius Baer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","switzerland","money-laundering","pdvsa","venezuela"],"sources":["raw/badlands-brief-d17.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/julius-baer.md","filePath":"entities/julius-baer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/julius-baer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="julius-baer" tabindex="-1">Julius Baer <a class="header-anchor" href="#julius-baer" aria-label="Permalink to &quot;Julius Baer&quot;">​</a></h1><p>Julius Baer is a Swiss private bank and wealth-management group implicated in the laundering of funds embezzled from Venezuela&#39;s state oil company, <a href="/entities/pdvsa">PDVSA</a>.[1]</p><h2 id="role-in-the-pdvsa-laundering-case" tabindex="-1">Role in the PDVSA laundering case <a class="header-anchor" href="#role-in-the-pdvsa-laundering-case" aria-label="Permalink to &quot;Role in the PDVSA laundering case&quot;">​</a></h2><p>Former private banker <a href="/entities/matthias-krull">Matthias Krull</a>, arrested in Miami and charged with laundering $1.2 billion taken from PDVSA, cooperated with U.S. prosecutors and mapped out the financial network that moved embezzled Venezuelan funds into the United States and Europe.[1] The information he provided led Swiss regulators to impose sanctions on Julius Baer.[1]</p><p>Badlands writer <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> reports that when he ran the lawsuit filings through <a href="/entities/chatgpt">ChatGPT</a> to model how a renewed round of litigation might unfold, the model assessed that the private banks involved — the Julius Baer Group, EFG International, and <a href="/entities/credit-suisse">Credit Suisse</a> — were almost certain to cooperate first, along with their compliance officers and internal auditors.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Devolucion, Sedition, Somalis, and Patagonia Pyros&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-d17" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-d17</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/julius-baer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const juliusBaer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  juliusBaer as default
};
