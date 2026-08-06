import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sequoia Voting Systems","description":"","frontmatter":{"title":"Sequoia Voting Systems","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","voting-machines","election-integrity","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sequoia-voting-systems.md","filePath":"entities/sequoia-voting-systems.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sequoia-voting-systems.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sequoia-voting-systems" tabindex="-1">Sequoia Voting Systems <a class="header-anchor" href="#sequoia-voting-systems" aria-label="Permalink to &quot;Sequoia Voting Systems&quot;">​</a></h1><p>Sequoia Voting Systems was a major American provider of voting equipment whose ownership history links <a href="/entities/smartmatic">Smartmatic</a> to <a href="/entities/dominion-voting-systems">Dominion Voting Systems</a> in the account of election-system consolidation presented in the June 9, 2026 <em>Badlands Brief</em>.[1]</p><p>In 2005 Smartmatic purchased Sequoia from the British firm <a href="/entities/de-la-rue">De La Rue PLC</a> for $16 million, a transaction that represented a $19 million loss for De La Rue relative to the $35 million it had invested four years earlier.[1] Two years later Smartmatic announced it would divest Sequoia. An April 2008 Delaware Court filing, however, showed that Smartmatic retained a $2 million unsecured promissory note from the divestiture and — more significantly, in the Brief&#39;s telling — that Sequoia was still using Smartmatic&#39;s intellectual property.[1]</p><p>A few months after acquiring <a href="/entities/premier-election-solutions">Premier Election Solutions</a> under a Justice Department divestiture order, Dominion Voting Systems purchased Sequoia as well.[1] Dominion&#39;s press release, quoted in the Brief, announced that it had &quot;acquired the assets of Sequoia Voting Systems, a major U.S. provider of voting solutions serving nearly 300 jurisdictions in 16 states,&quot; and that the transaction included &quot;Sequoia&#39;s inventory and all intellectual property, including software, firmware and hardware, for Sequoia&#39;s precinct and central count optical scan and DRE voting solutions.&quot;[1]</p><p>Badlands treats this sequence — Smartmatic buys Sequoia, sells it while retaining an interest and continuing IP presence, and Dominion then buys it — as the mechanism by which foreign-originated code became embedded across American election infrastructure.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sequoia-voting-systems.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sequoiaVotingSystems = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sequoiaVotingSystems as default
};
