import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lidl","description":"","frontmatter":{"title":"Lidl","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["corporation","retail","france","europe"],"sources":["raw/badlands-brief-2b2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lidl.md","filePath":"entities/lidl.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lidl.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lidl" tabindex="-1">Lidl <a class="header-anchor" href="#lidl" aria-label="Permalink to &quot;Lidl&quot;">​</a></h1><p>Lidl is the European discount grocery chain whose French stores were the setting for the July 2026 disturbances over discounted air-conditioning units reported in the <a href="/concepts/badlands-brief">Badlands Brief</a>.[1]</p><h2 id="july-2026-air-conditioner-promotion" tabindex="-1">July 2026 air-conditioner promotion <a class="header-anchor" href="#july-2026-air-conditioner-promotion" aria-label="Permalink to &quot;July 2026 air-conditioner promotion&quot;">​</a></h2><p>Crowds seeking discounted air-conditioning units at Lidl stores across France on July 2, 2026 formed long lines and, in some locations, became involved in physical altercations as the country prepared for another forecast heatwave.[1] Lidl had offered approximately 200,000 air-conditioning units for sale during the promotion.[1]</p><p>Lidl France said it &quot;deplores the incidents&quot; that occurred in its stores and said employees were required to manage tensions in what it described as a difficult environment; the retailer attributed shortages to its product sales cycle and inventory planning process.[1] BFMTV reported that about 100 people gathered at a Lidl store in Nanterre, with customers lining up before opening and disputes occurring over a limited number of available units.[1] La Voix du Nord reported approximately 60 customers competing for four units in Hazebrouck, while Ouest-France reported police intervention at stores in Trélazé and near Angers.[1] Fnac Darty CEO Enrique Martinez told BFM Business that customers had been waiting outside stores from as early as 4 a.m. during the heatwave and that some incidents involved physical confrontations among shoppers.[1]</p><p>The episode was treated in the Brief as a microcosm of the condition of the non-U.S. West; see <a href="/concepts/french-air-conditioning-riots-2026">French Air Conditioning Riots of 2026</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;God Bless The USA&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-2b2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-2b2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lidl.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lidl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lidl as default
};
