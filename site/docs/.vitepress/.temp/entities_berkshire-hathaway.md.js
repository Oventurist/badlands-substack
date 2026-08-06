import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Berkshire Hathaway","description":"","frontmatter":{"title":"Berkshire Hathaway","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","asset-management","media-ownership"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/berkshire-hathaway.md","filePath":"entities/berkshire-hathaway.md","lastUpdated":null}');
const _sfc_main = { name: "entities/berkshire-hathaway.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="berkshire-hathaway" tabindex="-1">Berkshire Hathaway <a class="header-anchor" href="#berkshire-hathaway" aria-label="Permalink to &quot;Berkshire Hathaway&quot;">​</a></h1><p>Berkshire Hathaway is an American holding company named by Badlands Media among the world&#39;s largest institutional investors whose stakes span the mainstream media conglomerates.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><p>Together with <a href="/entities/blackrock">BlackRock</a>, <a href="/entities/vanguard-group">the Vanguard Group</a> and <a href="/entities/state-street">State Street</a>, Berkshire Hathaway is presented as part of the ownership layer that renders the &quot;Big Six&quot; a single <a href="/concepts/centralized-media">centralized media</a> bloc rather than competing enterprises, with representatives of these firms described as regular fixtures at the <a href="/entities/council-on-foreign-relations">Council on Foreign Relations</a> and the <a href="/entities/world-economic-forum">World Economic Forum</a>.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Swan Song for the MSM&quot;, URL: <a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-swan-song-for-the-msm</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/berkshire-hathaway.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const berkshireHathaway = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  berkshireHathaway as default
};
