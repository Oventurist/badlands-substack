import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kellyanne Conway","description":"","frontmatter":{"title":"Kellyanne Conway","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","white-house","trump-administration","media"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/kellyanne-conway.md","filePath":"entities/kellyanne-conway.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kellyanne-conway.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kellyanne-conway" tabindex="-1">Kellyanne Conway <a class="header-anchor" href="#kellyanne-conway" aria-label="Permalink to &quot;Kellyanne Conway&quot;">​</a></h1><p>Kellyanne Conway is an American political strategist who managed <a href="/entities/donald-trump">Donald Trump</a>&#39;s 2016 campaign and served as Counselor to the President.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> refers to Conway in the course of its case against <a href="/entities/taylor-lorenz">Taylor Lorenz</a>, alleging that Lorenz &quot;tried to turn Kellyanne Conway&#39;s underage daughter into a left-wing celebrity to instigate a family feud.&quot; The article cites <em>Washington Examiner</em> commentary arguing that the media succeeded in forcing Conway out of the White House by elevating her distressed teenage daughter into a resistance figure. The episode is used to illustrate the author&#39;s claim that contemporary corporate journalism operates through personal destruction rather than institutional accountability.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kellyanne-conway.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kellyanneConway = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kellyanneConway as default
};
