import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Halyna Hutchins","description":"","frontmatter":{"title":"Halyna Hutchins","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hollywood","rust-shooting","cinematography"],"sources":["raw/badlands-news-brief-4b9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/halyna-hutchins.md","filePath":"entities/halyna-hutchins.md","lastUpdated":null}');
const _sfc_main = { name: "entities/halyna-hutchins.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="halyna-hutchins" tabindex="-1">Halyna Hutchins <a class="header-anchor" href="#halyna-hutchins" aria-label="Permalink to &quot;Halyna Hutchins&quot;">​</a></h1><p>Halyna Hutchins was the cinematographer of the Western film <em>Rust</em>, who was killed on set by a live round fired from a prop firearm handled by actor <a href="/entities/alec-baldwin">Alec Baldwin</a>.[1]</p><h2 id="legal-aftermath" tabindex="-1">Legal aftermath <a class="header-anchor" href="#legal-aftermath" aria-label="Permalink to &quot;Legal aftermath&quot;">​</a></h2><p>The film&#39;s armorer, <a href="/entities/hannah-gutierrez-reed">Hannah Gutierrez-Reed</a>, was convicted of involuntary manslaughter and sentenced in April 2024 to 18 months in custody for bringing to the set the bullets that killed Hutchins.[1] Baldwin was charged on the same count, but his case was dismissed in the middle of trial on July 12, 2024 after a New Mexico judge found that prosecutors had withheld evidence from the defense.[1] Commentary at <a href="/entities/badlands-media">Badlands Media</a> noted that the question of who actually brought the live rounds onto the <em>Rust</em> set remained unanswered even after the prosecutions concluded.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Shot Heard Around the World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4b9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4b9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/halyna-hutchins.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const halynaHutchins = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  halynaHutchins as default
};
