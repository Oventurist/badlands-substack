import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Unanue","description":"","frontmatter":{"title":"Robert Unanue","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["business","executives","culture-war","consumer-activism"],"sources":["raw/badlands-news-brief-79c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-unanue.md","filePath":"entities/robert-unanue.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-unanue.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-unanue" tabindex="-1">Robert Unanue <a class="header-anchor" href="#robert-unanue" aria-label="Permalink to &quot;Robert Unanue&quot;">​</a></h1><p>Robert Unanue is the chief executive of <a href="/entities/goya-foods">Goya Foods</a>. In July 2020 he praised President <a href="/entities/donald-trump">Donald Trump</a>, a statement that prompted immediate calls for a boycott of Goya products from Trump&#39;s political opponents.[1]</p><p>The episode is cited in the <a href="/entities/badlands-media">Badlands</a> News Brief as the first clear demonstration of conservative consumer market power: despite boycott-supporting social media posts outnumbering supportive ones by 75 percent, Goya&#39;s net sales rose 22 percent in the two weeks after Unanue&#39;s remarks according to the market research firm Numerator.[1] Commentator <a href="/entities/ashe-in-america">Ashe in America</a> used the Unanue case as the positive counterpart to the punitive boycotts of <a href="/entities/bud-light">Bud Light</a> and <a href="/entities/target-corporation">Target</a> in 2023.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Target Tumbles, Trump Tops &amp; Feds Fabricate&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-79c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-79c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-unanue.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertUnanue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertUnanue as default
};
