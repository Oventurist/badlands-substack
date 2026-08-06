import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thomas More Society","description":"","frontmatter":{"title":"Thomas More Society","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["litigation","legal","election-integrity"],"sources":["raw/badlands-news-brief-423.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/thomas-more-society.md","filePath":"entities/thomas-more-society.md","lastUpdated":null}');
const _sfc_main = { name: "entities/thomas-more-society.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thomas-more-society" tabindex="-1">Thomas More Society <a class="header-anchor" href="#thomas-more-society" aria-label="Permalink to &quot;Thomas More Society&quot;">​</a></h1><p>The Thomas More Society is a national constitutional litigation organization in the United States.[1]</p><p>It is the parent organization of the <a href="/entities/amistad-project">Amistad Project</a>, which after the 2020 general election publicized whistleblower declarations concerning the interstate transport of completed ballots by <a href="/entities/united-states-postal-service">USPS</a> contractors, including the account of driver <a href="/entities/jesse-morgan">Jesse Morgan</a>.[1] The Amistad Project&#39;s December 2020 press conference, held under the Thomas More Society banner, presented claims involving hundreds of thousands of ballots across Arizona, Michigan, Georgia and Pennsylvania.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gheyliens, Ukrainian Nazis &amp; Post Office Shenanigans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-423" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-423</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/thomas-more-society.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thomasMoreSociety = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thomasMoreSociety as default
};
