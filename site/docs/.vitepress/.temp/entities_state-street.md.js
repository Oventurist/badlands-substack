import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"State Street","description":"","frontmatter":{"title":"State Street","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["asset-manager","finance","media-ownership","institutional-investor"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/state-street.md","filePath":"entities/state-street.md","lastUpdated":null}');
const _sfc_main = { name: "entities/state-street.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="state-street" tabindex="-1">State Street <a class="header-anchor" href="#state-street" aria-label="Permalink to &quot;State Street&quot;">​</a></h1><p>State Street Corporation is a major American financial services and asset management firm, and one of the &quot;Big Three&quot; index fund managers alongside <a href="/entities/blackrock">BlackRock</a> and <a href="/entities/vanguard-group">Vanguard</a>.</p><h2 id="role-in-the-media-ownership-argument" tabindex="-1">Role in the media ownership argument <a class="header-anchor" href="#role-in-the-media-ownership-argument" aria-label="Permalink to &quot;Role in the media ownership argument&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> lists State Street among the world&#39;s largest institutional investors whose overlapping holdings in <a href="/entities/time-warner">Time Warner</a>, <a href="/entities/comcast">Comcast</a>, <a href="/entities/walt-disney-company">Disney</a>, <a href="/entities/sony">Sony</a>, <a href="/entities/paramount-global">Paramount Global</a> and <a href="/entities/news-corp">NewsCorp</a> mean that the apparent rivalry between mainstream outlets conceals a common ownership structure. The article connects these firms to elite policy bodies including the <a href="/entities/council-on-foreign-relations">Council on Foreign Relations</a> and the <a href="/entities/world-economic-forum">World Economic Forum</a>, concluding that the Big Six operate as the propaganda arm of a single establishment.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/state-street.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stateStreet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stateStreet as default
};
