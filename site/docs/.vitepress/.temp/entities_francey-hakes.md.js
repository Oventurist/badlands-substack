import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Francey Hakes","description":"","frontmatter":{"title":"Francey Hakes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","political-appointees","prosecutors"],"sources":["raw/badlands-news-brief-5f2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/francey-hakes.md","filePath":"entities/francey-hakes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/francey-hakes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="francey-hakes" tabindex="-1">Francey Hakes <a class="header-anchor" href="#francey-hakes" aria-label="Permalink to &quot;Francey Hakes&quot;">​</a></h1><p>Francey Hakes is a political appointee in the United States <a href="/entities/department-of-justice">Department of Justice</a> who runs the Executive Office of U.S. Attorneys.[1]</p><p>Hakes signed the notice terminating federal prosecutor <a href="/entities/maurene-comey">Maurene Comey</a> on July 16, 2025.[1] According to a person familiar with the matter, the notice provided no reason for the firing, instead citing the broad powers afforded to the president under the <a href="/concepts/us-constitution">U.S. Constitution</a>.[1] Because Comey had worked on the <a href="/entities/jeffrey-epstein">Jeffrey Epstein</a> and <a href="/entities/ghislaine-maxwell">Ghislaine Maxwell</a> prosecutions as well as the <a href="/entities/sean-combs">Sean Combs</a> trial, the dismissal Hakes signed became a focal point of commentary about the <a href="/concepts/epstein-files">Epstein files</a> controversy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Double Comey Drama &amp; Magic Moon Soil&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/francey-hakes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const franceyHakes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  franceyHakes as default
};
