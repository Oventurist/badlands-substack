import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Internews","description":"","frontmatter":{"title":"Internews","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","ngo","usaid","information-war"],"sources":["raw/badlands-news-brief-7b8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/internews.md","filePath":"entities/internews.md","lastUpdated":null}');
const _sfc_main = { name: "entities/internews.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="internews" tabindex="-1">Internews <a class="header-anchor" href="#internews" aria-label="Permalink to &quot;Internews&quot;">​</a></h1><p>Internews is an international media-development nonprofit that has featured prominently in criticism of United States foreign-aid-funded media networks. In February 2025, <a href="/entities/wikileaks">WikiLeaks</a> published a widely circulated thread identifying Internews as the hub of a sprawling network of media outlets funded through <a href="/entities/usaid">USAID</a>.[1]</p><h2 id="wikileaks-allegations" tabindex="-1">WikiLeaks allegations <a class="header-anchor" href="#wikileaks-allegations" aria-label="Permalink to &quot;WikiLeaks allegations&quot;">​</a></h2><p>According to the WikiLeaks item republished in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>, Internews head <a href="/entities/jeanne-bourgault">Jeanne Bourgault</a> is &quot;secretly married&quot; to <a href="/entities/ray-jennings">Ray S. Jennings</a>, described as a high-profile regime-change specialist for USAID.[1] WikiLeaks stated that Bourgault paid herself $451,000 while telling her alma mater&#39;s alumni magazine that she goes to the office &quot;once or twice a month,&quot; and that Jennings had authored numerous papers recommending funding for his wife&#39;s methods.[1]</p><p>WikiLeaks further asserted that the relationship between Bourgault and Jennings appears to have only one obscure reference on the entire internet — a University of Washington alumni magazine feature titled &quot;Alumna brings an information revolution to the developing world&quot; — and that it had not been disclosed by USAID, Internews, or the 4,291 media outlets connected to the organization.[1] Badlands presented the item under the heading &quot;The Ultimate USAID Couple?&quot; as an example of undisclosed conflicts of interest inside the US-funded media ecosystem.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: MAHA, Modi, Musk, &amp; Munich&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7b8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7b8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/internews.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  internews as default
};
