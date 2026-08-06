import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Christopher Steele","description":"","frontmatter":{"title":"Christopher Steele","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russiagate","british-intelligence","dossier","durham"],"sources":["raw/badlands-brief-a20.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/christopher-steele.md","filePath":"entities/christopher-steele.md","lastUpdated":null}');
const _sfc_main = { name: "entities/christopher-steele.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="christopher-steele" tabindex="-1">Christopher Steele <a class="header-anchor" href="#christopher-steele" aria-label="Permalink to &quot;Christopher Steele&quot;">​</a></h1><p>Christopher Steele is a former British intelligence officer whose opposition-research dossier, produced through <a href="/entities/fusion-gps">Fusion GPS</a>, became a central artifact of the <a href="/concepts/crossfire-hurricane">Crossfire Hurricane</a>/<a href="/concepts/russiagate-hoax">Russiagate</a> investigation.[1]</p><h2 id="durham-records-litigation" tabindex="-1">Durham records litigation <a class="header-anchor" href="#durham-records-litigation" aria-label="Permalink to &quot;Durham records litigation&quot;">​</a></h2><p>In January 2026, <a href="/entities/judicial-watch">Judicial Watch</a> announced a Freedom of Information Act lawsuit against the <a href="/entities/department-of-justice">Justice Department</a> seeking unredacted records from former Special Counsel <a href="/entities/john-durham">John Durham</a>&#39;s probe into the origins of Crossfire Hurricane.[1] The request explicitly covers communications involving Steele, along with <a href="/entities/british-intelligence">British Intelligence</a> head Sir <a href="/entities/richard-dearlove">Richard Dearlove</a>, U.S. intelligence officials and <a href="/entities/stefan-halper">Stefan Halper</a> — grouping Steele among the foreign-linked figures whose contacts with American agencies remain incompletely disclosed.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Prosecutions for Democracy &amp; Double-Hatted Peace Panelists&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a20" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a20</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/christopher-steele.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const christopherSteele = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  christopherSteele as default
};
