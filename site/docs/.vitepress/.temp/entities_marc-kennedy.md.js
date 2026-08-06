import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marc Kennedy","description":"","frontmatter":{"title":"Marc Kennedy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["curling","canada","olympics","athlete"],"sources":["raw/badlands-brief-e9a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/marc-kennedy.md","filePath":"entities/marc-kennedy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/marc-kennedy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marc-kennedy" tabindex="-1">Marc Kennedy <a class="header-anchor" href="#marc-kennedy" aria-label="Permalink to &quot;Marc Kennedy&quot;">​</a></h1><p>Marc Kennedy is a Canadian curler who competed as third for the Canadian men&#39;s team at the <a href="/concepts/2026-winter-olympics">2026 Winter Olympics</a>.[1]</p><h2 id="double-touch-accusation" tabindex="-1">Double-touch accusation <a class="header-anchor" href="#double-touch-accusation" aria-label="Permalink to &quot;Double-touch accusation&quot;">​</a></h2><p>During Canada&#39;s 8–6 men&#39;s round-robin victory over Sweden, Swedish curler <a href="/entities/oskar-eriksson">Oskar Eriksson</a> alleged that Kennedy had touched his stone after release, a &quot;double-touch&quot; violation that under <a href="/entities/world-curling">World Curling</a> rules requires removal of the stone.[1] Kennedy vehemently denied any wrongdoing and responded on the ice with profanity, telling Eriksson, &quot;I haven&#39;t done it once. You can fuck off,&quot; to which Eriksson replied that he would show video after the game in which the touch occurred &quot;two meters over the hog line.&quot;[1]</p><p>Kennedy later suggested his team may have been deliberately targeted in what he characterized as a planned effort to catch violations.[1] World Curling subsequently issued a verbal warning to Canadian officials regarding the language used by a Canadian men&#39;s player, noting that further inappropriate behavior under rule R.19 could bring additional sanctions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/marc-kennedy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marcKennedy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marcKennedy as default
};
