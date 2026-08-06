import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SpaceXAI","description":"","frontmatter":{"title":"SpaceXAI","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["artificial-intelligence","compute","space","technology"],"sources":["raw/badlands-brief-e15.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/spacexai.md","filePath":"entities/spacexai.md","lastUpdated":null}');
const _sfc_main = { name: "entities/spacexai.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="spacexai" tabindex="-1">SpaceXAI <a class="header-anchor" href="#spacexai" aria-label="Permalink to &quot;SpaceXAI&quot;">​</a></h1><p>SpaceXAI is the artificial intelligence and computing venture that owns and operates the <a href="/entities/colossus-1">Colossus 1</a> supercomputing system.[1]</p><h2 id="anthropic-compute-agreement" tabindex="-1">Anthropic compute agreement <a class="header-anchor" href="#anthropic-compute-agreement" aria-label="Permalink to &quot;Anthropic compute agreement&quot;">​</a></h2><p>In May 2026, SpaceXAI signed an agreement with <a href="/entities/anthropic">Anthropic</a> to provide access to Colossus 1, a large-scale AI supercomputing system designed for advanced model training and high-performance computing workloads.[1] Anthropic said the additional compute capacity would be used to expand performance and availability for Claude Pro and Claude Max subscribers, increasing access to higher-end AI services powered by larger infrastructure resources.[1]</p><p>The agreement also included early discussions around potential collaboration on orbital AI compute infrastructure, with both companies exploring the possibility of multi-gigawatt systems in space.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Intel Treason &amp; Insider Trading&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e15" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e15</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/spacexai.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spacexai = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  spacexai as default
};
