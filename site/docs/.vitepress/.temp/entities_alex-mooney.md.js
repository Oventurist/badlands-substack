import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alex Mooney","description":"","frontmatter":{"title":"Alex Mooney","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","west-virginia","sound-money"],"sources":["raw/badlands-news-brief-12e.md"],"confidence":"low"},"headers":[],"relativePath":"entities/alex-mooney.md","filePath":"entities/alex-mooney.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alex-mooney.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alex-mooney" tabindex="-1">Alex Mooney <a class="header-anchor" href="#alex-mooney" aria-label="Permalink to &quot;Alex Mooney&quot;">​</a></h1><p>Alex Mooney is a Republican U.S. Representative from West Virginia and a leading congressional advocate of sound money policy.[1]</p><p>In April 2023 Mooney introduced H.R. 2435, the <a href="/concepts/gold-standard-restoration-act">Gold Standard Restoration Act</a>, joined by Reps. <a href="/entities/andy-biggs">Andy Biggs</a> (R-AZ) and <a href="/entities/paul-gosar">Paul Gosar</a> (R-AZ).[1] The bill would require the <a href="/entities/us-department-of-the-treasury">U.S. Treasury</a> and the <a href="/entities/federal-reserve">Federal Reserve</a> to disclose all gold holdings and transactions within 24 months, after which the Federal Reserve note would be repegged to a fixed weight of gold at its then-market price.[1]</p><p>Explaining the measure, Mooney said in a statement that &quot;a gold standard would protect against Washington&#39;s irresponsible spending habits and the creation of money out of thin air.&quot;[1] The bill was introduced against a backdrop of inflation and bank failures that sponsors argued demonstrated the instability of the fiat monetary system.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Mayhem, WW3 &amp; Trump&#39;s Travels&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-12e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-12e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alex-mooney.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alexMooney = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alexMooney as default
};
