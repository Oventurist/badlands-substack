import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tyler Cherry","description":"","frontmatter":{"title":"Tyler Cherry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["biden-administration","white-house","dei","media-matters"],"sources":["raw/badlands-news-brief-322.md"],"confidence":"low"},"headers":[],"relativePath":"entities/tyler-cherry.md","filePath":"entities/tyler-cherry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tyler-cherry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tyler-cherry" tabindex="-1">Tyler Cherry <a class="header-anchor" href="#tyler-cherry" aria-label="Permalink to &quot;Tyler Cherry&quot;">​</a></h1><p>Tyler Cherry is a communications staffer hired by the Biden administration in June 2024 as Associate Communications Director, a hire that drew immediate criticism over previously posted social media content.[1]</p><p>Reporting by Modernity News, aggregated as a bonus item in the Badlands News Brief for June 24, 2024, said that shortly after the hire was announced it emerged that Cherry had a history of posts disparaging white people, comparing police officers to &quot;slave patrols&quot; and &quot;lynch mobs,&quot; and calling for ICE to be abolished — posts that were subsequently deleted.[1] The account noted that Cherry holds a degree in gender studies and previously worked for Media Matters, and framed the appointment as a DEI hire by the <a href="/entities/joe-biden">Biden</a> administration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;We Have the Source ... And the Sauce&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-322" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-322</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tyler-cherry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tylerCherry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tylerCherry as default
};
