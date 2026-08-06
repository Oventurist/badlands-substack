import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Smiths Detection","description":"","frontmatter":{"title":"Smiths Detection","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["defense-contractor","earmarks","california","lobbying"],"sources":["raw/badlands-news-brief-5ec.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/smiths-detection.md","filePath":"entities/smiths-detection.md","lastUpdated":null}');
const _sfc_main = { name: "entities/smiths-detection.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="smiths-detection" tabindex="-1">Smiths Detection <a class="header-anchor" href="#smiths-detection" aria-label="Permalink to &quot;Smiths Detection&quot;">​</a></h1><p>Smiths Detection is a for-profit defense and security-screening company with operations in the Southern California congressional district represented by <a href="/entities/adam-schiff">Rep. Adam Schiff</a>.[1]</p><h2 id="role-in-the-schiff-earmark-controversy" tabindex="-1">Role in the Schiff earmark controversy <a class="header-anchor" href="#role-in-the-schiff-earmark-controversy" aria-label="Permalink to &quot;Role in the Schiff earmark controversy&quot;">​</a></h2><p>A September 2023 Politico investigation, amplified by ZeroHedge and covered by <a href="/entities/badlands-media">Badlands Media</a>, found that Schiff had steered $6 million in congressional earmarks to Smiths Detection, one of two in-district defense firms singled out in the reporting alongside Phasebridge, Inc., which received $3 million.[1] Both transactions would have been barred under earmark reforms adopted in 2010.[1]</p><p>The funding coincided with Schiff receiving $8,500 in contributions from the PMA Group PAC and from two family members of Paul Magliocchetti, the founder and owner of the lobbying firm retained by both defense companies.[1] Magliocchetti was sentenced in 2011 to 27 months in prison for making illegal campaign contributions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;It&#39;s Raining Red Pills ... And We Like It&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5ec" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5ec</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/smiths-detection.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const smithsDetection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  smithsDetection as default
};
