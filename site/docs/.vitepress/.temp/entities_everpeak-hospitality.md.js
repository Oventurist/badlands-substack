import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Everpeak Hospitality","description":"","frontmatter":{"title":"Everpeak Hospitality","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["corporate","hospitality","immigration-enforcement"],"sources":["raw/badlands-brief-e3b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/everpeak-hospitality.md","filePath":"entities/everpeak-hospitality.md","lastUpdated":null}');
const _sfc_main = { name: "entities/everpeak-hospitality.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="everpeak-hospitality" tabindex="-1">Everpeak Hospitality <a class="header-anchor" href="#everpeak-hospitality" aria-label="Permalink to &quot;Everpeak Hospitality&quot;">​</a></h1><p>Everpeak Hospitality is the management company for the independently owned Hampton Inn by Hilton in Lakeville, Minnesota.[1]</p><p>After allegations emerged that the property canceled reservations made by Department of Homeland Security and ICE agents on official government email addresses and government rates, citing the guests&#39; &quot;immigration work,&quot; Everpeak claimed a commitment to non-discrimination and said it was resolving the matter.[1] <a href="/entities/hilton-worldwide">Hilton</a> nonetheless determined that the franchisee was not meeting brand standards and terminated the franchise agreement, removing the hotel from its systems.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mad-Lad Maduro, Media Meltdowns &amp; Weapons of the Future&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/everpeak-hospitality.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const everpeakHospitality = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  everpeakHospitality as default
};
