import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chris Beall","description":"","frontmatter":{"title":"Chris Beall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colorado","elections","eric","testimony"],"sources":["raw/badlands-news-brief-2ad.md"],"confidence":"low"},"headers":[],"relativePath":"entities/chris-beall.md","filePath":"entities/chris-beall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chris-beall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chris-beall" tabindex="-1">Chris Beall <a class="header-anchor" href="#chris-beall" aria-label="Permalink to &quot;Chris Beall&quot;">​</a></h1><p>Chris Beall is Deputy Secretary of State of Colorado, serving under Secretary of State <a href="/entities/jena-griswold">Jena Griswold</a>.[1]</p><p>According to <a href="/entities/ashe-in-america">Ashe in America</a>, who cross-examined Beall during her own trial in July 2024, Beall runs every aspect of Griswold&#39;s office and admitted under oath to details about Colorado&#39;s relationship with the <a href="/entities/electronic-registration-information-center">Electronic Registration Information Center</a>.[1] Those admissions, described as part of the official trial record, concerned the 2022 episode in which Griswold&#39;s office &quot;mistakenly&quot; mailed postcards to roughly 30,000 foreign nationals encouraging them to vote — officially attributed to a data coding mismatch between the Colorado DMV database and ERIC — and the practice of ERIC routing non-citizen records to member states without identifying them as non-citizens.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: New Gotham City, Iranian Mysteries &amp; Wars Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chris-beall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chrisBeall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chrisBeall as default
};
