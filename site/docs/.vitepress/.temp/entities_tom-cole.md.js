import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tom Cole","description":"","frontmatter":{"title":"Tom Cole","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","appropriations","oklahoma","republican"],"sources":["raw/badlands-news-brief-4fd.md"],"confidence":"low"},"headers":[],"relativePath":"entities/tom-cole.md","filePath":"entities/tom-cole.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tom-cole.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tom-cole" tabindex="-1">Tom Cole <a class="header-anchor" href="#tom-cole" aria-label="Permalink to &quot;Tom Cole&quot;">​</a></h1><p>Tom Cole is a Republican member of the United States House of Representatives from Oklahoma and chairman of the <a href="/entities/house-appropriations-committee">House Appropriations Committee</a>.[1]</p><h2 id="fiscal-year-2026-interior-and-environment-markup" tabindex="-1">Fiscal Year 2026 Interior and Environment markup <a class="header-anchor" href="#fiscal-year-2026-interior-and-environment-markup" aria-label="Permalink to &quot;Fiscal Year 2026 Interior and Environment markup&quot;">​</a></h2><p>Cole appeared alongside subcommittee chairman <a href="/entities/mike-simpson">Mike Simpson</a> at the July 15, 2025 markup of the Fiscal Year 2026 Interior, Environment, and Related Agencies appropriations bill, which the subcommittee approved.[1] The bill was framed by its authors as rolling back Biden-era <a href="/entities/environmental-protection-agency">EPA</a> regulation, limiting use of the Endangered Species Act, expanding access to hardrock and critical minerals, and addressing needs in Indian Country.[1] Badlands commentary criticized a provision described as granting &quot;vaccine-like immunity&quot; to pesticide manufacturers, calling it contrary to <a href="/concepts/make-america-healthy-again">make-america-healthy-again</a> priorities.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Autopens, AI Chips, &amp; Astrological Assertions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tom-cole.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tomCole = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tomCole as default
};
