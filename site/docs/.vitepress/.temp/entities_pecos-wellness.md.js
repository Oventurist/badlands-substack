import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pecos Wellness","description":"","frontmatter":{"title":"Pecos Wellness","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sponsor","supplements","badlands-media"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"low"},"headers":[],"relativePath":"entities/pecos-wellness.md","filePath":"entities/pecos-wellness.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pecos-wellness.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pecos-wellness" tabindex="-1">Pecos Wellness <a class="header-anchor" href="#pecos-wellness" aria-label="Permalink to &quot;Pecos Wellness&quot;">​</a></h1><p>Pecos Wellness is a supplement company introduced in September 2024 as a new sponsor of the Badlands Substack.[1]</p><p>The company offered the Badlands audience 10% off its Pecos Gold Resin supplement using the promo code &quot;Badlands,&quot; promoted through a banner linking to badlandsmedia.tv.[1] The sponsorship appeared at the top of the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> edition covering the news of Thursday, September 12, 2024, part of the reader-supported and sponsor-supported model by which <a href="/entities/badlands-media">Badlands Media</a> keeps its content free.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pecos-wellness.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pecosWellness = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pecosWellness as default
};
