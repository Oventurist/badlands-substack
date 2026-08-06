import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Phill Kline","description":"","frontmatter":{"title":"Phill Kline","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["attorney","2020-election","election-integrity","kansas"],"sources":["raw/badlands-news-brief-423.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/phill-kline.md","filePath":"entities/phill-kline.md","lastUpdated":null}');
const _sfc_main = { name: "entities/phill-kline.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="phill-kline" tabindex="-1">Phill Kline <a class="header-anchor" href="#phill-kline" aria-label="Permalink to &quot;Phill Kline&quot;">​</a></h1><p>Phill Kline is an American attorney who directs the <a href="/entities/amistad-project">Amistad Project</a> of the <a href="/entities/thomas-more-society">Thomas More Society</a>.[1]</p><p>Kline was the principal public voice for the project&#39;s post-2020 election claims regarding the <a href="/entities/united-states-postal-service">United States Postal Service</a>.[1] He stated that &quot;130,000 to 280,000 completed ballots for the 2020 general election were shipped from Bethpage, NY, to Lancaster, PA, where those ballots and the trailer in which they were shipped disappeared.&quot;[1] He presented sworn declarations alleging that over 300,000 ballots were at issue in Arizona, 548,000 in Michigan, 204,000 in Georgia and over 121,000 in Pennsylvania, and appeared alongside contract driver <a href="/entities/jesse-morgan">Jesse Morgan</a> at the December 2020 press conference where the allegations were made public.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gheyliens, Ukrainian Nazis &amp; Post Office Shenanigans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-423" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-423</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/phill-kline.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phillKline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phillKline as default
};
