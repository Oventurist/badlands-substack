import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steve Wozniak","description":"","frontmatter":{"title":"Steve Wozniak","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["apple","technology","education","wozed"],"sources":["raw/badlands-brief-414.md"],"confidence":"low"},"headers":[],"relativePath":"entities/steve-wozniak.md","filePath":"entities/steve-wozniak.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steve-wozniak.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steve-wozniak" tabindex="-1">Steve Wozniak <a class="header-anchor" href="#steve-wozniak" aria-label="Permalink to &quot;Steve Wozniak&quot;">​</a></h1><p>Steve Wozniak is a co-founder of <a href="/entities/apple">Apple</a> and the creator of WozEd, an educational technology curriculum.[1]</p><h2 id="wozed-and-the-salamanca-robot-pilot" tabindex="-1">WozEd and the Salamanca robot pilot <a class="header-anchor" href="#wozed-and-the-salamanca-robot-pilot" aria-label="Permalink to &quot;WozEd and the Salamanca robot pilot&quot;">​</a></h2><p>WozEd surfaced in 2026 reporting on the <a href="/entities/salamanca-city-central-school-district">Salamanca City Central School District</a>&#39;s attempt to place an AI humanoid robot in classrooms. The district reportedly regarded the Las Vegas–based vendor <a href="/entities/realbotix">Realbotix</a> as &quot;a natural fit because its robots are already programmed with WozEd, a curriculum from Apple co-founder Steve Wozniak that the district uses.&quot;[1]</p><p>The pilot was paused after parents, teachers, and state officials raised objections over student data privacy and the vendor&#39;s ties to a sex-doll manufacturer.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narcissistic Sociopathy &amp; Rebranded Sex Robots For Kids&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-414" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-414</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steve-wozniak.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steveWozniak = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  steveWozniak as default
};
