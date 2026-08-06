import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tim Davie","description":"","frontmatter":{"title":"Tim Davie","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bbc","media-executive","united-kingdom","resignation","january-6"],"sources":["raw/badlands-news-brief-50a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/tim-davie.md","filePath":"entities/tim-davie.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tim-davie.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tim-davie" tabindex="-1">Tim Davie <a class="header-anchor" href="#tim-davie" aria-label="Permalink to &quot;Tim Davie&quot;">​</a></h1><p><strong>Tim Davie</strong> is the British media executive who served as director general of the <a href="/entities/bbc">BBC</a> and resigned amid the <a href="/concepts/bbc-january-6-footage-editing-scandal">BBC January 6 footage editing scandal</a>.[1]</p><h2 id="resignation" tabindex="-1">Resignation <a class="header-anchor" href="#resignation" aria-label="Permalink to &quot;Resignation&quot;">​</a></h2><p>Accusations that the BBC had spliced footage of <a href="/entities/donald-trump">Donald Trump</a>&#39;s January 6, 2021 speech to make it appear that he incited the Capitol riot forced both the director general and the head of news to quit.[1] Trump reportedly threatened to sue the broadcaster for $1 billion over the edit.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor GhostofBasedPatrickHenry commented caustically on a widely circulated photograph of Davie, declining — in explicitly disclaimed terms — to characterize his appearance, while stating that Davie should never again work in media journalism.[1] The contributor predicted Davie would nonetheless return to the industry, and argued this was precisely why Russian officials such as <a href="/entities/sergey-lavrov">Sergey Lavrov</a> should capitalize on the moment to press the attack on Western media.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manipulated Maps, Downed Planes, &amp; A Very Stable Genius&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-50a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-50a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tim-davie.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timDavie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timDavie as default
};
