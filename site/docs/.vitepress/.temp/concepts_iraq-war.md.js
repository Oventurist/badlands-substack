import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Iraq War","description":"","frontmatter":{"title":"Iraq War","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["military-conflict","taxpayer-theft","cia"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/iraq-war.md","filePath":"concepts/iraq-war.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/iraq-war.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="iraq-war" tabindex="-1">Iraq War <a class="header-anchor" href="#iraq-war" aria-label="Permalink to &quot;Iraq War&quot;">​</a></h1><p>The Iraq War was a military conflict that began with the U.S.-led invasion of Iraq in 2003 and lasted until 2011, with a renewed campaign against the Islamic State from 2014 to 2017. In the Badlands Media article &quot;A Conflict of Interest,&quot; the war is framed not primarily as a geopolitical or military event but as a vehicle for systematic theft of U.S. taxpayer funds.</p><p>According to the article, the New York Federal Reserve shipped approximately $40 billion in cash to Iraq between 2003 and 2008. The cash was loaded onto pallets at a compound in East Rutherford, New Jersey, trucked to Andrews Air Force Base, and flown by C-17 transport aircraft to Baghdad International Airport. The article cites a 2011 CNBC report describing this as &quot;the largest airborne transfer of currency in the history of the world.&quot;</p><p>Once the cash arrived in Baghdad, the article claims the chain of custody ended. All flights were met by a single individual—a naturalized American citizen of Lebanese descent named Basel—who transported the pallets to the Central Bank of Iraq along Route Irish, a road considered one of the most dangerous in the country. The source argues that the deliberate absence of documentation after the cash left the airport was a feature, not a bug, of the operation.</p><p>The article further claims that an investigation during the <a href="/entities/george-w-bush">Bush administration</a> uncovered more than $1.5 billion in a bunker in Lebanon, and that Bush personally suppressed the investigation. The source asserts that more than half of the $40 billion was stolen and that the money was used to fund <a href="/entities/hezbollah">Hezbollah</a> and other hostile actors. In the source&#39;s framework, the Iraq War exemplifies how &quot;a war zone has always been the perfect cover for taxpayer theft.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/iraq-war.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iraqWar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  iraqWar as default
};
