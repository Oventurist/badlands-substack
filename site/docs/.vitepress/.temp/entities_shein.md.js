import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shein","description":"","frontmatter":{"title":"Shein","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","e-commerce","tariffs","trade","retail","fast-fashion"],"sources":["raw/badlands-news-brief-719.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/shein.md","filePath":"entities/shein.md","lastUpdated":null}');
const _sfc_main = { name: "entities/shein.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="shein" tabindex="-1">Shein <a class="header-anchor" href="#shein" aria-label="Permalink to &quot;Shein&quot;">​</a></h1><p><strong>Shein</strong> is a China-linked online fast-fashion retailer that, alongside the discount app <a href="/entities/temu">Temu</a>, raised prices for American shoppers in response to President <a href="/entities/donald-trump">Donald Trump</a>&#39;s 2025 import taxes.[1]</p><h2 id="price-increases-under-the-2025-tariffs" tabindex="-1">Price increases under the 2025 tariffs <a class="header-anchor" href="#price-increases-under-the-2025-tariffs" aria-label="Permalink to &quot;Price increases under the 2025 tariffs&quot;">​</a></h2><p>Reporting in late April 2025 grouped Shein with Temu as Chinese retail platforms whose U.S. customers were absorbing the cost of new American tariffs, with Shein raising prices as Temu passed nearly all of the new import taxes directly to consumers.[1] The change followed the removal of the <a href="/concepts/de-minimis-exemption">de minimis</a> treatment that had previously exempted parcels priced up to US$800 from China from levies; such shipments instead faced an ad-valorem tax of 120 percent of a product&#39;s value, or a per-postal-item fee of at least US$100 beginning 2 May 2025.[1] The episode was cited as evidence of the inflationary impact of the tariff regime on American shoppers.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Atmospheric Phenomenon &amp; Record Deportations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-719" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-719</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/shein.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shein = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shein as default
};
