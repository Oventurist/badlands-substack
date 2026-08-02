import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FedNow","description":"","frontmatter":{"title":"FedNow","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["payments","federal-reserve","financial-system","infrastructure"],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"concepts/fednow.md","filePath":"concepts/fednow.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/fednow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fednow" tabindex="-1">FedNow <a class="header-anchor" href="#fednow" aria-label="Permalink to &quot;FedNow&quot;">​</a></h1><p>FedNow is the instant payment service built by the <a href="/entities/federal-reserve">Federal Reserve</a>. In <a href="/entities/joe-lange">Joe Lange</a>&#39;s article <a href="/concepts/are-cbdcs-the-path-to-fear-or-freedom">&quot;Are CBDCs The Path To Fear, or Freedom?&quot;</a> it is explicitly distinguished from a <a href="/concepts/central-bank-digital-currency">central bank digital currency</a>: FedNow, the article states, &quot;is a peer-to-peer payment system, not a digital currency.&quot;</p><p>Despite that distinction, the article treats FedNow as an important part of the same plan. The Fed, it argues, has built a peer-to-peer platform that every financial service in the country can access, and in doing so has eliminated the fees charged by existing intermediaries. Combined with round-the-clock settlement, this is presented as a direct improvement over the <a href="/concepts/automated-clearing-house">ACH</a> network, where transfers take days, pass through a third party, and pause for bank weekends and holidays. In the article&#39;s broader framing, this infrastructure is one of the rails over which a future gold-backed digital dollar could move quickly enough to shorten the disruption of a collapse in the fiat system.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/fednow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fednow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fednow as default
};
