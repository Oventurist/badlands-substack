import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stellantis","description":"","frontmatter":{"title":"Stellantis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["automotive","detroit-three","labor"],"sources":["raw/badlands-news-brief-627.md","raw/badlands-news-brief-71f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stellantis.md","filePath":"entities/stellantis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stellantis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stellantis" tabindex="-1">Stellantis <a class="header-anchor" href="#stellantis" aria-label="Permalink to &quot;Stellantis&quot;">​</a></h1><p>Stellantis is the multinational automaker that owns Chrysler and is counted among the Detroit Three alongside <a href="/entities/ford-motor-company">Ford Motor</a> and <a href="/entities/general-motors">General Motors</a>.[1]</p><p>During the <a href="/concepts/2023-united-auto-workers-strike">2023 United Auto Workers strike</a>, Stellantis was one of the three companies whose U.S. assembly plants were targeted by the union&#39;s coordinated walkout, and its representatives resumed negotiations with the <a href="/entities/united-auto-workers">UAW</a> on September 16, 2023.[1] Company officials said the same weekend that a proposal to resume work at an idled Illinois factory had fallen through.[1]</p><h2 id="response-to-the-2025-tariffs" tabindex="-1">Response to the 2025 tariffs <a class="header-anchor" href="#response-to-the-2025-tariffs" aria-label="Permalink to &quot;Response to the 2025 tariffs&quot;">​</a></h2><p>Stellantis was among the first multinational manufacturers to react operationally to President <a href="/entities/donald-trump">Donald Trump</a>&#39;s <a href="/concepts/liberation-day-tariffs">&quot;Liberation Day&quot; tariffs</a> in April 2025, announcing that it would temporarily lay off US workers and close plants in Canada and Mexico as businesses raced to adjust to the new duty schedule.[2] Its retrenchment contrasted with <a href="/entities/general-motors">General Motors</a>, which said it would instead increase US production.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kennedy Assassins, Justice Wins &amp; More&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-627" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-627</a></li><li>Badlands Brief — &quot;Badlands News Brief: Orange Friday, Election Action, &amp; McKinsey&#39;s Gives Advice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-71f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-71f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stellantis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stellantis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stellantis as default
};
