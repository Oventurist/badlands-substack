import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Myong Joun","description":"","frontmatter":{"title":"Myong Joun","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","federal-court","massachusetts","department-of-education"],"sources":["raw/badlands-news-brief-1e6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/myong-joun.md","filePath":"entities/myong-joun.md","lastUpdated":null}');
const _sfc_main = { name: "entities/myong-joun.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="myong-joun" tabindex="-1">Myong Joun <a class="header-anchor" href="#myong-joun" aria-label="Permalink to &quot;Myong Joun&quot;">​</a></h1><p>Myong Joun is a U.S. District Judge in Massachusetts.[1]</p><h2 id="department-of-education-reduction-in-force-order" tabindex="-1">Department of Education reduction-in-force order <a class="header-anchor" href="#department-of-education-reduction-in-force-order" aria-label="Permalink to &quot;Department of Education reduction-in-force order&quot;">​</a></h2><p>In May 2025, Judge Joun issued an order requiring the <a href="/entities/department-of-education">Department of Education</a> to reinstate nearly 1,400 employees who had been fired earlier that year as part of the department&#39;s effort to reduce the size of its workforce.[1] In his ruling he concluded that the <a href="/entities/trump-administration">Trump administration</a>&#39;s &quot;true intention is to effectively dismantle the Department,&quot; even though in his view it lacked the power to do so.[1]</p><p>The <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> granted the administration&#39;s request to temporarily pause Joun&#39;s order on Monday, July 14, 2025, in a brief unsigned ruling, clearing the way for the workforce reduction to proceed.[1] The underlying dispute had begun shortly after the department&#39;s March 11 announcement of a reduction in force involving 1,378 employees.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Grand Conspiracies &amp; Massive Reductions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1e6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1e6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/myong-joun.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myongJoun = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  myongJoun as default
};
