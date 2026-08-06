import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Redfield","description":"","frontmatter":{"title":"Robert Redfield","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cdc","covid-19","lab-leak","congressional-testimony"],"sources":["raw/badlands-news-brief-082.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-redfield.md","filePath":"entities/robert-redfield.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-redfield.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-redfield" tabindex="-1">Robert Redfield <a class="header-anchor" href="#robert-redfield" aria-label="Permalink to &quot;Robert Redfield&quot;">​</a></h1><p>Robert Redfield is an American virologist who served as Director of the <a href="/entities/centers-for-disease-control-and-prevention">Centers for Disease Control and Prevention</a> during the initial phase of the COVID-19 pandemic. He became a significant witness in later congressional inquiries into the origins of SARS-CoV-2 because, unlike most senior federal health officials of the period, he publicly favored the possibility that the virus emerged from a laboratory.[1]</p><h2 id="testimony-to-the-covid-select-subcommittee" tabindex="-1">Testimony to the COVID select subcommittee <a class="header-anchor" href="#testimony-to-the-covid-select-subcommittee" aria-label="Permalink to &quot;Testimony to the COVID select subcommittee&quot;">​</a></h2><p>At the first hearing of the House select subcommittee investigating the origins of COVID-19, held in March 2023, Redfield testified that he had been &quot;sidelined&quot; from internal government debates over the origins of the virus.[1] He stated that <a href="/entities/anthony-fauci">anthony-fauci</a>, then the White House chief medical adviser, did not appreciate Redfield&#39;s support for the <a href="/concepts/lab-leak-theory">lab-leak theory</a>.[1]</p><p>Redfield&#39;s account framed the questioning pursued by <a href="/entities/jim-jordan">jim-jordan</a>, who used the hearing to press on the abrupt reversal of two scientists — Kristian Andersen and Robert Garry — who had initially told Fauci that the virus appeared potentially engineered.[1] Commentary in the <a href="/concepts/badlands-news-brief">badlands-news-brief</a> treated Redfield&#39;s sidelining as evidence of a wider pattern in which dissenting researchers were excluded or discredited within federal public-health institutions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tucker, Fauci, Biden &amp; Biology&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-082" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-082</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-redfield.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertRedfield = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertRedfield as default
};
