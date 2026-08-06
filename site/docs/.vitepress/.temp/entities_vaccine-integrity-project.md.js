import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vaccine Integrity Project","description":"","frontmatter":{"title":"Vaccine Integrity Project","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["vaccines","acip","public-health","pharma","university-of-minnesota"],"sources":["raw/badlands-news-brief-899.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/vaccine-integrity-project.md","filePath":"entities/vaccine-integrity-project.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vaccine-integrity-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vaccine-integrity-project" tabindex="-1">Vaccine Integrity Project <a class="header-anchor" href="#vaccine-integrity-project" aria-label="Permalink to &quot;Vaccine Integrity Project&quot;">​</a></h1><p>The Vaccine Integrity Project is an initiative housed at the University of Minnesota that, in 2025, became a partner in efforts by vaccine industry groups to build a &quot;nongovernmental vaccine system&quot; outside federal oversight.[1]</p><h2 id="private-coalition-to-bypass-acip" tabindex="-1">Private coalition to bypass ACIP <a class="header-anchor" href="#private-coalition-to-bypass-acip" aria-label="Permalink to &quot;Private coalition to bypass ACIP&quot;">​</a></h2><p>Pharmaceutical companies, pharmacists, and medical associations with longstanding ties to vaccine manufacturers including <a href="/entities/merck">Merck</a>, Sanofi, and <a href="/entities/pfizer">Pfizer</a> joined a new private coalition aimed at bypassing the CDC&#39;s <a href="/entities/advisory-committee-on-immunization-practices">Advisory Committee on Immunization Practices</a> (ACIP), according to Washington Post reporting summarized by Badlands Media.[1] The coalition — which also includes state health officials and a new advocacy group — is working with the Vaccine Integrity Project to develop the alternative system.[1]</p><p>The effort followed Health and Human Services Secretary <a href="/entities/robert-f-kennedy-jr">Robert F. Kennedy Jr.</a>&#39;s dismissal of all sitting ACIP members over conflict-of-interest concerns.[1] The coalition&#39;s plan involves ordering vaccines directly from manufacturers and following recommendations issued by medical associations rather than ACIP.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Daddy Issues &amp; Damage Assessments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-899" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-899</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vaccine-integrity-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vaccineIntegrityProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vaccineIntegrityProject as default
};
