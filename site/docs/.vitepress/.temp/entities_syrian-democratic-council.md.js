import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Syrian Democratic Council","description":"","frontmatter":{"title":"Syrian Democratic Council","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","kurds","sdf","politics"],"sources":["raw/badlands-news-brief-7db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/syrian-democratic-council.md","filePath":"entities/syrian-democratic-council.md","lastUpdated":null}');
const _sfc_main = { name: "entities/syrian-democratic-council.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="syrian-democratic-council" tabindex="-1">Syrian Democratic Council <a class="header-anchor" href="#syrian-democratic-council" aria-label="Permalink to &quot;Syrian Democratic Council&quot;">​</a></h1><p>The Syrian Democratic Council (SDC) is the political wing of the <a href="/entities/syrian-democratic-forces">Syrian Democratic Forces</a> (SDF), the Kurdish-led armed coalition that occupies northeast Syria alongside United States forces.[1]</p><h2 id="march-2024-warnings-over-a-us-withdrawal" tabindex="-1">March 2024 warnings over a US withdrawal <a class="header-anchor" href="#march-2024-warnings-over-a-us-withdrawal" aria-label="Permalink to &quot;March 2024 warnings over a US withdrawal&quot;">​</a></h2><p>In March 2024, amid reports that the SDF feared an &quot;Afghanistan-like pullout&quot; of American forces, SDC co-chair Mahmoud Meslat publicly complained that Washington had ignored appeals for protection from <a href="/entities/turkey">Turkiye</a>.[1] &quot;The whole region is on fire and nobody will respond to Turkey&#39;s aggression against us when everyone is busy with Gaza. We have asked the US to rein in Turkey, but they have brushed us off,&quot; he said.[1] The remarks came as Turkiye escalated airstrikes on SDF-held areas — bombing power stations, the regional electric grid, medical facilities and oil fields, leaving millions without electricity or clean drinking water — and as Washington held talks with the Iraqi government about a possible withdrawal of US forces from Iraq.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Nuland Neutered, Biden Blasted and Trump Triumphant&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/syrian-democratic-council.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const syrianDemocraticCouncil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  syrianDemocraticCouncil as default
};
