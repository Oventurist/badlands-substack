import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Curling","description":"","frontmatter":{"title":"World Curling","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sports","governing-body","curling","olympics"],"sources":["raw/badlands-brief-e9a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/world-curling.md","filePath":"entities/world-curling.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-curling.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-curling" tabindex="-1">World Curling <a class="header-anchor" href="#world-curling" aria-label="Permalink to &quot;World Curling&quot;">​</a></h1><p>World Curling is the international governing body for the sport of curling, responsible for the competition rules applied at the Olympic Games, including the hog-line and &quot;double-touch&quot; delivery rules.[1]</p><h2 id="_2026-olympic-officiating-dispute" tabindex="-1">2026 Olympic officiating dispute <a class="header-anchor" href="#_2026-olympic-officiating-dispute" aria-label="Permalink to &quot;2026 Olympic officiating dispute&quot;">​</a></h2><p>During the <a href="/concepts/2026-winter-olympics">2026 Winter Olympics</a>, World Curling faced a controversy over enforcement of the rule barring a player from touching a stone after release, an infraction that requires removal of the stone.[1] After Swedish curler <a href="/entities/oskar-eriksson">Oskar Eriksson</a> accused Canadian third <a href="/entities/marc-kennedy">Marc Kennedy</a> of repeated double-touches, and after Canadian skip <a href="/entities/rachel-homan">Rachel Homan</a> had a stone removed in a match against Switzerland without video review, the body publicly acknowledged that umpires cannot visually monitor every delivery.[1]</p><p>World Curling clarified that although accredited Olympic Broadcasting Services personnel may film inside venues, the viral footage circulating on social media was not authorized, and stated that no violations had been recorded during designated umpire observation periods.[1] The organization issued a verbal warning to the Canadian delegation over Kennedy&#39;s on-ice language, stating that following the Friday evening session it had spoken with Canadian officials and made clear that further inappropriate behavior determined under rule R.19 would result in additional sanctions.[1]</p><p>As the dispute widened to include stone removals for other teams, such as the British men&#39;s squad, World Curling adjusted its officiating procedures by increasing the number of monitoring officials at subsequent matches.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-curling.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldCurling = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldCurling as default
};
