import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dave Joyce","description":"","frontmatter":{"title":"Dave Joyce","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","ohio","cannabis","veterans"],"sources":["raw/badlands-news-brief-899.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dave-joyce.md","filePath":"entities/dave-joyce.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dave-joyce.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dave-joyce" tabindex="-1">Dave Joyce <a class="header-anchor" href="#dave-joyce" aria-label="Permalink to &quot;Dave Joyce&quot;">​</a></h1><p>Dave Joyce is a Republican member of the U.S. House of Representatives from Ohio and a co-chair of the <a href="/entities/congressional-cannabis-caucus">Congressional Cannabis Caucus</a>.[1]</p><h2 id="veterans-cannabis-access" tabindex="-1">Veterans cannabis access <a class="header-anchor" href="#veterans-cannabis-access" aria-label="Permalink to &quot;Veterans cannabis access&quot;">​</a></h2><p>In June 2025 Joyce, together with fellow caucus co-chair Rep. <a href="/entities/brian-mast">Brian Mast</a> (R-FL), sponsored an amendment approved by the full House that would increase veterans&#39; access to state medical marijuana programs and strike the <a href="/entities/department-of-veterans-affairs">Department of Veterans Affairs</a> directive prohibiting VA doctors from issuing cannabis recommendations.[1] The measure was attached to the Military Construction, Veterans Affairs and Related Agencies appropriations bill, alongside a separate amendment supporting psychedelics research and access.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Daddy Issues &amp; Damage Assessments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-899" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-899</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dave-joyce.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const daveJoyce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  daveJoyce as default
};
