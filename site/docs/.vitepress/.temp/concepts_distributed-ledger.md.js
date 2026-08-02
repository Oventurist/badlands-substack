import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Distributed Ledger","description":"","frontmatter":{"title":"Distributed Ledger","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["technology","blockchain","decentralization","accounting"],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"concepts/distributed-ledger.md","filePath":"concepts/distributed-ledger.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/distributed-ledger.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="distributed-ledger" tabindex="-1">Distributed Ledger <a class="header-anchor" href="#distributed-ledger" aria-label="Permalink to &quot;Distributed Ledger&quot;">​</a></h1><p>A distributed ledger is a database that is consensually shared and synchronized across multiple sites, institutions, or geographies and accessible to multiple people. The definition used in the Badlands Media corpus is quoted directly from Investopedia in <a href="/entities/joe-lange">Joe Lange</a>&#39;s article <a href="/concepts/are-cbdcs-the-path-to-fear-or-freedom">&quot;Are CBDCs The Path To Fear, or Freedom?&quot;</a>.</p><p>According to that definition, a distributed ledger allows transactions to have public &quot;witnesses&quot;: the participant at each node of the network can access the recordings shared across the network and can own an identical copy of it, and any changes or additions are reflected and copied to all participants within seconds or minutes. It stands in contrast to the centralized ledger used by most companies, which is described as more prone to cyber attacks and fraud because it has a single point of failure. <a href="/concepts/blockchain">blockchain</a> is identified as a type of distributed ledger, and the type used by <a href="/concepts/bitcoin">bitcoin</a>.</p><p>In the article&#39;s argument the technology&#39;s decentralized character is the crux: it is presented as structurally incompatible with the concentrated financial control attributed to the <a href="/concepts/cabal">cabal</a>, and therefore as evidence that <a href="/concepts/central-bank-digital-currency">CBDCs</a> were not a cabal invention. <a href="/entities/vladimir-putin">Vladimir Putin</a> is quoted proposing an international payment system built on &quot;digital currency technologies and distributed registries&quot; that would be safe for participants and independent of banks, and the article closes by arguing that a decentralized ledger will force governments and banks into honest bookkeeping that is easy to audit.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/distributed-ledger.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const distributedLedger = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  distributedLedger as default
};
