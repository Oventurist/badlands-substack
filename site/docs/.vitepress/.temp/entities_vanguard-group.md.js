import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vanguard Group","description":"","frontmatter":{"title":"Vanguard Group","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["asset-manager","finance","media-ownership","institutional-investor"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/vanguard-group.md","filePath":"entities/vanguard-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vanguard-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vanguard-group" tabindex="-1">Vanguard Group <a class="header-anchor" href="#vanguard-group" aria-label="Permalink to &quot;Vanguard Group&quot;">​</a></h1><p>The Vanguard Group is one of the largest asset managers in the world, best known for its index funds.</p><h2 id="role-in-the-media-ownership-argument" tabindex="-1">Role in the media ownership argument <a class="header-anchor" href="#role-in-the-media-ownership-argument" aria-label="Permalink to &quot;Role in the media ownership argument&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> names Vanguard, alongside <a href="/entities/blackrock">BlackRock</a>, <a href="/entities/state-street">State Street</a> and <a href="/entities/berkshire-hathaway">Berkshire Hathaway</a>, as one of the institutional investors that hold overlapping stakes in all six of the conglomerates that dominate <a href="/concepts/mainstream-media">centralized media</a>. The article uses this common ownership to argue that competition among the Big Six is superficial and that their news divisions ultimately answer to the same financial interests, whose representatives it describes as fixtures of the <a href="/entities/council-on-foreign-relations">Council on Foreign Relations</a> and the <a href="/entities/world-economic-forum">World Economic Forum</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vanguard-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vanguardGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vanguardGroup as default
};
