import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Christina Koch","description":"","frontmatter":{"title":"Christina Koch","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["astronaut","nasa","artemis"],"sources":["raw/badlands-brief-282.md"],"confidence":"low"},"headers":[],"relativePath":"entities/christina-koch.md","filePath":"entities/christina-koch.md","lastUpdated":null}');
const _sfc_main = { name: "entities/christina-koch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="christina-koch" tabindex="-1">Christina Koch <a class="header-anchor" href="#christina-koch" aria-label="Permalink to &quot;Christina Koch&quot;">​</a></h1><p>Christina Koch is a <a href="/entities/nasa">NASA</a> astronaut serving as a mission specialist on <a href="/concepts/artemis-ii">Artemis II</a>, the first crewed lunar flyby since the Apollo program.[1] She repaired the Orion spacecraft&#39;s redesigned space toilet after its urine function went offline on day one of the mission, working with guidance from Mission Control.[1] The toilet reportedly failed again over the Easter 2026 weekend, drawing coverage that Badlands commentator <a href="/entities/ashe-in-america">Ashe in America</a> argued overshadowed the flyby itself.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Jesus Walks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-282" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-282</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/christina-koch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const christinaKoch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  christinaKoch as default
};
