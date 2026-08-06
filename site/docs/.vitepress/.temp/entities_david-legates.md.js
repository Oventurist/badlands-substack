import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Legates","description":"","frontmatter":{"title":"David Legates","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["climate","white-house","science-policy","trump-administration"],"sources":["raw/badlands-brief-0bd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-legates.md","filePath":"entities/david-legates.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-legates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-legates" tabindex="-1">David Legates <a class="header-anchor" href="#david-legates" aria-label="Permalink to &quot;David Legates&quot;">​</a></h1><p>David Legates is a climate policy critic and former National Oceanic and Atmospheric Administration official who has questioned aspects of mainstream climate modeling.[1]</p><h2 id="white-house-climate-office-2026" tabindex="-1">White House climate office (2026) <a class="header-anchor" href="#white-house-climate-office-2026" aria-label="Permalink to &quot;White House climate office (2026)&quot;">​</a></h2><p>In July 2026 the Trump administration established a new <a href="/entities/white-house">White House</a> climate office headed by Legates.[1] Administration officials said the office would review federal climate science and policy to ensure analyses are objective and free from political bias.[1] Critics contended that the move could reshape how climate research informs federal policymaking and weaken existing climate initiatives.[1]</p><p>The appointment was announced alongside a broader overhaul of the <a href="/concepts/federal-research-grant-overhaul">federal research grant process</a>, both of which drew objections from researchers and university groups.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mossad Bait &amp; Labor Tackles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0bd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0bd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-legates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidLegates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidLegates as default
};
