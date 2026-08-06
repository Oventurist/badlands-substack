import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GAESA","description":"","frontmatter":{"title":"GAESA","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cuba","sanctions","military-industrial","conglomerates"],"sources":["raw/badlands-brief-257.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gaesa.md","filePath":"entities/gaesa.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gaesa.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gaesa" tabindex="-1">GAESA <a class="header-anchor" href="#gaesa" aria-label="Permalink to &quot;GAESA&quot;">​</a></h1><p>GAESA is <a href="/entities/cuba">Cuba</a>&#39;s military-industrial conglomerate and the central target of the second <a href="/entities/donald-trump">Trump</a> administration&#39;s 2026 economic pressure campaign against the Cuban regime.[1]</p><h2 id="secondary-sanctions" tabindex="-1">Secondary sanctions <a class="header-anchor" href="#secondary-sanctions" aria-label="Permalink to &quot;Secondary sanctions&quot;">​</a></h2><p>On May 1, 2026, President Trump signed an executive order imposing secondary sanctions on companies doing business with GAESA.[1] The measure prompted several foreign firms — including Canadian miner Sherritt International and European shipping companies CMA CGM and Hapag-Lloyd — to suspend operations in Cuba, with additional pullouts expected from banks and hotel operators.[1]</p><p>Related measures included the cutoff of Venezuelan oil shipments to Cuba, a <a href="/entities/department-of-justice">Justice Department</a> indictment of <a href="/entities/raul-castro">Raúl Castro</a> over the 1996 Brothers to the Rescue shootdowns, and the termination of a GAESA executive&#39;s U.S. green card.[1] The administration also stepped up enforcement of existing sanctions while conducting multiagency planning for potential unrest on the island.[1]</p><p>Because GAESA controls a large share of Cuba&#39;s hard-currency economy, squeezing it is the operational core of the strategy senior officials described as <a href="/concepts/accelerationism">&quot;accelerationism&quot;</a> — constricting the economy in stages to create conditions for a peaceful transition rather than immediate regime elimination.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bicameral Deal-Making and Accelerationism Acknowledged&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-257" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-257</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gaesa.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gaesa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gaesa as default
};
