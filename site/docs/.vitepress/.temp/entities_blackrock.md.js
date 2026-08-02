import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BlackRock","description":"","frontmatter":{"title":"BlackRock","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["asset-manager","finance","media-ownership","institutional-investor"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/blackrock.md","filePath":"entities/blackrock.md","lastUpdated":null}');
const _sfc_main = { name: "entities/blackrock.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blackrock" tabindex="-1">BlackRock <a class="header-anchor" href="#blackrock" aria-label="Permalink to &quot;BlackRock&quot;">​</a></h1><p>BlackRock Inc. is the world&#39;s largest asset manager. In the Badlands Media corpus it appears as one of the institutional investors whose cross-holdings are said to unify the nominally competing media conglomerates.</p><h2 id="media-ownership-argument" tabindex="-1">Media ownership argument <a class="header-anchor" href="#media-ownership-argument" aria-label="Permalink to &quot;Media ownership argument&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> argues that while the &quot;Big Six&quot; media groups — <a href="/entities/time-warner">Time Warner</a>, <a href="/entities/comcast">Comcast</a>, <a href="/entities/walt-disney-company">Disney</a>, <a href="/entities/sony">Sony</a>, <a href="/entities/paramount-global">Paramount Global</a> and <a href="/entities/news-corp">NewsCorp</a> — appeared to compete, they &quot;were mutually owned by the world&#39;s largest institutional investors—asset managers like Blackrock Inc., <a href="/entities/vanguard-group">the Vanguard Group</a>, <a href="/entities/state-street">State Street</a> and <a href="/entities/berkshire-hathaway">Berkshire Hathaway</a>.&quot; The article supports this with links to publicly listed institutional holder data for each conglomerate.</p><p>It further asserts that representatives of these asset managers &quot;remain regular fixtures at elitist policy think tanks such as the <a href="/entities/council-on-foreign-relations">Council on Foreign Relations</a> and the <a href="/entities/world-economic-forum">World Economic Forum</a>,&quot; a connection the author uses to move from a claim about share ownership to a claim about coordinated narrative control by &quot;the big 1—the Western establishment, the system of systems.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/blackrock.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blackrock = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blackrock as default
};
