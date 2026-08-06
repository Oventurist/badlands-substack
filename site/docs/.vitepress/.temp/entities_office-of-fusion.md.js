import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Office of Fusion","description":"","frontmatter":{"title":"Office of Fusion","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","fusion","department-of-energy","government"],"sources":["raw/badlands-brief-bb1.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/office-of-fusion.md","filePath":"entities/office-of-fusion.md","lastUpdated":null}');
const _sfc_main = { name: "entities/office-of-fusion.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="office-of-fusion" tabindex="-1">Office of Fusion <a class="header-anchor" href="#office-of-fusion" aria-label="Permalink to &quot;Office of Fusion&quot;">​</a></h1><p>The Office of Fusion is a newly established office within the U.S. <a href="/entities/department-of-energy">Department of Energy</a> charged with implementing the department&#39;s <a href="/concepts/fusion-science-and-technology-roadmap">Fusion Science and Technology Roadmap</a>.[1]</p><p>Its remit follows the roadmap&#39;s three pillars: closing materials and technology gaps through critical infrastructure, driving innovation via advanced research, high-performance computing and <a href="/concepts/artificial-intelligence">artificial intelligence</a>, and expanding the domestic fusion ecosystem through public-private partnerships, supply chains, workforce growth and commercialization pathways.[1] The office&#39;s work is aligned with the Department of Energy&#39;s <a href="/concepts/genesis-mission">Genesis Mission</a> and oriented toward fusion pilot plants and commercial fusion power in the mid-2030s.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Peaceful Retaliations, Futuristic Fusions and Based Puritans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bb1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bb1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/office-of-fusion.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const officeOfFusion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  officeOfFusion as default
};
