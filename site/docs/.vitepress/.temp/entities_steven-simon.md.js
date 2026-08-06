import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steven Simon","description":"","frontmatter":{"title":"Steven Simon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["foreign-policy","analyst","israel","defense"],"sources":["raw/badlands-brief-c2d.md"],"confidence":"low"},"headers":[],"relativePath":"entities/steven-simon.md","filePath":"entities/steven-simon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steven-simon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steven-simon" tabindex="-1">Steven Simon <a class="header-anchor" href="#steven-simon" aria-label="Permalink to &quot;Steven Simon&quot;">​</a></h1><p>Steven Simon is a foreign policy analyst affiliated with the <a href="/entities/quincy-institute-for-responsible-statecraft">Quincy Institute for Responsible Statecraft</a>.[1]</p><p>Simon authored a Quincy Institute brief on the future of US–Israel defense support which argued that deepening defense-industrial integration between the two countries could move the relationship out of annual congressional military aid votes and into defense acquisition channels that are less visible to the public.[1] His analysis was cited in reporting on the proposed &quot;United States-Israel Defense Technology Cooperation Initiative&quot; in the Fiscal Year 2027 <a href="/concepts/national-defense-authorization-act">National Defense Authorization Act</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fake News Propaganda Exposed, Iranian Investment Opportunities, and Talibros in Moscow&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c2d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c2d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steven-simon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stevenSimon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stevenSimon as default
};
