import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jim Farley","description":"","frontmatter":{"title":"Jim Farley","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["automotive","executives","labor"],"sources":["raw/badlands-news-brief-627.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jim-farley.md","filePath":"entities/jim-farley.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jim-farley.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jim-farley" tabindex="-1">Jim Farley <a class="header-anchor" href="#jim-farley" aria-label="Permalink to &quot;Jim Farley&quot;">​</a></h1><p>Jim Farley is the chief executive officer of <a href="/entities/ford-motor-company">Ford Motor</a>.[1]</p><p>On Thursday, September 14, 2023, ahead of the start of the <a href="/concepts/2023-united-auto-workers-strike">2023 United Auto Workers strike</a>, Farley said the <a href="/entities/united-auto-workers">UAW</a>&#39;s contract proposals would push Ford into bankruptcy and that there was &quot;nothing going on&quot; in negotiations.[1] Two days later the union described its talks with Ford as &quot;reasonably productive,&quot; a markedly warmer characterization than its assessment of the other Detroit Three negotiations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kennedy Assassins, Justice Wins &amp; More&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-627" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-627</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jim-farley.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jimFarley = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jimFarley as default
};
