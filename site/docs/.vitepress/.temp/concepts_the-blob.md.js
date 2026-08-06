import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Blob","description":"","frontmatter":{"title":"The Blob","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["foreign-policy","national-security","deep-state"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/the-blob.md","filePath":"concepts/the-blob.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/the-blob.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-blob" tabindex="-1">The Blob <a class="header-anchor" href="#the-blob" aria-label="Permalink to &quot;The Blob&quot;">​</a></h1><p>&quot;The Blob&quot; is the term, attributed by Badlands Media to <a href="/entities/mike-benz">Mike Benz</a>, for the sprawling Western foreign policy and national security apparatus — what the article calls the &quot;monstrosity&quot; of names and acronyms that accompanies any study of the field.[1]</p><p>The article invokes the Blob to describe the institutional continuity linking the <a href="/entities/project-for-the-new-american-century">Project for the New American Century</a>, the <a href="/entities/cia">CIA</a>, the <a href="/entities/pentagon">Pentagon</a>, and the <a href="/entities/state-department">State Department</a> across administrations.[1] It describes the CIA and State Department together as a &quot;two-headed dragon&quot; behind cookie-cutter regime change operations using proxy armies, and says the Blob&#39;s standard method is to slander anyone seeking compromise as a &quot;Russian agent&quot; — as happened to <a href="/entities/tulsi-gabbard">Tulsi Gabbard</a>.[1] In the Ukraine case, the article holds that the State Department and its NGO blob orchestrated a color revolution and regime change in 2014.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/the-blob.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theBlob = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theBlob as default
};
