import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CNN","description":"","frontmatter":{"title":"CNN","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","cable-news","mainstream-media","media-criticism"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/cnn.md","filePath":"entities/cnn.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cnn.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cnn" tabindex="-1">CNN <a class="header-anchor" href="#cnn" aria-label="Permalink to &quot;CNN&quot;">​</a></h1><p>CNN is an American cable news network, historically part of <a href="/entities/time-warner">Time Warner</a>.</p><h2 id="in-the-badlands-critique" tabindex="-1">In the Badlands critique <a class="header-anchor" href="#in-the-badlands-critique" aria-label="Permalink to &quot;In the Badlands critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> argues that CNN, together with <a href="/entities/msnbc">MSNBC</a>, had been &quot;hemorrhaging viewers before Trump&quot; and was temporarily rescued by the 2016 election, when &quot;once-disinterested liberals became maniacally obsessed with politics in the age of &#39;the great tyrant&#39; <a href="/entities/donald-trump">Donald Trump</a>&quot; and flocked back to cable news. The article characterizes that recovery as a sugar high that inevitably waned.</p><p>It further charges CNN with a structural blind spot, noting that &quot;you won&#39;t see the corporate hacks at CNN reporting on things you might see on <a href="/entities/the-grayzone">The Grayzone</a> or <a href="/entities/consortium-news">Consortium News</a>,&quot; and places the network within a partisan duopoly with <a href="/entities/fox-news">Fox News</a> in which the two outlets are &quot;two heads on the same wretched snake.&quot; CNN&#39;s own business coverage is nonetheless cited by the article as a source for the January 2024 layoffs at <a href="/entities/time-magazine">Time Magazine</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cnn.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cnn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cnn as default
};
