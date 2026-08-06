import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rosenblatt Securities","description":"","frontmatter":{"title":"Rosenblatt Securities","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","markets","tariffs","technology"],"sources":["raw/badlands-news-brief-71f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rosenblatt-securities.md","filePath":"entities/rosenblatt-securities.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rosenblatt-securities.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rosenblatt-securities" tabindex="-1">Rosenblatt Securities <a class="header-anchor" href="#rosenblatt-securities" aria-label="Permalink to &quot;Rosenblatt Securities&quot;">​</a></h1><p><strong>Rosenblatt Securities</strong> is a United States financial research and brokerage firm whose analysts produce cost and pricing projections for technology hardware, among other sectors.[1]</p><p>The firm entered coverage of the April 2025 trade dispute when its projections were cited in reporting on the consumer price impact of President <a href="/entities/donald-trump">Donald Trump</a>&#39;s sweeping <a href="/concepts/liberation-day-tariffs">&quot;Liberation Day&quot; tariffs</a>.[1] Based on Rosenblatt&#39;s estimates, Reuters reported that a high-end <a href="/entities/apple">Apple</a> iPhone could cost nearly $2,300 if Apple chose to pass the full cost of the new duties on to consumers.[1] That figure became one of the most widely repeated illustrations of the tariffs&#39; potential effect on American shoppers, alongside warnings about price increases for goods ranging from cannabis to running shoes.[1]</p><p>The projection circulated as the United States imposed a 10 percent baseline tariff on all imports plus higher targeted duties on major trading partners — the highest US trade barriers in more than a century — and as businesses raced to adjust their supply chains.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Orange Friday, Election Action, &amp; McKinsey&#39;s Gives Advice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-71f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-71f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rosenblatt-securities.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rosenblattSecurities = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rosenblattSecurities as default
};
