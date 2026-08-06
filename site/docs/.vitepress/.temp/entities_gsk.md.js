import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GSK","description":"","frontmatter":{"title":"GSK","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pharmaceutical","vaccines","shingrix","industry"],"sources":["raw/badlands-brief-b62.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gsk.md","filePath":"entities/gsk.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gsk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gsk" tabindex="-1">GSK <a class="header-anchor" href="#gsk" aria-label="Permalink to &quot;GSK&quot;">​</a></h1><p>GSK is the pharmaceutical manufacturer of Shingrix, a widely used shingles vaccine.[1]</p><h2 id="fda-publication-dispute" tabindex="-1">FDA publication dispute <a class="header-anchor" href="#fda-publication-dispute" aria-label="Permalink to &quot;FDA publication dispute&quot;">​</a></h2><p>Shingrix was among the products covered by safety studies whose publication the <a href="/entities/food-and-drug-administration">FDA</a> blocked in 2026, alongside COVID-19 vaccines made by <a href="/entities/pfizer">Pfizer</a> and <a href="/entities/moderna">Moderna</a>.[1] The withdrawn research is described in <a href="/concepts/fda-blocked-vaccine-safety-studies">FDA Blocked Vaccine Safety Studies</a>; <a href="/entities/department-of-health-and-human-services">HHS</a> said the authors had drawn conclusions unsupported by the data, while Badlands commentary read the suppression as evidence the underlying data undercut safety claims.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Reckoning of Fake Elections, Fake Wars and Fake Allies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b62" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b62</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gsk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gsk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gsk as default
};
