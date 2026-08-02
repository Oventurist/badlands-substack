import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Comcast","description":"","frontmatter":{"title":"Comcast","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["conglomerate","media","big-six","corporate"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/comcast.md","filePath":"entities/comcast.md","lastUpdated":null}');
const _sfc_main = { name: "entities/comcast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="comcast" tabindex="-1">Comcast <a class="header-anchor" href="#comcast" aria-label="Permalink to &quot;Comcast&quot;">​</a></h1><p>Comcast Corporation is an American telecommunications and media conglomerate, owner of NBCUniversal and therefore of <a href="/entities/nbc-news">NBC News</a> and <a href="/entities/msnbc">MSNBC</a>.</p><h2 id="role-in-the-big-six" tabindex="-1">Role in the Big Six <a class="header-anchor" href="#role-in-the-big-six" aria-label="Permalink to &quot;Role in the Big Six&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> lists Comcast as one of the six conglomerates that, as of 2017, &quot;lorded over all mainstream media, be it broadcast, print, internet, radio, or film,&quot; alongside <a href="/entities/time-warner">Time Warner</a>, <a href="/entities/walt-disney-company">Disney</a>, <a href="/entities/sony">Sony</a>, National Amusements (now <a href="/entities/paramount-global">Paramount Global</a>) and <a href="/entities/news-corp">NewsCorp</a>. The article argues that the appearance of competition among these firms is misleading because they share the same dominant institutional shareholders — <a href="/entities/blackrock">BlackRock</a>, <a href="/entities/vanguard-group">Vanguard</a>, <a href="/entities/state-street">State Street</a> and <a href="/entities/berkshire-hathaway">Berkshire Hathaway</a> — and cites publicly available holder data for Comcast (CMCSA) in support. On this reading Comcast is one component of the &quot;propaganda arm&quot; of a single Western establishment rather than an independent commercial actor.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/comcast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const comcast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  comcast as default
};
