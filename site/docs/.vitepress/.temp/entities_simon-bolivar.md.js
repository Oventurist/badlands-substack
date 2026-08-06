import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Simón Bolívar","description":"","frontmatter":{"title":"Simón Bolívar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["latin-america","history","colombia","venezuela","symbolism"],"sources":["raw/badlands-brief-b24.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/simon-bolivar.md","filePath":"entities/simon-bolivar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/simon-bolivar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="simon-bolivar" tabindex="-1">Simón Bolívar <a class="header-anchor" href="#simon-bolivar" aria-label="Permalink to &quot;Simón Bolívar&quot;">​</a></h1><p>Simón Bolívar is the independence-era historical figure of the Colombia–Venezuela region, described in Badlands coverage as akin to George Washington for that part of South America.[1] Both <a href="/entities/gustavo-petro">Gustavo Petro</a> and <a href="/entities/nicolas-maduro">Nicolás Maduro</a> invoke Bolívar relentlessly in their public communications.[1]</p><h2 id="truth-social-post-and-badlands-interpretation" tabindex="-1">Truth Social post and Badlands interpretation <a class="header-anchor" href="#truth-social-post-and-badlands-interpretation" aria-label="Permalink to &quot;Truth Social post and Badlands interpretation&quot;">​</a></h2><p>On the day of Petro&#39;s long post alleging electoral fraud via servers in California, President <a href="/entities/donald-trump">Donald Trump</a> posted a photograph of the recently restored Simón Bolívar statue to Truth Social — exactly fifty minutes before Petro published.[1] Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> flagged the timing and asked whether the image functioned as a communication that Colombia &quot;is going to be cleaned up.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Diplomatic Trolling &amp; Colombian Election Denial&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b24" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b24</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/simon-bolivar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const simonBolivar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  simonBolivar as default
};
