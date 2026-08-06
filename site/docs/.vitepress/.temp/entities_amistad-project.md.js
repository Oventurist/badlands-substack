import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amistad Project","description":"","frontmatter":{"title":"Amistad Project","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["2020-election","litigation","election-integrity"],"sources":["raw/badlands-news-brief-423.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amistad-project.md","filePath":"entities/amistad-project.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amistad-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amistad-project" tabindex="-1">Amistad Project <a class="header-anchor" href="#amistad-project" aria-label="Permalink to &quot;Amistad Project&quot;">​</a></h1><p>The Amistad Project is the election-integrity arm of the <a href="/entities/thomas-more-society">Thomas More Society</a>, a national constitutional litigation organization.[1]</p><p>Following the 2020 general election, the Amistad Project convened a December 2020 press conference at which whistleblower testimony about postal handling of ballots was made public, including the account of contract driver <a href="/entities/jesse-morgan">Jesse Morgan</a>.[1] The project said it held sworn declarations placing over 300,000 ballots at issue in Arizona, 548,000 in Michigan, 204,000 in Georgia, and over 121,000 in Pennsylvania, and claimed its evidence revealed multi-state illegal efforts by <a href="/entities/united-states-postal-service">USPS</a> workers to influence the election in at least three of six swing states.[1] Its whistleblower statements described potentially hundreds of thousands of completed absentee ballots being transported across three state lines and a trailer of ballots disappearing in Pennsylvania.[1] Attorney <a href="/entities/phill-kline">Phill Kline</a> served as its director and public spokesman on the matter.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gheyliens, Ukrainian Nazis &amp; Post Office Shenanigans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-423" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-423</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amistad-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amistadProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amistadProject as default
};
