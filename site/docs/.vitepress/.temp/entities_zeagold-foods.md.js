import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zeagold Foods","description":"","frontmatter":{"title":"Zeagold Foods","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-zealand","food-supply","eggs","agriculture","fires"],"sources":["raw/badlands-news-brief-547.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/zeagold-foods.md","filePath":"entities/zeagold-foods.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zeagold-foods.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zeagold-foods" tabindex="-1">Zeagold Foods <a class="header-anchor" href="#zeagold-foods" aria-label="Permalink to &quot;Zeagold Foods&quot;">​</a></h1><p>Zeagold is New Zealand&#39;s largest egg producer. On Monday, February 6, 2023, a fire broke out at a Zeagold farm and killed approximately 75,000 hens. The company said the blaze had &quot;taken the better part of the day to contain,&quot; and that twelve workers on the site were &quot;unharmed but very distressed.&quot;[1]</p><p>The fire landed in the middle of a national egg shortage: prior to the blaze, New Zealand farmers had estimated that the country needed another 300,000 hens to meet demand, according to The Guardian.[1]</p><p>The incident was reported by Summit News as the latest in a run of major food suppliers going up in flames &quot;after decades of food suppliers not going up in flames,&quot; a framing that placed it alongside a growing list of U.S. food-processing plant fires.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor <a href="/entities/justin-deschamps">Justin Deschamps</a> treated the fire as one data point in what he described as a coordinated destabilization and controlled implosion of the economy. Citing <a href="/entities/martin-armstrong">Martin Armstrong</a> of Armstrong Economics, he argued that the true driver of hyperinflation and collapse is not money printing as such but a loss of confidence, and that 2023 would be the year decline accelerated. He noted that the <a href="/entities/federal-reserve">Federal Reserve</a> was raising rates even as confidence was being crushed by the housing downturn, supply-chain stress and the threat of wider war, and concluded that &quot;raising chickens seems like a really good idea right about now.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: State of Confusion, Kamala Mayhem &amp; Boiled Eggs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-547" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-547</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zeagold-foods.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zeagoldFoods = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zeagoldFoods as default
};
