import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lauren Southern","description":"","frontmatter":{"title":"Lauren Southern","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","commentator","tenet-media"],"sources":["raw/badlands-news-brief-6f7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lauren-southern.md","filePath":"entities/lauren-southern.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lauren-southern.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lauren-southern" tabindex="-1">Lauren Southern <a class="header-anchor" href="#lauren-southern" aria-label="Permalink to &quot;Lauren Southern&quot;">​</a></h1><p>Lauren Southern is a conservative media commentator named among the influencers associated with <a href="/entities/tenet-media">Tenet Media</a> in the federal indictment unsealed on September 4, 2024.[1]</p><p>The indictment specifically noted that Southern, along with <a href="/entities/tim-pool">Tim Pool</a>, <a href="/entities/benny-johnson">Benny Johnson</a> and <a href="/entities/dave-rubin">Dave Rubin</a>, had no idea they were taking money originating with employees of <a href="/entities/russia-today">Russia Today</a> and were deceived about its source, having been told by Tenet founder <a href="/entities/lauren-chen">Lauren Chen</a> that the funding came from a private investor named &quot;Eduard Grigoriann.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Psyops Abound as the Media Landscape Shifts Rapidly&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6f7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6f7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lauren-southern.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const laurenSouthern = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  laurenSouthern as default
};
