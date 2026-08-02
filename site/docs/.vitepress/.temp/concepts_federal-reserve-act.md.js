import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Federal Reserve Act","description":"","frontmatter":{"title":"Federal Reserve Act","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["law","central-banking","constitution",1913],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/federal-reserve-act.md","filePath":"concepts/federal-reserve-act.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/federal-reserve-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="federal-reserve-act" tabindex="-1">Federal Reserve Act <a class="header-anchor" href="#federal-reserve-act" aria-label="Permalink to &quot;Federal Reserve Act&quot;">​</a></h1><p>The Federal Reserve Act of 1913 is the statute that created the <a href="/entities/federal-reserve">Federal Reserve</a> System and, with it, the modern American central bank. Across the Badlands Media corpus it is treated as the founding act of the debt-based monetary order; in <a href="/entities/joe-lange">Joe Lange</a>&#39;s article <a href="/concepts/are-cbdcs-the-path-to-fear-or-freedom">&quot;Are CBDCs The Path To Fear, or Freedom?&quot;</a> it is identified as a specific legal target of <a href="/entities/donald-trump">Donald Trump</a>&#39;s alleged long-range strategy.</p><p>The article argues that the state-level bans on <a href="/concepts/central-bank-digital-currency">CBDCs</a> and the objections raised by members of <a href="/entities/congress">congress</a> are not obstacles but deliberate provocations designed to generate litigation between the Federal Reserve and the states. That litigation, Lange writes, concerns &quot;not just the definition of money, but also the constitutionality of the central bank itself.&quot; He contends that Trump prioritized reshaping the federal judiciary in order to secure precedent-setting rulings from the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a>, which would revisit the Legal Tender Cases and the Gold Clause decisions and &quot;decide, once and for all if an all powerful central bank is even constitutional.&quot;</p><p>The intended outcome, as the article describes it, is the removal of <a href="/concepts/fiat-currency">fiat currency</a> and the central bank, a return to the original constitutional monetary provisions, and the establishment of a digital dollar backed by gold and redeemable in it.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/federal-reserve-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const federalReserveAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  federalReserveAct as default
};
