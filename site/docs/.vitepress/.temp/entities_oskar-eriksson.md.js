import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Oskar Eriksson","description":"","frontmatter":{"title":"Oskar Eriksson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["curling","sweden","olympics","athlete"],"sources":["raw/badlands-brief-e9a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/oskar-eriksson.md","filePath":"entities/oskar-eriksson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/oskar-eriksson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oskar-eriksson" tabindex="-1">Oskar Eriksson <a class="header-anchor" href="#oskar-eriksson" aria-label="Permalink to &quot;Oskar Eriksson&quot;">​</a></h1><p>Oskar Eriksson is a Swedish curler who competed at the <a href="/concepts/2026-winter-olympics">2026 Winter Olympics</a> and triggered the Games&#39; most widely discussed officiating dispute.[1]</p><p>During Sweden&#39;s 8–6 men&#39;s round-robin loss to Canada, Eriksson alleged that Canadian third <a href="/entities/marc-kennedy">Marc Kennedy</a> had touched his stone after release, a violation that under <a href="/entities/world-curling">World Curling</a> rules leads to removal of the stone.[1] After Kennedy denied the accusation profanely, Eriksson responded that he would show video after the game demonstrating the touch occurred &quot;two meters over the hog line.&quot;[1]</p><p>Commentators reported that the Swedish team, frustrated by what it viewed as serial double-touching by the Canadians, had effectively set up a surveillance effort to document the infractions, and that other teams shared Sweden&#39;s frustration.[1] Canada subsequently accused the Swedes of improperly recording violations inside the arena.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/oskar-eriksson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oskarEriksson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oskarEriksson as default
};
