import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cargill","description":"","frontmatter":{"title":"Cargill","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["meatpacking","agriculture","antitrust"],"sources":["raw/badlands-brief-195.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cargill.md","filePath":"entities/cargill.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cargill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cargill" tabindex="-1">Cargill <a class="header-anchor" href="#cargill" aria-label="Permalink to &quot;Cargill&quot;">​</a></h1><p>Cargill is a major American agribusiness and one of the &quot;Big Four&quot; US beef packers.[1]</p><h2 id="_2026-antitrust-investigation" tabindex="-1">2026 antitrust investigation <a class="header-anchor" href="#_2026-antitrust-investigation" aria-label="Permalink to &quot;2026 antitrust investigation&quot;">​</a></h2><p>Cargill was named with <a href="/entities/jbs">JBS</a>, <a href="/entities/tyson-foods">Tyson Foods</a>, and <a href="/entities/national-beef">National Beef</a> in the intensified <a href="/concepts/beef-packer-antitrust-investigation-2026">antitrust investigation</a> announced in May 2026 by the <a href="/entities/department-of-justice">Department of Justice</a> and <a href="/entities/department-of-agriculture">Department of Agriculture</a>, which cited price manipulation, foreign ownership risks, and supply chain issues.[1] Acting Attorney General <a href="/entities/todd-blanche">Todd Blanche</a> said the review covered more than three million documents and hundreds of rancher interviews.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Crypto Smears, Professional Plotlines, &amp; Meat Probes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-195" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-195</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cargill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cargill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cargill as default
};
