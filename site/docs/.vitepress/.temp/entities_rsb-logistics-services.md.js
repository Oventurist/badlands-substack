import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RSB Logistics Services","description":"","frontmatter":{"title":"RSB Logistics Services","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["logistics","uranium","export-license","kentucky"],"sources":["raw/america-for-sale-part-3.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/rsb-logistics-services.md","filePath":"entities/rsb-logistics-services.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rsb-logistics-services.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rsb-logistics-services" tabindex="-1">RSB Logistics Services <a class="header-anchor" href="#rsb-logistics-services" aria-label="Permalink to &quot;RSB Logistics Services&quot;">​</a></h1><p>RSB Logistics Services Inc. is a trucking and logistics firm based in Paducah, Kentucky. It features in the Badlands Media essay <a href="/concepts/america-for-sale-part-3">America for Sale — Part 3</a> as the conduit through which uranium from <a href="/entities/uranium-one">Uranium One</a>&#39;s American mines left the country after the company&#39;s acquisition by Russia&#39;s <a href="/entities/rosatom">Rosatom</a>.</p><p>According to reporting by The Hill quoted in the article, the <a href="/entities/nuclear-regulatory-commission">Nuclear Regulatory Commission</a> declined to issue Rosatom a direct export license because it &quot;would have raised red flags inside a Congress already suspicious of the deal.&quot; Instead, in 2012 the NRC authorised an amendment to RSB Logistics&#39; existing export license, adding Uranium One &quot;to the list of clients whose uranium it could move to Canada.&quot; The amended license, dated March 16, 2012, also increased the permitted quantity of uranium ore concentrate shipped to the Cameco Corp. plant in Ontario from 7,500,000 kilograms to 12,000,000 kilograms, listing Uranium One among the &quot;other parties to Export.&quot;</p><p>The Hill reported that Uranium One exports flowed from Wyoming through Canada and on to Europe between 2012 and 2014, and that &quot;the move escaped notice in <a href="/entities/congress">Congress</a>.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-3" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rsb-logistics-services.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rsbLogisticsServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rsbLogisticsServices as default
};
