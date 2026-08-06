import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wall Street Silver","description":"","frontmatter":{"title":"Wall Street Silver","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["social-media","finance","commentary"],"sources":["raw/badlands-news-brief-36a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/wall-street-silver.md","filePath":"entities/wall-street-silver.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wall-street-silver.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wall-street-silver" tabindex="-1">Wall Street Silver <a class="header-anchor" href="#wall-street-silver" aria-label="Permalink to &quot;Wall Street Silver&quot;">​</a></h1><p>Wall Street Silver is a financial and political commentary account on social media whose posts circulate widely in alternative-media and &quot;Truth Community&quot; circles.[1]</p><p>In August 2024, a Wall Street Silver post went viral for pointing out what it characterized as an obvious propaganda push behind the monkeypox coverage of the preceding weeks, coinciding with the <a href="/concepts/2024-mpox-global-health-emergency">2024 mpox global health emergency</a> declared by the <a href="/entities/world-health-organization">World Health Organization</a>.[1] The post prompted the anonymous researcher <a href="/entities/julians-rum">Julian&#39;s Rum</a> to resurface a 2020 <a href="/concepts/qanon">Q</a> drop about a last-minute change to the Democratic convention, linking it to contemporaneous calls by some officials to delay or cancel the <a href="/concepts/2024-democratic-national-convention">2024 Democratic National Convention</a> for public-health reasons.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Monkeypox ... For Real? And Other Info War Oddities&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-36a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-36a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wall-street-silver.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wallStreetSilver = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wallStreetSilver as default
};
