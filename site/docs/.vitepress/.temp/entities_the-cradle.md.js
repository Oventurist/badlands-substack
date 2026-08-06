import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Cradle","description":"","frontmatter":{"title":"The Cradle","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","west-asia","journalism"],"sources":["raw/badlands-news-brief-051.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-cradle.md","filePath":"entities/the-cradle.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-cradle.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-cradle" tabindex="-1">The Cradle <a class="header-anchor" href="#the-cradle" aria-label="Permalink to &quot;The Cradle&quot;">​</a></h1><p><strong>The Cradle</strong> is a news outlet covering West Asian geopolitics, cited by <a href="/entities/badlands-media">Badlands Media</a> as a source for reporting on the Israel–Gaza war.[1]</p><p>In November 2023 the outlet reported on an Israeli police investigation, originally published by <a href="/entities/haaretz">Haaretz</a>, finding that an Israeli attack helicopter had killed some of the attendees at the Nova music festival during the <a href="/concepts/october-7-attacks">October 7 attacks</a> — the <a href="/concepts/nova-music-festival-friendly-fire-admission">first acknowledgement</a> that Israeli forces killed some of their own at the site.[1] The item was carried as a bonus entry in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Lawsuits Can Be Very Effective …&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-051" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-051</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-cradle.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theCradle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theCradle as default
};
