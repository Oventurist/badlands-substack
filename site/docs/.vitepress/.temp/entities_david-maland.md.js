import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Maland","description":"","frontmatter":{"title":"David Maland","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["border-patrol","vermont","line-of-duty-death",2025],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-maland.md","filePath":"entities/david-maland.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-maland.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-maland" tabindex="-1">David Maland <a class="header-anchor" href="#david-maland" aria-label="Permalink to &quot;David Maland&quot;">​</a></h1><p>David Maland was a 44-year-old US Border Patrol agent killed in a shootout in northern Vermont on January 20, 2025, Inauguration Day.[1]</p><h2 id="the-shooting" tabindex="-1">The shooting <a class="header-anchor" href="#the-shooting" aria-label="Permalink to &quot;The shooting&quot;">​</a></h2><p>Maland and other agents pulled over 21-year-old <a href="/entities/teresa-youngblut">Teresa &quot;Milo&quot; Youngblut</a> and German citizen <a href="/entities/felix-bauckholt">Felix &quot;Ophelia&quot; Bauckholt</a> near the Canadian border.[1] Youngblut opened fire on the agents and a back-and-forth shootout followed, in which Maland and Bauckholt were killed and Youngblut was injured.[1]</p><h2 id="investigation" tabindex="-1">Investigation <a class="header-anchor" href="#investigation" aria-label="Permalink to &quot;Investigation&quot;">​</a></h2><p>Youngblut was arrested in Washington state the following week and charged with using a deadly weapon while assaulting a United States Border Patrol agent and with using and discharging a firearm during that assault.[1] Federal investigators later expanded their focus to 32-year-old <a href="/entities/michelle-zajko">Michelle Zajko</a>, who police say purchased the handguns used in Maland&#39;s shooting.[1] Police have described the broader case as linked to a &quot;trans vegan cult&quot; connected to multiple murders across the United States.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-maland.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidMaland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidMaland as default
};
