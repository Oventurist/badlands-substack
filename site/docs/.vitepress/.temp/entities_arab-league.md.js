import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Arab League","description":"","frontmatter":{"title":"Arab League","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["middle-east","international-organizations","arabia"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/arab-league.md","filePath":"entities/arab-league.md","lastUpdated":null}');
const _sfc_main = { name: "entities/arab-league.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="arab-league" tabindex="-1">Arab League <a class="header-anchor" href="#arab-league" aria-label="Permalink to &quot;Arab League&quot;">​</a></h1><p>The Arab League is the regional organisation of Arab nations formed in 1945. In the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> it serves a definitional rather than a political function: the author uses the current membership of the Arab League, together with the way the leaders of the 1916 Arab Revolt — King Hussein and his son Prince Faisal — defined the region, to draw the boundaries of &quot;Arabia&quot; on the reductive map of the Middle East he constructs for the article.</p><p>The map is presented as deliberately simplified and admittedly biased by the author&#39;s own course of study, but is offered as macro context for the essay&#39;s argument, with particular attention to the relative size of Arabia and its position as &quot;the natural geographic axis of the entire region.&quot; The article notes that any number of alternative regional schemes could be drawn, &quot;because all history is interpretation.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/arab-league.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const arabLeague = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  arabLeague as default
};
