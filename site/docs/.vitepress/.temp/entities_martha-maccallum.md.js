import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Martha MacCallum","description":"","frontmatter":{"title":"Martha MacCallum","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","fox-news","2024-election","debates"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/martha-maccallum.md","filePath":"entities/martha-maccallum.md","lastUpdated":null}');
const _sfc_main = { name: "entities/martha-maccallum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="martha-maccallum" tabindex="-1">Martha MacCallum <a class="header-anchor" href="#martha-maccallum" aria-label="Permalink to &quot;Martha MacCallum&quot;">​</a></h1><p>Martha MacCallum is a <a href="/entities/fox-news">Fox News</a> anchor named, alongside <a href="/entities/bret-baier">Bret Baier</a>, as a moderator of the debate that <a href="/entities/donald-trump">Donald Trump</a> proposed to hold against <a href="/entities/kamala-harris">Kamala Harris</a> on September 4, 2024.[1]</p><p>Trump announced the arrangement on Truth Social, saying the Fox News debate would be held in Pennsylvania at a site to be determined, with rules similar to those of his earlier debate against <a href="/entities/joe-biden">Joe Biden</a> but &quot;WITH A FULL ARENA AUDIENCE.&quot;[1] He said the previously scheduled ABC debate had been terminated because Biden would no longer participate and because he was in litigation against the network.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/martha-maccallum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marthaMaccallum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marthaMaccallum as default
};
