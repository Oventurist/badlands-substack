import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Consortium News","description":"","frontmatter":{"title":"Consortium News","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","independent-media","investigative-journalism"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/consortium-news.md","filePath":"entities/consortium-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/consortium-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="consortium-news" tabindex="-1">Consortium News <a class="header-anchor" href="#consortium-news" aria-label="Permalink to &quot;Consortium News&quot;">​</a></h1><p>Consortium News is an independent investigative news site founded by the journalist Robert Parry, focused on U.S. foreign policy and intelligence matters.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> names Consortium News, together with <a href="/entities/the-grayzone">The Grayzone</a>, as representative of the decentralized media whose reporting has no counterpart in the corporate press: &quot;you won&#39;t see the corporate hacks at <a href="/entities/cnn">CNN</a> reporting on things you might see on The Grayzone or Consortium News.&quot; The pairing supports the article&#39;s claim that the apparent left–right divide within <a href="/concepts/mainstream-media">centralized media</a> conceals a shared set of forbidden subjects.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/consortium-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const consortiumNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  consortiumNews as default
};
