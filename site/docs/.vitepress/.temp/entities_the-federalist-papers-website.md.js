import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Federalist Papers (website)","description":"","frontmatter":{"title":"The Federalist Papers (website)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","conservative-media","opinion"],"sources":["raw/badlands-news-brief-378.md"],"confidence":"low"},"headers":[],"relativePath":"entities/the-federalist-papers-website.md","filePath":"entities/the-federalist-papers-website.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-federalist-papers-website.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-federalist-papers-website" tabindex="-1">The Federalist Papers (website) <a class="header-anchor" href="#the-federalist-papers-website" aria-label="Permalink to &quot;The Federalist Papers (website)&quot;">​</a></h1><p>The Federalist Papers is a conservative opinion website whose reporting is aggregated in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>In January 2024, Badlands excerpted a Federalist Papers opinion piece reporting that <a href="/entities/ohio">Ohio</a> Governor <a href="/entities/mike-dewine">Mike DeWine</a> had vetoed <a href="/concepts/ohio-house-bill-68">House Bill 68</a> and had received over $40,000 in donations from children&#39;s hospitals supportive of transgender medical treatments between 2018 and 2023.[1] The piece detailed the Ohio Children&#39;s Hospital Association&#39;s two $10,000 contributions to the DeWine–Husted transition fund and explained the permitted uses of such funds under Ohio&#39;s campaign finance handbook.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-federalist-papers-website.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theFederalistPapersWebsite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theFederalistPapersWebsite as default
};
