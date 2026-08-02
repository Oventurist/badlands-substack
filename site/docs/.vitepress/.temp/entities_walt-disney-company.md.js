import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Walt Disney Company","description":"","frontmatter":{"title":"Walt Disney Company","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["conglomerate","media","big-six","corporate"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/walt-disney-company.md","filePath":"entities/walt-disney-company.md","lastUpdated":null}');
const _sfc_main = { name: "entities/walt-disney-company.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="walt-disney-company" tabindex="-1">Walt Disney Company <a class="header-anchor" href="#walt-disney-company" aria-label="Permalink to &quot;Walt Disney Company&quot;">​</a></h1><p>The Walt Disney Company is an American entertainment conglomerate whose holdings include ABC News, ESPN and, following the 21st Century Fox acquisition, <a href="/entities/national-geographic">National Geographic</a>.</p><h2 id="role-in-the-big-six" tabindex="-1">Role in the Big Six <a class="header-anchor" href="#role-in-the-big-six" aria-label="Permalink to &quot;Role in the Big Six&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> identifies Disney as one of the six conglomerates that controlled nearly all mainstream broadcast, print, internet, radio and film output as of 2017, together with <a href="/entities/time-warner">Time Warner</a>, <a href="/entities/comcast">Comcast</a>, <a href="/entities/sony">Sony</a>, National Amusements (now <a href="/entities/paramount-global">Paramount Global</a>) and <a href="/entities/news-corp">NewsCorp</a>. The article cites shareholder data for Disney (DIS) as evidence that the group is substantially owned by the same asset managers — <a href="/entities/blackrock">BlackRock</a>, <a href="/entities/vanguard-group">Vanguard</a>, <a href="/entities/state-street">State Street</a> and <a href="/entities/berkshire-hathaway">Berkshire Hathaway</a> — that hold its nominal competitors, supporting its claim that the Big Six function collectively as the media arm of a single establishment.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/walt-disney-company.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const waltDisneyCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  waltDisneyCompany as default
};
