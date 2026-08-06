import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Drew Ensign","description":"","frontmatter":{"title":"Drew Ensign","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","boasberg","alien-enemies-act","contempt","deportation"],"sources":["raw/badlands-news-brief-306.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/drew-ensign.md","filePath":"entities/drew-ensign.md","lastUpdated":null}');
const _sfc_main = { name: "entities/drew-ensign.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="drew-ensign" tabindex="-1">Drew Ensign <a class="header-anchor" href="#drew-ensign" aria-label="Permalink to &quot;Drew Ensign&quot;">​</a></h1><p><strong>Drew Ensign</strong> is the <a href="/entities/justice-department">Justice Department</a>&#39;s deputy assistant attorney general, called to testify in the revived criminal contempt inquiry led by U.S. District Judge <a href="/entities/james-boasberg">James Boasberg</a>.[1]</p><h2 id="contempt-inquiry-testimony" tabindex="-1">Contempt inquiry testimony <a class="header-anchor" href="#contempt-inquiry-testimony" aria-label="Permalink to &quot;Contempt inquiry testimony&quot;">​</a></h2><p>In December 2025, Boasberg scheduled testimony from Ensign and from former Justice Department lawyer <a href="/entities/erez-reuveni">Erez Reuveni</a> as part of an investigation into whether senior Trump officials willfully defied Boasberg&#39;s March order attempting to temporarily block the administration&#39;s use of the <a href="/concepts/alien-enemies-act">Alien Enemies Act</a> to deport hundreds of Venezuelan immigrants to El Salvador.[1]</p><p>Administration lawyers moved that week to cancel the two witness appearances or to allow the administration to block the testimony citing executive privilege, arguing the court was overstepping its authority because the investigation and prosecution of crimes is a core executive power.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Truckloads of Proof, Holiday Intifada, &amp; Europe Must Swallow&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-306" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-306</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/drew-ensign.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const drewEnsign = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  drewEnsign as default
};
