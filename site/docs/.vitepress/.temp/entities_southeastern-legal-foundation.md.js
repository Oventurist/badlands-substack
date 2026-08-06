import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Southeastern Legal Foundation","description":"","frontmatter":{"title":"Southeastern Legal Foundation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["legal","foia","transparency","biden","litigation"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/southeastern-legal-foundation.md","filePath":"entities/southeastern-legal-foundation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/southeastern-legal-foundation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="southeastern-legal-foundation" tabindex="-1">Southeastern Legal Foundation <a class="header-anchor" href="#southeastern-legal-foundation" aria-label="Permalink to &quot;Southeastern Legal Foundation&quot;">​</a></h1><p>The Southeastern Legal Foundation (SLF) is a public-interest legal organization that pursues government-transparency litigation.[1]</p><p>In June 2022 the SLF filed a Freedom of Information Act request with the <a href="/entities/national-archives-and-records-administration">National Archives and Records Administration</a> seeking any documents referencing three pseudonymous email accounts allegedly used by <a href="/entities/joe-biden">Joe Biden</a> while he was vice president: <a href="mailto:robinware456@gmail.com" target="_blank" rel="noreferrer">robinware456@gmail.com</a>, <a href="mailto:JRBWare@gmail.com" target="_blank" rel="noreferrer">JRBWare@gmail.com</a>, and <a href="mailto:Robert.L.Peters@pci.gov" target="_blank" rel="noreferrer">Robert.L.Peters@pci.gov</a>.[1] In a responsive letter, NARA said it had identified approximately 5,138 email messages, 25 electronic files, and 200 pages of potentially responsive records — some 5,400 records in total — that would have to be processed to answer the request.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/southeastern-legal-foundation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const southeasternLegalFoundation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  southeasternLegalFoundation as default
};
