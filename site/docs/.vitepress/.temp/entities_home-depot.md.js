import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Home Depot","description":"","frontmatter":{"title":"Home Depot","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["retail","corporations","tariffs","trade"],"sources":["raw/badlands-news-brief-065.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/home-depot.md","filePath":"entities/home-depot.md","lastUpdated":null}');
const _sfc_main = { name: "entities/home-depot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="home-depot" tabindex="-1">Home Depot <a class="header-anchor" href="#home-depot" aria-label="Permalink to &quot;Home Depot&quot;">​</a></h1><p>Home Depot is a United States home-improvement retailer whose chief executive, Ted Decker, took part in an April 2025 <a href="/entities/white-house">White House</a> meeting on tariffs.[1]</p><p>On 21 April 2025 Decker met President <a href="/entities/donald-trump">Donald Trump</a> alongside <a href="/entities/walmart">Walmart</a> chief executive Doug McMillon and <a href="/entities/target">Target</a> chief executive Brian Cornell to discuss the effect of the administration&#39;s sweeping tariff plans on the retailers&#39; import-heavy business models.[1] Lowe&#39;s had been expected to send a representative but ultimately did not attend.[1] Following the meeting the three attending companies released nearly identical statements describing it as productive and welcoming the chance to share their insights with the president and his team.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Dye&#39;s Been Cast Out. The Round Table is Set.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-065" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-065</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/home-depot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeDepot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  homeDepot as default
};
