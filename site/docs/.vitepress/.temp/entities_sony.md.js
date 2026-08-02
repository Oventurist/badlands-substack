import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sony","description":"","frontmatter":{"title":"Sony","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["conglomerate","media","big-six","corporate"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/sony.md","filePath":"entities/sony.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sony.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sony" tabindex="-1">Sony <a class="header-anchor" href="#sony" aria-label="Permalink to &quot;Sony&quot;">​</a></h1><p>Sony is a Japanese multinational conglomerate whose entertainment arm includes Sony Pictures and Sony Music.</p><h2 id="role-in-the-big-six" tabindex="-1">Role in the Big Six <a class="header-anchor" href="#role-in-the-big-six" aria-label="Permalink to &quot;Role in the Big Six&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> names Sony as one of the six conglomerates that dominated mainstream media across broadcast, print, internet, radio and film as of 2017, alongside <a href="/entities/time-warner">Time Warner</a>, <a href="/entities/comcast">Comcast</a>, <a href="/entities/walt-disney-company">Disney</a>, National Amusements (now <a href="/entities/paramount-global">Paramount Global</a>) and <a href="/entities/news-corp">NewsCorp</a>. The article&#39;s larger argument is that these firms are less rivals than co-owned components of a single <a href="/concepts/mainstream-media">centralized media</a> system whose ultimate shareholders are the major institutional asset managers.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sony.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sony = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sony as default
};
