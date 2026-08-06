import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Onion","description":"","frontmatter":{"title":"The Onion","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","satire","infowars","bankruptcy"],"sources":["raw/badlands-news-brief-299.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-onion.md","filePath":"entities/the-onion.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-onion.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-onion" tabindex="-1">The Onion <a class="header-anchor" href="#the-onion" aria-label="Permalink to &quot;The Onion&quot;">​</a></h1><p>The Onion is an American satirical news publication. In November 2024 it emerged as the apparent winning bidder for the assets of <a href="/entities/infowars">Infowars</a>, the media operation founded by <a href="/entities/alex-jones">Alex Jones</a>, in a bankruptcy auction.[1] ZeroHedge, in coverage aggregated by Badlands Media, described The Onion dismissively as &quot;the least funny website on the planet.&quot;[1]</p><h2 id="infowars-auction" tabindex="-1">Infowars auction <a class="header-anchor" href="#infowars-auction" aria-label="Permalink to &quot;Infowars auction&quot;">​</a></h2><p>The Onion&#39;s apparent victory was thrown into doubt when the judge overseeing the bankruptcy case halted the sale after it was revealed that the bankruptcy trustee — characterized in the coverage as anti-Jones — had not accepted the highest bid, instead permitting the Sandy Hook families to &quot;assist&quot; by pledging their judgment against Jones toward the auction, an arrangement Jones contended was illegal.[1] Jones said a hearing was expected the following week and predicted the judge would order a new auction in January, at which a Jones-allied group would be able to bid without the trustee selecting the winner irrespective of the actual bids.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: MAHA Begins as ESG Dies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-299" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-299</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-onion.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theOnion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theOnion as default
};
