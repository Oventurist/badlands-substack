import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steven Mnuchin","description":"","frontmatter":{"title":"Steven Mnuchin","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","trump-administration","treasury","crypto"],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/steven-mnuchin.md","filePath":"entities/steven-mnuchin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steven-mnuchin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steven-mnuchin" tabindex="-1">Steven Mnuchin <a class="header-anchor" href="#steven-mnuchin" aria-label="Permalink to &quot;Steven Mnuchin&quot;">​</a></h1><p>Steven Mnuchin served as Secretary of the <a href="/entities/treasury-department">Treasury</a> throughout the administration of <a href="/entities/donald-trump">Donald Trump</a>. He appears in the Badlands Media corpus in <a href="/entities/joe-lange">Joe Lange</a>&#39;s article <a href="/concepts/are-cbdcs-the-path-to-fear-or-freedom">&quot;Are CBDCs The Path To Fear, or Freedom?&quot;</a> not as an advocate but as the recipient of the internal advocacy that the article treats as proof of a Trump-era digital currency initiative.</p><p>The documentary basis is what CNBC reported in January 2022 as a 250-page release of Mnuchin&#39;s crypto-related email correspondence from his four years at Treasury, obtained by CoinDesk through a Freedom of Information Act request and circulated as &quot;The Mnuchin Files.&quot; The correspondence shows <a href="/entities/jared-kushner">jared-kushner</a> pressing in 2019 for a Fed-issued digital dollar, asking Mnuchin whether he would be open to a small brainstorming group and suggesting the idea &quot;could ultimately change the way we pay out entitlements as well saving us a ton in waste fraud and also in transaction costs.&quot;</p><p>The same files record <a href="/entities/j-christopher-giancarlo">J. Christopher Giancarlo</a>, then chairman of the <a href="/entities/commodity-futures-trading-commission">CFTC</a>, among the crypto-friendly voices in the Secretary&#39;s ear. A July 2018 exchange shows Giancarlo, through his executive assistant, pressing for an in-person meeting; Giancarlo later told CNBC he could not recall that specific request but said he had &quot;routinely apprised Secretary Mnuchin of ongoing operation and supervision of the Bitcoin Futures market launched under CFTC oversight in December 2017.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steven-mnuchin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stevenMnuchin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stevenMnuchin as default
};
