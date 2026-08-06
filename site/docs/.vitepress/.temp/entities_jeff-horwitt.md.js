import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeff Horwitt","description":"","frontmatter":{"title":"Jeff Horwitt","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["polling","democratic-party","nbc-news"],"sources":["raw/badlands-news-brief-051.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jeff-horwitt.md","filePath":"entities/jeff-horwitt.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeff-horwitt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeff-horwitt" tabindex="-1">Jeff Horwitt <a class="header-anchor" href="#jeff-horwitt" aria-label="Permalink to &quot;Jeff Horwitt&quot;">​</a></h1><p>Jeff Horwitt is a Democratic pollster with <a href="/entities/hart-research-associates">Hart Research Associates</a>.[1]</p><p>Horwitt conducted the <a href="/concepts/november-2023-nbc-news-poll">November 2023 NBC News national poll</a> jointly with Republican pollster <a href="/entities/bill-mcinturff">Bill McInturff</a> of <a href="/entities/public-opinion-strategies">Public Opinion Strategies</a>.[1] Assessing the survey, which put President <a href="/entities/joe-biden">Joe Biden</a>&#39;s approval rating at a term-low 40%, Horwitt said: &quot;Joe Biden is at a uniquely low point in his presidency, and a significant part of this, especially within the Biden coalition, is due to how Americans are viewing his foreign policy actions.&quot;[1] The poll found the sharpest erosion among Democrats — a majority of whom believed Israel had gone too far militarily in Gaza — and among voters aged 18 to 34, 70% of whom disapproved of Biden&#39;s handling of the war.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Lawsuits Can Be Very Effective ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-051" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-051</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeff-horwitt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeffHorwitt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeffHorwitt as default
};
