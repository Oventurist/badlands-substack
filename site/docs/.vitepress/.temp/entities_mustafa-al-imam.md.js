import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mustafa al-Imam","description":"","frontmatter":{"title":"Mustafa al-Imam","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["benghazi","terrorism","libya","prosecution"],"sources":["raw/badlands-brief-eea.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mustafa-al-imam.md","filePath":"entities/mustafa-al-imam.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mustafa-al-imam.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mustafa-al-imam" tabindex="-1">Mustafa al-Imam <a class="header-anchor" href="#mustafa-al-imam" aria-label="Permalink to &quot;Mustafa al-Imam&quot;">​</a></h1><p>Mustafa al-Imam is a Libyan militant convicted in U.S. federal court for his role in the September 11, 2012 <a href="/entities/benghazi-attack">Benghazi attack</a>.[1] Together with <a href="/entities/ahmed-abu-khatallah">Ahmed Abu Khatallah</a>, he was one of the two defendants successfully prosecuted in American courts before the February 2026 transfer of <a href="/entities/zubayar-al-bakoush">Zubayar Al-Bakoush</a> into U.S. custody, which the Justice Department described as the third such case.[1]</p><p>Badlands commentary noted that despite these convictions, no senior U.S. political appointees were terminated or formally sanctioned over the Benghazi failures, a gap <a href="/entities/ashe-in-america">Ashe in America</a> treated as the unresolved core of the scandal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Epstein Fallout &amp; Middle East Madness&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-eea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-eea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mustafa-al-imam.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mustafaAlImam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mustafaAlImam as default
};
