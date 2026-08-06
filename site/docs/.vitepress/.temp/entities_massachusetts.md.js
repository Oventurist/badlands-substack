import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Massachusetts","description":"","frontmatter":{"title":"Massachusetts","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["state","government","foster-care","religious-liberty"],"sources":["raw/badlands-news-brief-053.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/massachusetts.md","filePath":"entities/massachusetts.md","lastUpdated":null}');
const _sfc_main = { name: "entities/massachusetts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="massachusetts" tabindex="-1">Massachusetts <a class="header-anchor" href="#massachusetts" aria-label="Permalink to &quot;Massachusetts&quot;">​</a></h1><p>Massachusetts, formally the Commonwealth of Massachusetts, is a U.S. state whose foster-care licensing practices became the subject of a federal religious-liberty challenge in August 2023.[1]</p><h2 id="foster-care-controversy" tabindex="-1">Foster care controversy <a class="header-anchor" href="#foster-care-controversy" aria-label="Permalink to &quot;Foster care controversy&quot;">​</a></h2><p>The Commonwealth denied Mike and Kitty Burke, a Catholic couple, the ability to foster children on the basis of their conservative Catholic beliefs regarding marriage and gender, prompting the couple to sue state officials on August 8, 2023 in <a href="/concepts/burke-v-walsh">Burke v. Walsh</a>, represented by <a href="/entities/becket-law">Becket Law</a>.[1] At the time, the state faced a shortage of foster families, with over 1,500 children without placements.[1] The shortage was severe enough that the Commonwealth had resorted to housing children in hospitals for weeks on end, not because the children needed medical attention but because there was nowhere else to put them.[1] Commentators in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> characterized the denial as evidence that the state prioritized ideological conformity over placing children in stable homes.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pelosi&#39;s Panic, Nuland Narratives &amp; All&#39;s Fair in Lawfare&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-053" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-053</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/massachusetts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const massachusetts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  massachusetts as default
};
