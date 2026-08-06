import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bob Bakish","description":"","frontmatter":{"title":"Bob Bakish","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","executives","paramount","mergers"],"sources":["raw/badlands-news-brief-07e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bob-bakish.md","filePath":"entities/bob-bakish.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bob-bakish.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bob-bakish" tabindex="-1">Bob Bakish <a class="header-anchor" href="#bob-bakish" aria-label="Permalink to &quot;Bob Bakish&quot;">​</a></h1><p>Bob Bakish is the chief executive officer of <a href="/entities/paramount-global">Paramount Global</a>.[1]</p><h2 id="_2023-merger-talks-with-warner-bros-discovery" tabindex="-1">2023 merger talks with Warner Bros. Discovery <a class="header-anchor" href="#_2023-merger-talks-with-warner-bros-discovery" aria-label="Permalink to &quot;2023 merger talks with Warner Bros. Discovery&quot;">​</a></h2><p>In December 2023, Bakish met with <a href="/entities/warner-bros-discovery">Warner Bros. Discovery</a> CEO <a href="/entities/david-zaslav">David Zaslav</a> at a lunch meeting in New York to discuss a potential merger of the two media companies, a conversation first reported by Axios and confirmed by <em>Variety</em>.[1] Zaslav separately spoke with Shari Redstone, whose National Amusements Inc. holds a controlling stake in Paramount Global.[1] Terms could not be learned, both companies enlisted bankers, and the status of the discussions was described as very preliminary; representatives of both firms declined to comment.[1]</p><p>As of the end of the third quarter, Paramount Global reported long-term debt of $15.6 billion, considerably less than WBD&#39;s $43.5 billion, though Paramount&#39;s market capitalization of $10.3 billion was well below WBD&#39;s $28.4 billion.[1] A merger would have combined assets across TV, film, sports and streaming, particularly the Paramount+ and Max services, to better compete with <a href="/entities/netflix">Netflix</a>, Disney+ and Hulu.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: MAGA Gets Branded as Biden Bungles Everything&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-07e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-07e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bob-bakish.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bobBakish = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bobBakish as default
};
