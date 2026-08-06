import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Denver District Court","description":"","frontmatter":{"title":"Denver District Court","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colorado","judiciary","courts","fourteenth-amendment"],"sources":["raw/badlands-news-brief-356.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/denver-district-court.md","filePath":"entities/denver-district-court.md","lastUpdated":null}');
const _sfc_main = { name: "entities/denver-district-court.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="denver-district-court" tabindex="-1">Denver District Court <a class="header-anchor" href="#denver-district-court" aria-label="Permalink to &quot;Denver District Court&quot;">​</a></h1><p>Denver District Court is the Colorado state trial court that heard the 2023 case over whether former president <a href="/entities/donald-trump">Donald Trump</a> could appear on Colorado&#39;s ballot for the 2024 presidential election.[1]</p><h2 id="the-fourteenth-amendment-ballot-trial" tabindex="-1">The Fourteenth Amendment ballot trial <a class="header-anchor" href="#the-fourteenth-amendment-ballot-trial" aria-label="Permalink to &quot;The Fourteenth Amendment ballot trial&quot;">​</a></h2><p>The trial opened on a Monday in Denver District Court, brought by a group of Republican and unaffiliated voters who teamed with a liberal organization to argue that Trump is ineligible to hold office under the disqualification clause of the <a href="/concepts/fourteenth-amendment">Fourteenth Amendment</a>.[1] Trump&#39;s campaign countered that his role in the January 6 riot was limited to constitutionally protected political speech.[1] The hearing was expected to last the entire week, with Judge Sarah B. Wallace to issue a written ruling afterwards; neither side expected the suit to end at the trial level, and appeal — possibly all the way to the <a href="/entities/supreme-court-of-the-united-states">U.S. Supreme Court</a> — was considered likely.[1]</p><p>The court operated an expanded media coverage arrangement governing who could record or stream proceedings, an arrangement that became an issue when petitioners&#39; attorney Eric Olson told Judge Wallace that an unauthorized livestream of the hearing was underway.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kash Unleashed, Zelensky Abandoned &amp; Trump Championed&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-356" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-356</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/denver-district-court.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const denverDistrictCourt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  denverDistrictCourt as default
};
