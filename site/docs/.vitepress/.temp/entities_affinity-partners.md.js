import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Affinity Partners","description":"","frontmatter":{"title":"Affinity Partners","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["private-equity","jared-kushner","gulf-capital","electronic-arts"],"sources":["raw/badlands-news-brief-762.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/affinity-partners.md","filePath":"entities/affinity-partners.md","lastUpdated":null}');
const _sfc_main = { name: "entities/affinity-partners.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="affinity-partners" tabindex="-1">Affinity Partners <a class="header-anchor" href="#affinity-partners" aria-label="Permalink to &quot;Affinity Partners&quot;">​</a></h1><p>Affinity Partners is an investment firm whose founder and chief executive is <a href="/entities/jared-kushner">Jared Kushner</a>, the son-in-law of President <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><h2 id="electronic-arts-acquisition" tabindex="-1">Electronic Arts acquisition <a class="header-anchor" href="#electronic-arts-acquisition" aria-label="Permalink to &quot;Electronic Arts acquisition&quot;">​</a></h2><p>In September 2025 Affinity Partners joined <a href="/entities/silver-lake-partners">Silver Lake Partners</a> and Saudi Arabia&#39;s <a href="/entities/public-investment-fund">Public Investment Fund</a> in an agreement to purchase the video game publisher <a href="/entities/electronic-arts">Electronic Arts</a> for $55 billion, the largest private equity-funded buyout on record.[1] Stockholders were to receive $210 per share in cash, a 25 percent premium to the pre-rumour price, and the transaction required regulatory approval because of Saudi participation.[1] Commentary on the deal highlighted the tightness of the relationship between the Saudis and the Trump family in recent years, attributed in no small part to the Saudi-backed LIV Golf tour hosting events at Trump&#39;s clubs.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdowns, Shakedowns, &amp; Two Sexes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-762" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-762</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/affinity-partners.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const affinityPartners = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  affinityPartners as default
};
