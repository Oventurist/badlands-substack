import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Council on Foreign Relations","description":"","frontmatter":{"title":"Council on Foreign Relations","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["think-tank","foreign-policy","establishment","elite-networks"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/council-on-foreign-relations.md","filePath":"entities/council-on-foreign-relations.md","lastUpdated":null}');
const _sfc_main = { name: "entities/council-on-foreign-relations.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="council-on-foreign-relations" tabindex="-1">Council on Foreign Relations <a class="header-anchor" href="#council-on-foreign-relations" aria-label="Permalink to &quot;Council on Foreign Relations&quot;">​</a></h1><p>The Council on Foreign Relations (CFR) is an American foreign policy think tank and membership organization based in New York. In the Badlands Media corpus it is treated as one of the institutional venues where the interests of finance, government and the press are coordinated.</p><h2 id="in-the-media-critique" tabindex="-1">In the media critique <a class="header-anchor" href="#in-the-media-critique" aria-label="Permalink to &quot;In the media critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> states that representatives of the asset managers that jointly own the major media conglomerates — <a href="/entities/blackrock">BlackRock</a>, <a href="/entities/vanguard-group">Vanguard</a>, <a href="/entities/state-street">State Street</a> and <a href="/entities/berkshire-hathaway">Berkshire Hathaway</a> — &quot;remain regular fixtures at elitist policy think tanks such as the Council on Foreign Relations and the <a href="/entities/world-economic-forum">World Economic Forum</a>.&quot; The article uses the CFR as shorthand for what it elsewhere calls &quot;the think tank class,&quot; the emissaries of which are said to tell mainstream journalists &quot;what to write and how to frame it,&quot; in contrast to the decentralized media where no such intermediaries exist.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/council-on-foreign-relations.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const councilOnForeignRelations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  councilOnForeignRelations as default
};
