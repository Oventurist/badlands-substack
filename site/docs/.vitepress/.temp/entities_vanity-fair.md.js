import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vanity Fair","description":"","frontmatter":{"title":"Vanity Fair","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","magazine","trump-administration"],"sources":["raw/badlands-news-brief-763.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/vanity-fair.md","filePath":"entities/vanity-fair.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vanity-fair.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vanity-fair" tabindex="-1">Vanity Fair <a class="header-anchor" href="#vanity-fair" aria-label="Permalink to &quot;Vanity Fair&quot;">​</a></h1><p>Vanity Fair is an American magazine whose December 2025 profile of White House Chief of Staff <a href="/entities/susie-wiles">Susie Wiles</a> became a political controversy.[1]</p><h2 id="wiles-interview" tabindex="-1">Wiles interview <a class="header-anchor" href="#wiles-interview" aria-label="Permalink to &quot;Wiles interview&quot;">​</a></h2><p>Over the course of nearly a dozen interviews with Vanity Fair, Wiles discussed a wide range of issues including the handling of Epstein files, President <a href="/entities/donald-trump">Donald Trump</a>&#39;s legal actions against political rivals, and the personalities around the president.[1] The resulting article painted an unflattering picture of the <a href="/entities/trump-administration">Trump administration</a> and many of its top officials: Wiles was quoted describing Trump as having an &quot;alcoholic&#39;s personality&quot; and Vice President <a href="/entities/jd-vance">JD Vance</a> as having been a &quot;conspiracy theorist&quot; for a decade.[1]</p><p>Wiles subsequently disputed portions of the article in a post on X, saying that Vanity Fair had disregarded &quot;significant context&quot; to create &quot;an overwhelmingly chaotic and negative narrative&quot; about the administration.[1] In a <a href="/entities/new-york-post">New York Post</a> interview, Trump defended Wiles as &quot;fantastic&quot; and suggested she had been &quot;deceived&quot; by the writer, adding that he thought her comments about his personality mirrored remarks he had previously made himself.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor <a href="/entities/chris-paul">Chris Paul</a> said he had read both parts of the Wiles interview and found it &quot;boring and irrelevant,&quot; concluding that &quot;there is no scandal there whatsoever.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Ice Maiden, A Command Overhaul, &amp; A Thrice Jewish President&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-763" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-763</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vanity-fair.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vanityFair = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vanityFair as default
};
