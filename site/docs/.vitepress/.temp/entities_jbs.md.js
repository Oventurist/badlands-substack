import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"JBS","description":"","frontmatter":{"title":"JBS","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["meatpacking","agriculture","antitrust","foreign-ownership"],"sources":["raw/badlands-brief-195.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jbs.md","filePath":"entities/jbs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jbs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jbs" tabindex="-1">JBS <a class="header-anchor" href="#jbs" aria-label="Permalink to &quot;JBS&quot;">​</a></h1><p>JBS is a multinational meatpacking company and one of the &quot;Big Four&quot; US beef packers.[1]</p><h2 id="_2026-antitrust-investigation" tabindex="-1">2026 antitrust investigation <a class="header-anchor" href="#_2026-antitrust-investigation" aria-label="Permalink to &quot;2026 antitrust investigation&quot;">​</a></h2><p>JBS was named alongside <a href="/entities/cargill">Cargill</a>, <a href="/entities/tyson-foods">Tyson Foods</a>, and <a href="/entities/national-beef">National Beef</a> in the <a href="/concepts/beef-packer-antitrust-investigation-2026">antitrust investigation</a> announced in May 2026 by the <a href="/entities/department-of-justice">Department of Justice</a> and <a href="/entities/department-of-agriculture">Department of Agriculture</a>, which cited price manipulation, foreign ownership risks, and supply chain issues.[1] Agriculture Secretary <a href="/entities/brooke-rollins">Brooke Rollins</a> singled out JBS and National Beef as foreign-owned packers constituting a national security threat amid reports of slave labor ties, describing the largest meat packer in the world as a threat &quot;not just to our cattle producers, but a threat to America itself.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Crypto Smears, Professional Plotlines, &amp; Meat Probes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-195" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-195</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jbs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jbs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jbs as default
};
