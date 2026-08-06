import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United Parcel Service","description":"","frontmatter":{"title":"United Parcel Service","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aviation","logistics","louisville","disaster"],"sources":["raw/badlands-news-brief-095.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/united-parcel-service.md","filePath":"entities/united-parcel-service.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-parcel-service.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-parcel-service" tabindex="-1">United Parcel Service <a class="header-anchor" href="#united-parcel-service" aria-label="Permalink to &quot;United Parcel Service&quot;">​</a></h1><p>United Parcel Service (UPS) is an American package delivery and logistics company whose air cargo operations are centered on one of the largest air cargo hubs in the United States, located in Louisville, Kentucky.[1]</p><h2 id="louisville-cargo-plane-crash" tabindex="-1">Louisville cargo plane crash <a class="header-anchor" href="#louisville-cargo-plane-crash" aria-label="Permalink to &quot;Louisville cargo plane crash&quot;">​</a></h2><p>On Tuesday, November 4, 2025, a UPS cargo plane crashed after taking off from Louisville Muhammad Ali International Airport in Louisville, Kentucky, killing at least seven people and sending a cloud of thick smoke over the hub.[1] Governor <a href="/entities/andy-beshear">Andy Beshear</a> of Kentucky said the plane, which was carrying three crew members, hit two businesses near the airport and that the death toll could rise.[1] Mayor <a href="/entities/craig-greenberg">Craig Greenberg</a> of Louisville said four of those killed were on the ground at the time of the crash and that eleven others were injured.[1]</p><p>The aircraft exploded into a fireball and left a fiery trail through an industrial area near the airport, prompting officials to issue a shelter-in-place order for nearby residents.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p><a href="/entities/ashe-in-america">Ashe in America</a> wrote in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> that dash cam and overhead footage of the crash was &quot;apocalyptic,&quot; expressed hope that the cause would eventually be established, and offered prayers for the injured and the families of the deceased.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Shutdown Showcase, Attempted Tariff Takedowns, &amp; the Launch of Mammany Hall&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-parcel-service.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedParcelService = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedParcelService as default
};
