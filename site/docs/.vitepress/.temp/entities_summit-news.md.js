import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Summit News","description":"","frontmatter":{"title":"Summit News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","alternative-media","news-outlet"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/summit-news.md","filePath":"entities/summit-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/summit-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="summit-news" tabindex="-1">Summit News <a class="header-anchor" href="#summit-news" aria-label="Permalink to &quot;Summit News&quot;">​</a></h1><p>Summit News is an alternative media outlet frequently cited in Badlands Media&#39;s news roundups.[1]</p><p>In August 2023 Summit News reported on an Associated Press/NORC poll finding that 77 percent of Americans — including 89 percent of Republicans and 69 percent of Democrats — considered <a href="/entities/joe-biden">Joe Biden</a> too old to serve a second term, while fewer than half of Americans said the same of <a href="/entities/donald-trump">Donald Trump</a>.[1] The report was aggregated in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> with commentary from <a href="/entities/ashe-in-america">Ashe in America</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/summit-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const summitNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  summitNews as default
};
