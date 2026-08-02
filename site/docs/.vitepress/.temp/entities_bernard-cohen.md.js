import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bernard C. Cohen","description":"","frontmatter":{"title":"Bernard C. Cohen","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","political-scientist","agenda-setting","media-theory"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/bernard-cohen.md","filePath":"entities/bernard-cohen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bernard-cohen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bernard-c-cohen" tabindex="-1">Bernard C. Cohen <a class="header-anchor" href="#bernard-c-cohen" aria-label="Permalink to &quot;Bernard C. Cohen&quot;">​</a></h1><p>Bernard C. Cohen was an American political scientist whose 1963 book <em>The Press and Foreign Policy</em> supplied one of the foundational formulations of agenda-setting theory.</p><h2 id="the-agenda-setting-quotation" tabindex="-1">The agenda-setting quotation <a class="header-anchor" href="#the-agenda-setting-quotation" aria-label="Permalink to &quot;The agenda-setting quotation&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> quotes Cohen&#39;s best-known line: &quot;The press may not be successful much of the time in telling people what to think, but it is stunningly successful in telling its readers what to think about.&quot;</p><p><a href="/entities/ryan-delarme">Ryan DeLarme</a> uses the observation to explain how <a href="/concepts/mainstream-media">centralized media</a> exercised influence throughout the twentieth century — &quot;The MSM was very successful in shepherding Americas attention for the better part of the 20th century&quot; — and to frame his argument that the constant redirection of public attention from one issue to another is itself a form of control, leaving audiences too exhausted to address &quot;the rot within our own government.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bernard-cohen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bernardCohen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bernardCohen as default
};
