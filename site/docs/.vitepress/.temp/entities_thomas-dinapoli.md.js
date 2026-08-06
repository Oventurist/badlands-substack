import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thomas DiNapoli","description":"","frontmatter":{"title":"Thomas DiNapoli","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york","finance","wall-street","comptroller"],"sources":["raw/badlands-news-brief-03a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/thomas-dinapoli.md","filePath":"entities/thomas-dinapoli.md","lastUpdated":null}');
const _sfc_main = { name: "entities/thomas-dinapoli.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thomas-dinapoli" tabindex="-1">Thomas DiNapoli <a class="header-anchor" href="#thomas-dinapoli" aria-label="Permalink to &quot;Thomas DiNapoli&quot;">​</a></h1><p>Thomas DiNapoli is the New York State Comptroller.[1]</p><h2 id="_2024-wall-street-bonus-report" tabindex="-1">2024 Wall Street bonus report <a class="header-anchor" href="#_2024-wall-street-bonus-report" aria-label="Permalink to &quot;2024 Wall Street bonus report&quot;">​</a></h2><p>On March 26, 2025, DiNapoli reported that the average bonus paid to workers in New York City&#39;s securities industry rose 31.5 percent in 2024 to $244,700, while the sector&#39;s total bonus pool climbed 34 percent to an all-time high of $47.5 billion.[1]</p><p>DiNapoli noted that roughly one in 11 jobs in the nation&#39;s financial capital are directly or indirectly tied to the securities industry, which accounted for 19 percent of the state&#39;s tax collections in the most recent financial year — meaning the sector&#39;s success could benefit the state and its population broadly.[1] His office also reported that securities employment reached its highest annual level in at least three decades in 2024 at 201,500 workers, up from 198,400 the previous year and above the prior peak set in 2000.[1]</p><p>Commentators observed that with recession fears growing and average Americans still contending with persistent inflation, such payouts could intensify debates over corporate responsibility, taxation, and Wall Street&#39;s role in wealth concentration and economic inequality.[1] Badlands commentary asked whether &quot;security bro bonuses&quot; are a leading or lagging economic indicator for everyone else.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;SCOTUS and Subsidies, Banker Bonuses, and Six More Years of Lindsay Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-03a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-03a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/thomas-dinapoli.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thomasDinapoli = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thomasDinapoli as default
};
