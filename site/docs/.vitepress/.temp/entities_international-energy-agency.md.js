import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"International Energy Agency","description":"","frontmatter":{"title":"International Energy Agency","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","international-organization","oil"],"sources":["raw/badlands-brief-195.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/international-energy-agency.md","filePath":"entities/international-energy-agency.md","lastUpdated":null}');
const _sfc_main = { name: "entities/international-energy-agency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="international-energy-agency" tabindex="-1">International Energy Agency <a class="header-anchor" href="#international-energy-agency" aria-label="Permalink to &quot;International Energy Agency&quot;">​</a></h1><p>The International Energy Agency (IEA) is an intergovernmental energy body whose assessments are widely cited in debates over European fuel security.[1]</p><h2 id="warnings-on-european-jet-fuel" tabindex="-1">Warnings on European jet fuel <a class="header-anchor" href="#warnings-on-european-jet-fuel" aria-label="Permalink to &quot;Warnings on European jet fuel&quot;">​</a></h2><p>In April 2026, IEA executive director Fatih Birol said Europe had about six weeks of jet fuel supply before shortages would begin, a statement highlighted by Badlands during the <a href="/concepts/european-fuel-supply-crisis-2026">European fuel supply crisis</a>.[1] The warning framed commentary arguing that Europe&#39;s refusal to develop domestic oil and gas or to buy from <a href="/entities/russia">Russia</a> had left the continent exposed.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Crypto Smears, Professional Plotlines, &amp; Meat Probes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-195" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-195</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/international-energy-agency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalEnergyAgency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  internationalEnergyAgency as default
};
