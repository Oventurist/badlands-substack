import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lauren Chen","description":"","frontmatter":{"title":"Lauren Chen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","tenet-media","russia","doj"],"sources":["raw/badlands-news-brief-6f7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lauren-chen.md","filePath":"entities/lauren-chen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lauren-chen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lauren-chen" tabindex="-1">Lauren Chen <a class="header-anchor" href="#lauren-chen" aria-label="Permalink to &quot;Lauren Chen&quot;">​</a></h1><p>Lauren Chen is the founder of <a href="/entities/tenet-media">Tenet Media</a>, the Tennessee-based media company at the center of a federal indictment unsealed on September 4, 2024 concerning nearly $10 million allegedly funneled from employees of <a href="/entities/russia-today">Russia Today</a>.[1]</p><p>According to the indictment as reported, Chen allegedly knew the true source of the funds and told the commentators working with the company that the money came from a wealthy private investor named &quot;Eduard Grigoriann.&quot;[1] The influencers involved — including <a href="/entities/tim-pool">Tim Pool</a>, <a href="/entities/benny-johnson">Benny Johnson</a>, <a href="/entities/dave-rubin">Dave Rubin</a> and <a href="/entities/lauren-southern">Lauren Southern</a> — were described by prosecutors as having been deceived and unaware that they were taking Russian money.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Psyops Abound as the Media Landscape Shifts Rapidly&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6f7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6f7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lauren-chen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const laurenChen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  laurenChen as default
};
