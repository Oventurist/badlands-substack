import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Remix News","description":"","frontmatter":{"title":"Remix News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","europe","central-europe","news-outlet"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/remix-news.md","filePath":"entities/remix-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/remix-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="remix-news" tabindex="-1">Remix News <a class="header-anchor" href="#remix-news" aria-label="Permalink to &quot;Remix News&quot;">​</a></h1><p>Remix News (rmx.news) is a Central European news outlet covering politics in Poland, <a href="/entities/hungary">Hungary</a>, and the wider region from a conservative perspective.[1]</p><p>In August 2023 Remix News reported that a company backed by the Soros Economic Development Fund had taken control of two major Polish newspapers — the daily Rzeczpospolita and the financial daily Parkiet — raising concerns about media bias given <a href="/entities/george-soros">George Soros</a>&#39;s progressive politics.[1] The outlet reported that Polish owner Grzegorz Hajdarowicz sold a large share of his stake in <a href="/entities/gremi-media">Gremi Media</a> to the Dutch company <a href="/entities/pluralis">Pluralis</a>, completing a 2021 deal and leaving Pluralis with 57 percent of the shares and control of the company.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/remix-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const remixNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  remixNews as default
};
