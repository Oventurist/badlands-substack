import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BuzzFeed","description":"","frontmatter":{"title":"BuzzFeed","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","digital-media","steele-dossier","fake-news"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/buzzfeed.md","filePath":"entities/buzzfeed.md","lastUpdated":null}');
const _sfc_main = { name: "entities/buzzfeed.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="buzzfeed" tabindex="-1">BuzzFeed <a class="header-anchor" href="#buzzfeed" aria-label="Permalink to &quot;BuzzFeed&quot;">​</a></h1><p>BuzzFeed is an American digital media company whose news division, BuzzFeed News, was closed in 2023.</p><h2 id="the-steele-dossier" tabindex="-1">The Steele Dossier <a class="header-anchor" href="#the-steele-dossier" aria-label="Permalink to &quot;The Steele Dossier&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> identifies BuzzFeed as &quot;the outlet responsible for breaking the Steele Dossier,&quot; which the article characterizes as &quot;one of the most notorious instances of fake news.&quot; The 2017 publication of the unverified dossier alleging ties between <a href="/entities/donald-trump">Donald Trump</a> and Russia is treated in the corpus as a defining example of the corporate press circulating establishment-sourced material without verification.</p><h2 id="closure-of-the-news-division" tabindex="-1">Closure of the news division <a class="header-anchor" href="#closure-of-the-news-division" aria-label="Permalink to &quot;Closure of the news division&quot;">​</a></h2><p>The article notes that BuzzFeed &quot;completely abolished its news division&quot; in 2023, citing <em>New York Times</em> coverage of the shutdown. In the TikTok address quoted in the source, <a href="/entities/taylor-lorenz">Taylor Lorenz</a> lists BuzzFeed News among the &quot;major media companies&quot; that &quot;have completely shuttered their news operations,&quot; placing it at the head of the broader collapse of the digital media ecosystem in which millennial journalists built their careers.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/buzzfeed.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const buzzfeed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  buzzfeed as default
};
