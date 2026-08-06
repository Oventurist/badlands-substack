import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Craig Greenberg","description":"","frontmatter":{"title":"Craig Greenberg","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["louisville","mayor","kentucky"],"sources":["raw/badlands-news-brief-095.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/craig-greenberg.md","filePath":"entities/craig-greenberg.md","lastUpdated":null}');
const _sfc_main = { name: "entities/craig-greenberg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="craig-greenberg" tabindex="-1">Craig Greenberg <a class="header-anchor" href="#craig-greenberg" aria-label="Permalink to &quot;Craig Greenberg&quot;">​</a></h1><p>Craig Greenberg is the Mayor of Louisville, Kentucky.[1]</p><h2 id="louisville-ups-crash" tabindex="-1">Louisville UPS crash <a class="header-anchor" href="#louisville-ups-crash" aria-label="Permalink to &quot;Louisville UPS crash&quot;">​</a></h2><p>After a <a href="/entities/united-parcel-service">UPS</a> cargo plane crashed on November 4, 2025 after departing Louisville Muhammad Ali International Airport, Greenberg said that four of the people killed had been on the ground when the aircraft came down and that eleven others were injured.[1] Governor <a href="/entities/andy-beshear">Andy Beshear</a> said the plane had three crew members aboard and struck two businesses near the airport.[1] Officials issued a shelter-in-place order for residents near the industrial area where the plane left a fiery trail.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Shutdown Showcase, Attempted Tariff Takedowns, &amp; the Launch of Mammany Hall&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/craig-greenberg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const craigGreenberg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  craigGreenberg as default
};
