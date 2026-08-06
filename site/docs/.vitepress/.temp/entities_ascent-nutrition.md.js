import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ascent Nutrition","description":"","frontmatter":{"title":"Ascent Nutrition","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sponsor","supplements","badlands-media","pine-needle-extract"],"sources":["raw/badlands-news-brief-711.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ascent-nutrition.md","filePath":"entities/ascent-nutrition.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ascent-nutrition.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ascent-nutrition" tabindex="-1">Ascent Nutrition <a class="header-anchor" href="#ascent-nutrition" aria-label="Permalink to &quot;Ascent Nutrition&quot;">​</a></h1><p>Ascent Nutrition is a supplement company that became a sponsor of the <a href="/entities/badlands-media">Badlands Media</a> Substack in September 2024.[1]</p><h2 id="badlands-sponsorship" tabindex="-1">Badlands sponsorship <a class="header-anchor" href="#badlands-sponsorship" aria-label="Permalink to &quot;Badlands sponsorship&quot;">​</a></h2><p>The company was introduced to readers in the September 6, 2024 Badlands News Brief as a new sponsor of the Badlands Substack, reached through the referral link badlandsmedia.tv/ascent1.[1] Its introductory offer to the Badlands audience was 15% off its Pine Needle Extract using the promotional code &quot;Badlands,&quot; promoted through a banner placed at the top of the brief ahead of the news items.[1] The arrangement fits the outlet&#39;s stated funding model, in which content is always published free while paid subscriptions and sponsors support what it describes as a collective of citizen journalists working to take back the narrative from the mainstream media.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Not so Brief Full of Sovereign SIGNAL&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-711" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-711</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ascent-nutrition.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ascentNutrition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ascentNutrition as default
};
