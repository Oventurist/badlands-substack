import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PDD Holdings","description":"","frontmatter":{"title":"PDD Holdings","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","e-commerce","tariffs","corporations"],"sources":["raw/badlands-news-brief-719.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pdd-holdings.md","filePath":"entities/pdd-holdings.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pdd-holdings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pdd-holdings" tabindex="-1">PDD Holdings <a class="header-anchor" href="#pdd-holdings" aria-label="Permalink to &quot;PDD Holdings&quot;">​</a></h1><p><strong>PDD Holdings</strong> is the Chinese e-commerce group that owns the discount retail app <a href="/entities/temu">Temu</a>.[1]</p><h2 id="tariff-pass-through-to-us-consumers" tabindex="-1">Tariff pass-through to US consumers <a class="header-anchor" href="#tariff-pass-through-to-us-consumers" aria-label="Permalink to &quot;Tariff pass-through to US consumers&quot;">​</a></h2><p>In late April 2025, PDD-owned Temu appeared to be passing on nearly all of U.S. President <a href="/entities/donald-trump">Donald Trump</a>&#39;s new import taxes to American consumers, more than doubling the cost of some products in a move seen as adding to concern about the inflationary impact of tariffs.[1] Parcels priced up to US$800 from China, previously exempted from levies under the so-called <a href="/concepts/de-minimis-exemption">de minimis rule</a>, became subject to an ad-valorem tax of 120 per cent of a product&#39;s value, or a per-postal-item fee of at least US$100 starting 2 May.[1] Temu required customers to pay those levies on top of the original cost of the goods.[1]</p><p>A review of 14 shipped-from-China items on Temu&#39;s bestsellers list showed taxes exceeding the value of the product; a US$19.49 power strip attracted US$27.56 in import charges, or 1.41 times the price of the product.[1] There were no import surcharges on items already held in U.S. warehouses, keeping the prices of such goods generally stable.[1] Rival Chinese retailer <a href="/entities/shein">Shein</a> also raised prices over the same period.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Atmospheric Phenomenon &amp; Record Deportations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-719" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-719</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pdd-holdings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pddHoldings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pddHoldings as default
};
