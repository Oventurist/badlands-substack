import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gary Webb","description":"","frontmatter":{"title":"Gary Webb","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","journalist","investigative-journalism","cia"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/gary-webb.md","filePath":"entities/gary-webb.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gary-webb.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gary-webb" tabindex="-1">Gary Webb <a class="header-anchor" href="#gary-webb" aria-label="Permalink to &quot;Gary Webb&quot;">​</a></h1><p>Gary Webb was an American investigative journalist best known for the &quot;Dark Alliance&quot; series linking the Nicaraguan Contra network to cocaine trafficking into the United States.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> invokes Webb, alongside <a href="/entities/julian-assange">Julian Assange</a>, as the standard against which contemporary corporate journalists are measured and found wanting. The article states that <a href="/entities/taylor-lorenz">Taylor Lorenz</a> &quot;has never challenged or exposed any consequential lies, dark secrets, or corruption in the <a href="/entities/cia">CIA</a>, the <a href="/entities/fbi">FBI</a>, Wall Street or the <a href="/concepts/military-industrial-complex">military industrial complex</a> like Julian Assange or Gary Webb have,&quot; contrasting Webb&#39;s confrontation with the security state against what it characterizes as Lorenz&#39;s efforts to get people cancelled over language.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gary-webb.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const garyWebb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  garyWebb as default
};
