import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andy Beshear","description":"","frontmatter":{"title":"Andy Beshear","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["kentucky","governor","democrats"],"sources":["raw/badlands-news-brief-095.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andy-beshear.md","filePath":"entities/andy-beshear.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andy-beshear.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andy-beshear" tabindex="-1">Andy Beshear <a class="header-anchor" href="#andy-beshear" aria-label="Permalink to &quot;Andy Beshear&quot;">​</a></h1><p>Andy Beshear is the Governor of Kentucky.[1]</p><h2 id="louisville-ups-crash-response" tabindex="-1">Louisville UPS crash response <a class="header-anchor" href="#louisville-ups-crash-response" aria-label="Permalink to &quot;Louisville UPS crash response&quot;">​</a></h2><p>Following the crash of a <a href="/entities/united-parcel-service">UPS</a> cargo plane shortly after takeoff from Louisville Muhammad Ali International Airport on November 4, 2025, Beshear said the plane had been carrying three crew members and had struck two businesses near the airport, adding that the death toll — at least seven at the time — could rise.[1] Mayor <a href="/entities/craig-greenberg">Craig Greenberg</a> of Louisville reported that four of the dead had been on the ground and that eleven other people were injured.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Shutdown Showcase, Attempted Tariff Takedowns, &amp; the Launch of Mammany Hall&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andy-beshear.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andyBeshear = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andyBeshear as default
};
