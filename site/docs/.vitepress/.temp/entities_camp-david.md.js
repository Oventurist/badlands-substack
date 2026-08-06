import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Camp David","description":"","frontmatter":{"title":"Camp David","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["presidential-retreat","maryland","white-house","2024-election"],"sources":["raw/badlands-news-brief-565.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/camp-david.md","filePath":"entities/camp-david.md","lastUpdated":null}');
const _sfc_main = { name: "entities/camp-david.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="camp-david" tabindex="-1">Camp David <a class="header-anchor" href="#camp-david" aria-label="Permalink to &quot;Camp David&quot;">​</a></h1><p>Camp David is the country retreat of the President of the United States, located in a secluded rural setting in Maryland.[1] Its isolation makes it a customary venue for sensitive negotiations, extended staff work, and preparation for major public events away from press scrutiny.</p><h2 id="june-2024-debate-camp" tabindex="-1">June 2024 debate camp <a class="header-anchor" href="#june-2024-debate-camp" aria-label="Permalink to &quot;June 2024 debate camp&quot;">​</a></h2><p>On Thursday, June 20, 2024, President <a href="/entities/joe-biden">Joe Biden</a> entered Camp David to begin a full week of preparation for the first presidential debate of the 2024 campaign against former President <a href="/entities/donald-trump">Donald Trump</a>.[1] The retreat was used for intensive preparation and coaching in the days before the delegation traveled directly to the June 27 debate hosted by CNN in Atlanta.[1]</p><p>According to a campaign official, <a href="/entities/ron-klain">Ron Klain</a>, Biden&#39;s former chief of staff, led the debate camp preparations at the retreat, with other senior campaign aides and longtime advisers — including former White House aide and campaign co-chair Cedric Richmond — also on hand.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p><a href="/entities/badlands-media">Badlands Media</a> commentary treated the week-long Camp David encampment as an implicit admission of Biden&#39;s frailty, noting that Trump by contrast was approaching the debate as an ordinary campaign appearance.[1] Commentators also highlighted the debate&#39;s unusual format — hand-picked moderators, no live audience, and rumored seated candidates — as further evidence of an accommodation to the incumbent&#39;s condition.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Polling Paradoxes, Hegelian Seeding &amp; Putin&#39;s Gambit&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-565" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-565</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/camp-david.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const campDavid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  campDavid as default
};
