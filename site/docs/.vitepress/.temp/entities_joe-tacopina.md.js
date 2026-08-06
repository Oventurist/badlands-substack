import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Joe Tacopina","description":"","frontmatter":{"title":"Joe Tacopina","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["attorney","trump","defamation","new-york"],"sources":["raw/badlands-news-brief-8f3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/joe-tacopina.md","filePath":"entities/joe-tacopina.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joe-tacopina.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joe-tacopina" tabindex="-1">Joe Tacopina <a class="header-anchor" href="#joe-tacopina" aria-label="Permalink to &quot;Joe Tacopina&quot;">​</a></h1><p>Joe Tacopina is a New York trial attorney described as one of the country&#39;s top trial lawyers, hired by <a href="/entities/donald-trump">Donald Trump</a> in January 2023 to pursue a defamation claim against former Manhattan prosecutor <a href="/entities/mark-pomerantz">Mark Pomerantz</a>.[1]</p><p>In his first action as Trump&#39;s new counsel, Tacopina sent a letter on Monday, January 23, 2023, to Pomerantz, asserting that Pomerantz had falsely stated Trump was &quot;guilty of numerous felony violations&quot; and that it was a &quot;grave failure of justice not to hold [Trump] accountable by way of criminal prosecution.&quot;[1] The letter threatened that if Pomerantz published his book and continued making defamatory statements, Tacopina&#39;s office would &quot;aggressively pursue all legal remedies against you and your book publisher, Simon &amp; Schuster.&quot;[1] The story was first reported by <a href="/entities/tmz">TMZ</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: FBI Charges, Exorcisms and ... Woke M&amp;M&#39;s?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8f3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8f3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joe-tacopina.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joeTacopina = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joeTacopina as default
};
