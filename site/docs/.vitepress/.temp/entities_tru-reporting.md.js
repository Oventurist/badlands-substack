import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tru Reporting","description":"","frontmatter":{"title":"Tru Reporting","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","host","podcast"],"sources":["raw/badlands-media-show-schedule-c28.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tru-reporting.md","filePath":"entities/tru-reporting.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tru-reporting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tru-reporting" tabindex="-1">Tru Reporting <a class="header-anchor" href="#tru-reporting" aria-label="Permalink to &quot;Tru Reporting&quot;">​</a></h1><p>Tru Reporting is a pseudonymous host affiliated with <a href="/entities/badlands-media">Badlands Media</a>. He co-hosts the <strong>NCSWIC Podcast</strong> with <a href="/entities/absolute-1776">Absolute 1776</a>, airing Sundays at 7:30pm ET in the network&#39;s December 2022 schedule.[1]</p><p>The program takes a weekly deep dive into new <a href="/concepts/information-war">Info War</a> topics, framed around <a href="/concepts/fifth-generation-warfare">Fifth-Generation Warfare</a> and drawing on the hindsight and accumulated context that the hosts argue emerges over time.[1] Its title derives from the movement slogan &quot;Nothing Can Stop What Is Coming.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-c28" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-c28</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tru-reporting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const truReporting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  truReporting as default
};
