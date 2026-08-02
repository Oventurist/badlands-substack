import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Time Warner","description":"","frontmatter":{"title":"Time Warner","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["conglomerate","media","big-six","corporate"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/time-warner.md","filePath":"entities/time-warner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/time-warner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="time-warner" tabindex="-1">Time Warner <a class="header-anchor" href="#time-warner" aria-label="Permalink to &quot;Time Warner&quot;">​</a></h1><p>Time Warner was an American media conglomerate whose holdings included <a href="/entities/cnn">CNN</a>, HBO and Warner Bros.; it was acquired by AT&amp;T in 2018 and later spun off into Warner Bros. Discovery.</p><h2 id="role-in-the-big-six" tabindex="-1">Role in the Big Six <a class="header-anchor" href="#role-in-the-big-six" aria-label="Permalink to &quot;Role in the Big Six&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> lists Time Warner first among the six conglomerates that controlled nearly all mainstream media as of 2017, alongside <a href="/entities/comcast">Comcast</a>, <a href="/entities/walt-disney-company">Disney</a>, <a href="/entities/sony">Sony</a>, National Amusements (now <a href="/entities/paramount-global">Paramount Global</a>) and <a href="/entities/news-corp">NewsCorp</a>. The article cites institutional holder data for the AT&amp;T ticker (T) in the course of arguing that these ostensibly competing firms share the same dominant shareholders — <a href="/entities/blackrock">BlackRock</a>, <a href="/entities/vanguard-group">Vanguard</a>, <a href="/entities/state-street">State Street</a> and <a href="/entities/berkshire-hathaway">Berkshire Hathaway</a> — and therefore serve a common establishment interest.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/time-warner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timeWarner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timeWarner as default
};
