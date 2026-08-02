import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The New York Times","description":"","frontmatter":{"title":"The New York Times","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["outlet","newspaper","mainstream-media","media-criticism"],"sources":["raw/a-swan-song-for-the-msm.md","raw/arabian-nights.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/new-york-times.md","filePath":"entities/new-york-times.md","lastUpdated":null}');
const _sfc_main = { name: "entities/new-york-times.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-new-york-times" tabindex="-1">The New York Times <a class="header-anchor" href="#the-new-york-times" aria-label="Permalink to &quot;The New York Times&quot;">​</a></h1><p><em>The New York Times</em> is the leading American daily newspaper of record and, in the Badlands corpus, a paradigm case of an institution that has abandoned the adversarial function of the press.</p><h2 id="in-the-badlands-critique" tabindex="-1">In the Badlands critique <a class="header-anchor" href="#in-the-badlands-critique" aria-label="Permalink to &quot;In the Badlands critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> describes the Times, along with the <a href="/entities/washington-post">Washington Post</a> and <a href="/entities/the-atlantic">The Atlantic</a>, as &quot;mainstream, historically spook-friendly outlets&quot; that &quot;tend to hire people who are already naturally inclined to support the narratives handed down from on high.&quot; The article argues that such staff &quot;live and die by the modern liberal orthodoxy,&quot; and that their primary skillset consists of &quot;venomously seeking out anyone on the internet who deviates from this orthodoxy, and doing whatever they can to ruin said persons life.&quot;</p><p>The Times is also the former employer of <a href="/entities/taylor-lorenz">Taylor Lorenz</a>, whose social media beat the article presents as the archetype of this &quot;tattletale journalism.&quot; The paper&#39;s own business coverage is nonetheless cited in the article as the source for BuzzFeed News&#39;s 2023 shutdown.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p>This page draws on multiple source articles:</p><ul><li><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">a swan song for the msm</a></li><li><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">arabian nights</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/new-york-times.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newYorkTimes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newYorkTimes as default
};
