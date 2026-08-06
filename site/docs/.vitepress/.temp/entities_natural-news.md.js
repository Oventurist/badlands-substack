import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Natural News","description":"","frontmatter":{"title":"Natural News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","alternative-media","health","food"],"sources":["raw/badlands-news-brief-070.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/natural-news.md","filePath":"entities/natural-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/natural-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="natural-news" tabindex="-1">Natural News <a class="header-anchor" href="#natural-news" aria-label="Permalink to &quot;Natural News&quot;">​</a></h1><p>Natural News is an alternative health and news website whose reporting is periodically aggregated by <a href="/entities/badlands-media">Badlands Media</a> in its news briefs.[1]</p><h2 id="coverage-of-lab-grown-meat" tabindex="-1">Coverage of lab-grown meat <a class="header-anchor" href="#coverage-of-lab-grown-meat" aria-label="Permalink to &quot;Coverage of lab-grown meat&quot;">​</a></h2><p>In April 2023, Natural News reported on the <a href="/entities/food-and-drug-administration">FDA</a>&#39;s approval of cultivated chicken meat under the headline &quot;Lab-made chicken meat grown from CANCER CELLS receives FDA approval – are you ready to eat TUMOR nuggets?&quot;[1] The article described the FDA as a &quot;corrupt federal regulatory agency,&quot; noted that two products — from <a href="/entities/upside-foods">Upside Foods</a> and <a href="/entities/good-meat">GOOD Meat</a> — had been green-lit, and explained that Upside Foods harvests cells from live animals and chicken tissue to grow meat in stainless-steel bioreactors.[1] It cited the agency&#39;s statement that it had &quot;no further questions&quot; about safety and Commissioner <a href="/entities/robert-califf">Robert M. Califf</a>&#39;s declaration that the product was safe to eat.[1]</p><h2 id="editorial-posture" tabindex="-1">Editorial posture <a class="header-anchor" href="#editorial-posture" aria-label="Permalink to &quot;Editorial posture&quot;">​</a></h2><p>The outlet&#39;s framing is characteristically adversarial toward federal food and health regulators, treating regulatory clearance as evidence of capture rather than of safety.[1] That framing aligned with the accompanying Badlands commentary from <a href="/entities/american-hypnotist">American Hypnotist</a> on the state of the food supply.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sudan Spirals, Epstein Entraps &amp; Banks Bail&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-070" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-070</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/natural-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const naturalNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  naturalNews as default
};
