import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automated Clearing House","description":"","frontmatter":{"title":"Automated Clearing House","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["payments","banking","financial-system","ach"],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/automated-clearing-house.md","filePath":"concepts/automated-clearing-house.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/automated-clearing-house.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="automated-clearing-house" tabindex="-1">Automated Clearing House <a class="header-anchor" href="#automated-clearing-house" aria-label="Permalink to &quot;Automated Clearing House&quot;">​</a></h1><p>The Automated Clearing House (ACH) is the electronic network used to clear and settle most routine payments between American financial institutions, including direct deposits, bill payments, and interbank transfers. In <a href="/entities/joe-lange">Joe Lange</a>&#39;s article <a href="/concepts/are-cbdcs-the-path-to-fear-or-freedom">&quot;Are CBDCs The Path To Fear, or Freedom?&quot;</a> it serves as the foil against which the benefits of blockchain-based money are measured.</p><p>The article draws a sharp distinction between electronic currency moving over ACH and digital currency moving over a <a href="/concepts/blockchain">blockchain</a>. ACH payments, it notes, do not settle in minutes but can take several days for the transfer to become official, and during that interval the transaction passes through a third party. Lange characterizes that intermediary as being under <a href="/concepts/cabal">cabal</a> control, which he says gives it the power to cancel transactions before they finalize — the same power, in his framing, behind the ability to freeze bank accounts and credit cards.</p><p>By contrast, digital currency is described as peer-to-peer and almost instantaneous, eliminating third-party control of transactions and, in the author&#39;s reading, expanding individual financial freedom. The article also cites Forbes on the slowness and expense of existing rails, including wire transfers that can take days to confirm and international transfers that carry high fees, and on the fact that transfers slow further on weekends and outside business hours when banks are closed. The <a href="/entities/federal-reserve">Federal Reserve</a>&#39;s <a href="/concepts/fednow">fednow</a> service and a prospective <a href="/concepts/central-bank-digital-currency">digital dollar</a> are both presented as replacements for this architecture.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/automated-clearing-house.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automatedClearingHouse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automatedClearingHouse as default
};
