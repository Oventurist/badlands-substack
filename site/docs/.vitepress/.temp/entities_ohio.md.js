import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ohio","description":"","frontmatter":{"title":"Ohio","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ohio","states","legislation","gender-medicine","covid-19"],"sources":["raw/badlands-news-brief-378.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ohio.md","filePath":"entities/ohio.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ohio.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ohio" tabindex="-1">Ohio <a class="header-anchor" href="#ohio" aria-label="Permalink to &quot;Ohio&quot;">​</a></h1><p>Ohio is a Midwestern U.S. state whose government became the subject of Badlands commentary in early 2024 after Republican Governor <a href="/entities/mike-dewine">Mike DeWine</a> vetoed <a href="/concepts/ohio-house-bill-68">House Bill 68</a>, a measure passed by the state legislature to bar puberty blockers and cross-sex hormones for minors and to prohibit boys from competing in girls&#39; sports.[1]</p><h2 id="legislature-versus-governor" tabindex="-1">Legislature versus governor <a class="header-anchor" href="#legislature-versus-governor" aria-label="Permalink to &quot;Legislature versus governor&quot;">​</a></h2><p>The veto placed the governor in conflict with the elected legislature and, as critics framed it, with the electorate: &quot;the people of Ohio and their legislature agree that they don&#39;t want to sterilize and mutilate children,&quot; yet the veto overrode that agreement.[1] Attention focused on $40,300 in donations DeWine received between 2018 and 2023 from the Ohio Children&#39;s Hospital Association, Cincinnati Children&#39;s, Nationwide Children&#39;s Hospital, and ProMedica Children&#39;s Hospital — institutions supportive of transgender medical care.[1]</p><h2 id="covid-era-precedent" tabindex="-1">COVID-era precedent <a class="header-anchor" href="#covid-era-precedent" aria-label="Permalink to &quot;COVID-era precedent&quot;">​</a></h2><p>Badlands commentary contrasted the parental-rights justification for the veto with Ohio&#39;s COVID-19 policies, noting the state imposed mask mandates and vaccine mandates and that parents there &quot;were stripped of their rights&quot; during the pandemic, when the impact and injury of mask and vaccine compliance initiatives were first becoming known.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ohio.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ohio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ohio as default
};
