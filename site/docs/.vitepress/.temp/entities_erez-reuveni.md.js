import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Erez Reuveni","description":"","frontmatter":{"title":"Erez Reuveni","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","whistleblower","boasberg","alien-enemies-act","deportation"],"sources":["raw/badlands-news-brief-306.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/erez-reuveni.md","filePath":"entities/erez-reuveni.md","lastUpdated":null}');
const _sfc_main = { name: "entities/erez-reuveni.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="erez-reuveni" tabindex="-1">Erez Reuveni <a class="header-anchor" href="#erez-reuveni" aria-label="Permalink to &quot;Erez Reuveni&quot;">​</a></h1><p><strong>Erez Reuveni</strong> is a former U.S. Justice Department lawyer who has publicly accused the Trump administration of ignoring court orders, including in the deportation litigation before U.S. District Judge <a href="/entities/james-boasberg">James Boasberg</a>.[1]</p><h2 id="boasberg-contempt-inquiry" tabindex="-1">Boasberg contempt inquiry <a class="header-anchor" href="#boasberg-contempt-inquiry" aria-label="Permalink to &quot;Boasberg contempt inquiry&quot;">​</a></h2><p>In December 2025, Boasberg scheduled testimony from Reuveni and from Drew Ensign, the <a href="/entities/justice-department">Justice Department</a>&#39;s deputy assistant attorney general, as part of a revived criminal contempt investigation.[1] The inquiry focuses on whether senior Trump officials willfully defied Boasberg&#39;s March order attempting to temporarily block the administration&#39;s use of the 18th-century <a href="/concepts/alien-enemies-act">Alien Enemies Act</a> to deport hundreds of Venezuelan immigrants to El Salvador.[1]</p><p>Lawyers for the administration moved to halt the inquiry, asking the court to cancel the two witness appearances or to allow the administration to block testimony on executive privilege grounds, arguing that &quot;criminal contempt is a criminal offense, and the investigation and prosecution of crimes is [a] core executive power reserved to the Executive Branch.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Truckloads of Proof, Holiday Intifada, &amp; Europe Must Swallow&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-306" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-306</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/erez-reuveni.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const erezReuveni = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  erezReuveni as default
};
