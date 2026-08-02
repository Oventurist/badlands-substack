import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yuri Bezmenov","description":"","frontmatter":{"title":"Yuri Bezmenov","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["kgb","defector","ideological-subversion","communism","psy-op"],"sources":["raw/ai-can-help-us-expose-the-nwo.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/yuri-bezmenov.md","filePath":"entities/yuri-bezmenov.md","lastUpdated":null}');
const _sfc_main = { name: "entities/yuri-bezmenov.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yuri-bezmenov" tabindex="-1">Yuri Bezmenov <a class="header-anchor" href="#yuri-bezmenov" aria-label="Permalink to &quot;Yuri Bezmenov&quot;">​</a></h1><p>Yuri Bezmenov was a Soviet defector whose lectures on communist ideological subversion are a standard reference point in the Badlands Media corpus. He is described in <a href="/concepts/ai-can-help-us-expose-the-nwo">AI Can Help Us Expose the NWO</a> as a &quot;communist defector&quot; who explained how subversion of a target society is carried out not through open confrontation but gradually, across numerous generations.</p><p><a href="/entities/justin-deschamps">Justin Deschamps</a> invoked Bezmenov explicitly in the final refinement prompt of his <a href="/entities/chatgpt">ChatGPT</a> experiment, asking the model to &quot;expand the scope of this warfare including the multigenerational concept of communist warfare as described by communist defector Yuri Bezmenov&quot; and to map the resulting psychological warfare as something subtle and gradual, unfolding across generations so that a <a href="/concepts/new-world-order">New World Order</a> could be installed slowly over time. The AI&#39;s response duly framed the fictional Global Harmony Consortium&#39;s campaign as a decades-long programme of media capture, incremental legislative change, patient psychological manipulation and generational conditioning of activists.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/ai-can-help-us-expose-the-nwo" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/yuri-bezmenov.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yuriBezmenov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yuriBezmenov as default
};
