import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Beef","description":"","frontmatter":{"title":"National Beef","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["meatpacking","agriculture","antitrust","foreign-ownership"],"sources":["raw/badlands-brief-195.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-beef.md","filePath":"entities/national-beef.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-beef.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-beef" tabindex="-1">National Beef <a class="header-anchor" href="#national-beef" aria-label="Permalink to &quot;National Beef&quot;">​</a></h1><p>National Beef is a US beef processing company counted among the &quot;Big Four&quot; beef packers.[1]</p><h2 id="_2026-antitrust-investigation" tabindex="-1">2026 antitrust investigation <a class="header-anchor" href="#_2026-antitrust-investigation" aria-label="Permalink to &quot;2026 antitrust investigation&quot;">​</a></h2><p>National Beef was named with <a href="/entities/jbs">JBS</a>, <a href="/entities/cargill">Cargill</a>, and <a href="/entities/tyson-foods">Tyson Foods</a> in the <a href="/concepts/beef-packer-antitrust-investigation-2026">antitrust investigation</a> announced in May 2026 by the <a href="/entities/department-of-justice">Department of Justice</a> and <a href="/entities/department-of-agriculture">Department of Agriculture</a>.[1] Agriculture Secretary <a href="/entities/brooke-rollins">Brooke Rollins</a> identified National Beef and JBS as foreign-owned packers posing a national security threat amid reports of slave labor ties.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Crypto Smears, Professional Plotlines, &amp; Meat Probes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-195" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-195</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-beef.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalBeef = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalBeef as default
};
