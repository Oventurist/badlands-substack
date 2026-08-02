import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chuck Schumer","description":"","frontmatter":{"title":"Chuck Schumer","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["congress","israel","democrats","regime-change"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/chuck-schumer.md","filePath":"entities/chuck-schumer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chuck-schumer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chuck-schumer" tabindex="-1">Chuck Schumer <a class="header-anchor" href="#chuck-schumer" aria-label="Permalink to &quot;Chuck Schumer&quot;">​</a></h1><p>Chuck Schumer is a United States Senator from New York who served as Senate Majority Leader. He appears in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> as evidence of American efforts to unseat <a href="/entities/benjamin-netanyahu">benjamin-netanyahu</a>.</p><p>The article cites Schumer&#39;s March 2024 call for new elections in <a href="/entities/israel">israel</a>, reported by NPR, describing it as &quot;essentially calling Netanyahu illegitimate.&quot; It groups the episode with the ongoing corruption probe against Netanyahu and <a href="/entities/usaid">usaid</a>-funded protests over judicial reform in 2023 as components of an attempted Israeli regime change that &quot;ended abruptly after October 7th.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chuck-schumer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chuckSchumer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chuckSchumer as default
};
