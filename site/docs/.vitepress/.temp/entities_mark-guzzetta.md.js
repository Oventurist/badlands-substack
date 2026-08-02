import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mark Guzzetta","description":"","frontmatter":{"title":"Mark Guzzetta","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["florida","republican-party","bush-family"],"sources":["raw/a-family-affair.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/mark-guzzetta.md","filePath":"entities/mark-guzzetta.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mark-guzzetta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mark-guzzetta" tabindex="-1">Mark Guzzetta <a class="header-anchor" href="#mark-guzzetta" aria-label="Permalink to &quot;Mark Guzzetta&quot;">​</a></h1><p>Mark Guzzetta is a Republican fundraiser and businessman from Florida identified in the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a> as the buyer of IBM&#39;s Boca Raton office park through a group called Blue Lake Ltd. in 1997.</p><h2 id="ibm-boca-raton-office-park-deal" tabindex="-1">IBM Boca Raton office park deal <a class="header-anchor" href="#ibm-boca-raton-office-park-deal" aria-label="Permalink to &quot;IBM Boca Raton office park deal&quot;">​</a></h2><p>According to <a href="/entities/tampa-bay-times">tampa-bay-times</a>, the property—with 2 million square feet of space on 565 acres, assessed at $100 million—was sold for $46.1 million, less than half its assessed value, to Blue Lake Ltd., a group that included Guzzetta. <a href="/entities/jeb-bush">jeb-bush</a>&#39;s firm, Codina Bush, served as the broker. Bush was best man at Guzzetta&#39;s wedding, and Guzzetta later served as finance co-chairman of Bush&#39;s 1994 campaign for governor. The article notes that officials at Codina Bush &quot;won&#39;t disclose their commission,&quot; suggesting a payoff hidden behind undisclosed fees.</p><h2 id="political-connections" tabindex="-1">Political connections <a class="header-anchor" href="#political-connections" aria-label="Permalink to &quot;Political connections&quot;">​</a></h2><p>The article frames the IBM deal as evidence of how Bush&#39;s political and business networks intersected to produce windfall profits for his associates at below-market prices. Guzzetta&#39;s role as a major Republican fundraiser is cited as the mechanism through which political loyalty was rewarded with insider financial opportunities.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mark-guzzetta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const markGuzzetta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  markGuzzetta as default
};
