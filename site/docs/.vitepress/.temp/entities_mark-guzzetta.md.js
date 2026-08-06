import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mark Guzzetta","description":"","frontmatter":{"title":"Mark Guzzetta","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["florida","real-estate","republican-fundraising","jeb-bush"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mark-guzzetta.md","filePath":"entities/mark-guzzetta.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mark-guzzetta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mark-guzzetta" tabindex="-1">Mark Guzzetta <a class="header-anchor" href="#mark-guzzetta" aria-label="Permalink to &quot;Mark Guzzetta&quot;">​</a></h1><p>Mark Guzzetta is a Republican fundraiser, a key fund-raiser for former President <a href="/entities/george-hw-bush">George H.W. Bush</a> and later finance co-chairman of <a href="/entities/jeb-bush">Jeb Bush</a>&#39;s campaign for governor of Florida. Jeb Bush was best man at his wedding.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>In one of the biggest real estate deals in South Florida, IBM Corp. hired Bush&#39;s company, <a href="/entities/armando-codina">Codina</a> Bush, to sell its massive Boca Raton office park — a maze of buildings with 2 million square feet of space on about 565 acres, assessed at $100 million and the town&#39;s biggest tract of developable land. In early 1997 the property sold for $46.1 million, less than half its assessed value, to a group called Blue Lake Ltd. among whose partners was Guzzetta.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The article&#39;s conclusion is that Jeb&#39;s friend acquired more than fifty million dollars of instant equity while Jeb took an undisclosed commission.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
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
