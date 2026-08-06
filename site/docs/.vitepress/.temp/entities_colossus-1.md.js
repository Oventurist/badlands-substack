import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Colossus 1","description":"","frontmatter":{"title":"Colossus 1","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["artificial-intelligence","supercomputing","infrastructure"],"sources":["raw/badlands-brief-e15.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/colossus-1.md","filePath":"entities/colossus-1.md","lastUpdated":null}');
const _sfc_main = { name: "entities/colossus-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="colossus-1" tabindex="-1">Colossus 1 <a class="header-anchor" href="#colossus-1" aria-label="Permalink to &quot;Colossus 1&quot;">​</a></h1><p>Colossus 1 is a large-scale AI supercomputing system operated by <a href="/entities/spacexai">SpaceXAI</a> and designed for advanced model training and high-performance computing workloads.[1]</p><h2 id="anthropic-access-agreement" tabindex="-1">Anthropic access agreement <a class="header-anchor" href="#anthropic-access-agreement" aria-label="Permalink to &quot;Anthropic access agreement&quot;">​</a></h2><p>In May 2026, SpaceXAI signed an agreement giving <a href="/entities/anthropic">Anthropic</a> access to Colossus 1.[1] Anthropic stated the added capacity would expand performance and availability for its Claude Pro and Claude Max subscribers.[1] The parties also opened early discussions on potential collaboration in orbital AI compute infrastructure, including the possibility of multi-gigawatt systems deployed in space.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Intel Treason &amp; Insider Trading&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e15" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e15</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/colossus-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const colossus1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  colossus1 as default
};
