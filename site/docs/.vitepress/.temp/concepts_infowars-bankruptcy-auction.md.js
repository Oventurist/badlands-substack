import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Infowars Bankruptcy Auction","description":"","frontmatter":{"title":"Infowars Bankruptcy Auction","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["infowars","alex-jones","bankruptcy","sandy-hook","media"],"sources":["raw/badlands-news-brief-299.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/infowars-bankruptcy-auction.md","filePath":"concepts/infowars-bankruptcy-auction.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/infowars-bankruptcy-auction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="infowars-bankruptcy-auction" tabindex="-1">Infowars Bankruptcy Auction <a class="header-anchor" href="#infowars-bankruptcy-auction" aria-label="Permalink to &quot;Infowars Bankruptcy Auction&quot;">​</a></h1><p>The Infowars bankruptcy auction was the court-supervised sale of the assets of <a href="/entities/infowars">Infowars</a>, the media operation founded by <a href="/entities/alex-jones">Alex Jones</a>, conducted in November 2024 as part of bankruptcy proceedings arising from the Sandy Hook defamation judgments against Jones.[1]</p><h2 id="disputed-outcome" tabindex="-1">Disputed outcome <a class="header-anchor" href="#disputed-outcome" aria-label="Permalink to &quot;Disputed outcome&quot;">​</a></h2><p>The satirical publication <a href="/entities/the-onion">The Onion</a> was initially reported as the winner of the auction.[1] The presiding judge then halted the sale after it emerged that the bankruptcy trustee — described in coverage as hostile to Jones — had declined to accept the highest bid, instead allowing the Sandy Hook families to &quot;assist&quot; by pledging their large judgment against Jones toward the auction.[1] Jones argued that this arrangement was illegal.[1]</p><p>According to Jones, a hearing on the matter was expected early the following week, and he believed the judge was likely to order a fresh auction for some time in January, at which a Jones-allied group would have the opportunity to buy the company without the trustee effectively selecting the winner regardless of the actual bids.[1] The episode was carried as a bonus item in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> via <a href="/entities/zerohedge">ZeroHedge</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: MAHA Begins as ESG Dies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-299" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-299</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/infowars-bankruptcy-auction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const infowarsBankruptcyAuction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  infowarsBankruptcyAuction as default
};
