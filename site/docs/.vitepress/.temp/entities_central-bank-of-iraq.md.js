import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Central Bank of Iraq","description":"","frontmatter":{"title":"Central Bank of Iraq","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["iraq","finance","cia"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/central-bank-of-iraq.md","filePath":"entities/central-bank-of-iraq.md","lastUpdated":null}');
const _sfc_main = { name: "entities/central-bank-of-iraq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="central-bank-of-iraq" tabindex="-1">Central Bank of Iraq <a class="header-anchor" href="#central-bank-of-iraq" aria-label="Permalink to &quot;Central Bank of Iraq&quot;">​</a></h1><p>The Central Bank of Iraq is the central bank of Iraq, headquartered in Baghdad. In the Badlands Media article &quot;A Conflict of Interest,&quot; the Central Bank of Iraq is identified as the final destination for approximately $40 billion in U.S. cash shipments between 2003 and 2008, after which the money allegedly disappeared without documentation.</p><p>According to the article, the cash was shipped from the New York Federal Reserve to Baghdad International Airport, where a man named Basel—identified as a Coalition Provisional Authority (CPA) official—picked up the pallets and transported them to the Central Bank of Iraq in downtown Baghdad. The journey was approximately seven miles along Route Irish, a road considered one of the most dangerous in the country due to threats from rocket-propelled grenades, mortars, car bombs, and IEDs.</p><p>The source claims that the chain of custody was rigorously documented as the cash left New York and was transferred to Air Force officers, who flew with the bales to Baghdad. However, &quot;when the cargo holds were unloaded in Baghdad, Basel was there,&quot; and from that point forward there was no documentation tracking the money. The article asserts that this absence of paperwork was intentional, designed to allow the cash to be stolen and stashed in bunkers around the world, including one in Lebanon where over $1.5 billion was later discovered.</p><p>According to the source, the Central Bank of Iraq served as the final node in a deliberate theft operation, with <a href="/entities/george-w-bush">George W. Bush</a> personally suppressing the investigation into the missing funds. The article frames the bank as a willing participant in the diversion of taxpayer money to hostile actors.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/central-bank-of-iraq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const centralBankOfIraq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  centralBankOfIraq as default
};
