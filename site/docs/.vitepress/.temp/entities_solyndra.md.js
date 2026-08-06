import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Solyndra","description":"","frontmatter":{"title":"Solyndra","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["green-energy","solar","obama-administration","corruption","loan-guarantees"],"sources":["raw/badlands-news-brief-19a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/solyndra.md","filePath":"entities/solyndra.md","lastUpdated":null}');
const _sfc_main = { name: "entities/solyndra.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="solyndra" tabindex="-1">Solyndra <a class="header-anchor" href="#solyndra" aria-label="Permalink to &quot;Solyndra&quot;">​</a></h1><p>Solyndra was an American solar panel manufacturer that received $535 million in federal support from the administration of President <a href="/entities/barack-obama">Barack Obama</a> to produce specialized solar panels, and subsequently went out of business.[1]</p><h2 id="badlands-interpretation" tabindex="-1">Badlands interpretation <a class="header-anchor" href="#badlands-interpretation" aria-label="Permalink to &quot;Badlands interpretation&quot;">​</a></h2><p>In the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, <a href="/entities/ashe-in-america">Ashe in America</a> cited Solyndra as the case that first made apparent her contention that the green new deal functions as a money laundering operation rather than an environmental program.[1] She noted that the scandal was quickly memory-holed after the company&#39;s collapse.[1]</p><p>Solyndra is invoked in the Brief as the direct antecedent of <a href="/concepts/crescent-dunes">Crescent Dunes</a>, another federally supported solar project dating to the Obama administration and likewise characterized as a money-laundering operation — with the added aggravating factor that the <a href="/entities/joe-biden">Biden</a> <a href="/entities/department-of-justice">Justice Department</a> moved on election night 2024 to dismiss the <a href="/concepts/qui-tam">qui tam</a> lawsuit that sought to recoup taxpayer losses.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ceasefires, Olive Branches ... and Scare Events?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-19a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-19a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/solyndra.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const solyndra = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  solyndra as default
};
