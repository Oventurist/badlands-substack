import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Progressive Slovakia","description":"","frontmatter":{"title":"Progressive Slovakia","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["slovakia","political-party","populism","george-soros"],"sources":["raw/badlands-news-brief-7c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/progressive-slovakia.md","filePath":"entities/progressive-slovakia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/progressive-slovakia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="progressive-slovakia" tabindex="-1">Progressive Slovakia <a class="header-anchor" href="#progressive-slovakia" aria-label="Permalink to &quot;Progressive Slovakia&quot;">​</a></h1><p>Progressive Slovakia (PS) is a Slovak political party founded in 2017 to oppose what its founders described as the rise of right-wing populism.[1] <a href="/entities/zuzana-caputova">Zuzana Čaputová</a>, later President of <a href="/entities/slovakia">Slovakia</a>, was among its founders after some sixteen years working for <a href="/entities/george-soros">George Soros</a>&#39;s <a href="/entities/open-society-foundations">Open Society Foundation</a>.[1]</p><h2 id="_2023-election-and-fico" tabindex="-1">2023 election and Fico <a class="header-anchor" href="#_2023-election-and-fico" aria-label="Permalink to &quot;2023 election and Fico&quot;">​</a></h2><p>The party&#39;s leader, <a href="/entities/michal-simecka">Michal Šimečka</a>, was defeated by <a href="/entities/robert-fico">Robert Fico</a> in the October 2023 Slovak parliamentary election.[1] CNN&#39;s coverage of that election quoted Šimečka saying his party would do &quot;everything it could&quot; to prevent Fico from governing — a quotation Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> highlighted as significant in light of the May 2024 assassination attempt against Fico.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump’s Defense Rests, but the Info War Accelerates&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/progressive-slovakia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const progressiveSlovakia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  progressiveSlovakia as default
};
