import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tim Ballard","description":"","frontmatter":{"title":"Tim Ballard","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["child-trafficking","operation-underground-railroad","sound-of-freedom"],"sources":["raw/badlands-news-brief-3f8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tim-ballard.md","filePath":"entities/tim-ballard.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tim-ballard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tim-ballard" tabindex="-1">Tim Ballard <a class="header-anchor" href="#tim-ballard" aria-label="Permalink to &quot;Tim Ballard&quot;">​</a></h1><p>Tim Ballard is an American anti-trafficking activist and the founder of <a href="/entities/operation-underground-railroad">Operation Underground Railroad</a>, an organisation dedicated to rescuing children from sex trafficking operations.[1] His life and work are the basis of the 2023 film <a href="/concepts/sound-of-freedom">Sound of Freedom</a>, in which he is portrayed by <a href="/entities/jim-caviezel">Jim Caviezel</a>.[1]</p><p>The film&#39;s commercial success — $100 million at the box office within weeks of release, on a reported $14 million budget, achieved despite hostile coverage from outlets including Rolling Stone and Bloomberg News — brought Ballard&#39;s work to a mass audience and made child trafficking a subject of unusually wide public discussion in 2023.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;&#39;X&#39; Marks the Spot &amp; Vineyard Mysteries Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tim-ballard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timBallard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timBallard as default
};
