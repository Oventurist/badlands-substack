import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RateFi","description":"","frontmatter":{"title":"RateFi","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mortgage","crypto","bitcoin","lending",2026],"sources":["raw/badlands-brief-285.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ratefi.md","filePath":"entities/ratefi.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ratefi.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ratefi" tabindex="-1">RateFi <a class="header-anchor" href="#ratefi" aria-label="Permalink to &quot;RateFi&quot;">​</a></h1><p>RateFi is a US-based mortgage lender that in February 2026 announced the launch of a mortgage product allowing borrowers to count cryptocurrency holdings toward qualification in the underwriting process.[1]</p><h2 id="crypto-backed-qualification" tabindex="-1">Crypto-backed qualification <a class="header-anchor" href="#crypto-backed-qualification" aria-label="Permalink to &quot;Crypto-backed qualification&quot;">​</a></h2><p>Under the product, holdings such as Bitcoin and Ethereum may be used toward borrower qualification without requiring the liquidation of those assets — a departure from conventional underwriting, which generally recognizes digital assets only once converted to cash.[1]</p><h2 id="market-context" tabindex="-1">Market context <a class="header-anchor" href="#market-context" aria-label="Permalink to &quot;Market context&quot;">​</a></h2><p>The announcement coincided with the average US 30-year fixed mortgage rate falling to 5.99%, the first sub-6% reading since 2022 according to <a href="/entities/freddie-mac">Freddie Mac</a> data cited by <em>Barron&#39;s</em>.[1] The decline prompted renewed refinancing interest and was expected to expand refinancing eligibility for borrowers who had locked in higher rates over the preceding two years.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tuckabee Unites The Arab World As Mexico Courts Discombobulation&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-285" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-285</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ratefi.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ratefi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ratefi as default
};
