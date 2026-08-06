import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Goya Foods","description":"","frontmatter":{"title":"Goya Foods","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["business","food-industry","consumer-activism","culture-war"],"sources":["raw/badlands-news-brief-79c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/goya-foods.md","filePath":"entities/goya-foods.md","lastUpdated":null}');
const _sfc_main = { name: "entities/goya-foods.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="goya-foods" tabindex="-1">Goya Foods <a class="header-anchor" href="#goya-foods" aria-label="Permalink to &quot;Goya Foods&quot;">​</a></h1><p>Goya Foods is an American food company best known in political commentary for the consumer controversy that surrounded it in July 2020, when chief executive <a href="/entities/robert-unanue">Robert Unanue</a> publicly praised President <a href="/entities/donald-trump">Donald Trump</a> and provoked calls for a boycott from Trump&#39;s critics.[1]</p><p>Writing in the <a href="/entities/badlands-media">Badlands</a> News Brief, <a href="/entities/ashe-in-america">Ashe in America</a> described the Goya episode as the first occasion on which American conservatives discovered their collective market power.[1] Although Twitter posts pushing for a boycott outnumbered those urging consumers to buy more Goya products by 75 percent, net sales jumped 22 percent in the two weeks following the controversy, according to a study by the market research firm Numerator.[1] In this framing, Goya became the template for &quot;buycott&quot; behavior — deliberately purchasing from value-aligned businesses — that was later contrasted with the punitive boycotts of <a href="/entities/bud-light">Bud Light</a> and <a href="/entities/target-corporation">Target</a> during the <a href="/concepts/target-pride-collection-boycott">Target Pride collection backlash</a> of May 2023.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Target Tumbles, Trump Tops &amp; Feds Fabricate&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-79c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-79c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/goya-foods.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const goyaFoods = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  goyaFoods as default
};
