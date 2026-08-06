import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alo Yoga","description":"","frontmatter":{"title":"Alo Yoga","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["apparel","celebrity","warehouse-labor","immigration"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alo-yoga.md","filePath":"entities/alo-yoga.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alo-yoga.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alo-yoga" tabindex="-1">Alo Yoga <a class="header-anchor" href="#alo-yoga" aria-label="Permalink to &quot;Alo Yoga&quot;">​</a></h1><p>Alo Yoga is an American athleisure brand whose warehouse labor practices featured in a November 2024 New York Times investigation into the use of undocumented migrant workers by corporate America.[1]</p><p>During the depths of the COVID-19 pandemic, sales at Alo Yoga surged as the brand&#39;s popularity exploded on social media: Kendall Jenner appeared on Instagram wearing its high-waist leggings, and Alessandra Ambrosio and Jennifer Lopez were also seen in Alo gear.[1] In a single year the business reportedly almost doubled, surpassing $1 billion.[1] Alo&#39;s sister company, Bella+Canvas — a wholesaler of basic apparel — also reached a milestone selling directly to consumers through its website.[1] To keep up, the two companies turned to a vast new distribution warehouse in Nevada.[1]</p><p>Staffing such facilities is difficult, and the investigation described corporate America&#39;s time-tested strategy of contracting with staffing agencies such as <a href="/entities/baronhr">BaronHR</a> that temporarily employ migrants, including some who entered the country illegally and are desperate for work.[1] One worker was reported to have been stationed in a V.I.P. section, packing Alo Yoga items for celebrities and social media influencers — a detail Badlands commentary flagged as tying the exploitation economy to Hollywood.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alo-yoga.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aloYoga = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aloYoga as default
};
