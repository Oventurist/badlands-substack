import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Economic Council","description":"","frontmatter":{"title":"National Economic Council","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["white-house","economic-policy","tariffs"],"sources":["raw/badlands-news-brief-508.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-economic-council.md","filePath":"entities/national-economic-council.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-economic-council.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-economic-council" tabindex="-1">National Economic Council <a class="header-anchor" href="#national-economic-council" aria-label="Permalink to &quot;National Economic Council&quot;">​</a></h1><p>The National Economic Council (NEC) is the White House body responsible for coordinating domestic and international economic policy advice to the President.[1]</p><h2 id="role-in-the-2025-tariff-debate" tabindex="-1">Role in the 2025 tariff debate <a class="header-anchor" href="#role-in-the-2025-tariff-debate" aria-label="Permalink to &quot;Role in the 2025 tariff debate&quot;">​</a></h2><p>In April 2025 the NEC served as a principal public defender of President <a href="/entities/donald-trump">Donald Trump</a>&#39;s sweeping global tariffs after markets sold off sharply.[1] NEC Director <a href="/entities/kevin-hassett">Kevin Hassett</a> appeared on ABC&#39;s &quot;This Week&quot; on 6 April to argue that he did not expect a &quot;big effect on the consumer in the U.S.,&quot; noting that more than 50 countries were &quot;coming to the table&quot; to negotiate.[1] His defense came after the Dow Jones Industrial Average fell 2,200 points on the Friday and the S&amp;P 500 lost 10 percent over two days, with vulnerable House Republicans on the defensive over the economic fallout.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Treasury Triumphs, TikTok U-Turns, &amp; Trade War Time-Outs&quot;, raw/badlands-news-brief-508.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-economic-council.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalEconomicCouncil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalEconomicCouncil as default
};
