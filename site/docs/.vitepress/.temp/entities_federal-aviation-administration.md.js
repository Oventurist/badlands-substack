import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Federal Aviation Administration","description":"","frontmatter":{"title":"Federal Aviation Administration","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["government-agency","aviation","regulation","safety"],"sources":["raw/a-mysterious-masterclass-in-multi.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/federal-aviation-administration.md","filePath":"entities/federal-aviation-administration.md","lastUpdated":null}');
const _sfc_main = { name: "entities/federal-aviation-administration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="federal-aviation-administration" tabindex="-1">Federal Aviation Administration <a class="header-anchor" href="#federal-aviation-administration" aria-label="Permalink to &quot;Federal Aviation Administration&quot;">​</a></h1><p>The Federal Aviation Administration (FAA) is the United States government agency responsible for regulating civil aviation, including airworthiness standards, air traffic control, and pilot certification and training standards.</p><p>In the <a href="/entities/badlands-media">Badlands Media</a> essay <a href="/concepts/a-mysterious-masterclass-in-multi">&quot;A Mysterious Masterclass in Multi Sensory Deception&quot;</a>, the FAA appears as the authoritative source for the definition of <a href="/concepts/spatial-disorientation">spatial disorientation</a>. The article quotes the agency&#39;s <em>Pilot&#39;s Handbook of Aeronautical Knowledge</em> (FAA-H-8083-25C), which describes the condition as &quot;a condition in which a pilot&#39;s perception of direction, altitude, or speed is misleading or incorrect, usually due to conflicting sensory information,&quot; arising when &quot;a pilot cannot accurately interpret their aircraft&#39;s position relative to the Earth.&quot;</p><p>The handbook&#39;s framing underpins the essay&#39;s central argument, developed alongside <a href="/entities/steven-kwast">General Steven Kwast</a>&#39;s flight-school anecdote, that trained reliance on instruments rather than instinct is a survival skill both in aviation and, by analogy, in the <a href="/concepts/information-war">information war</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-mysterious-masterclass-in-multi" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/federal-aviation-administration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const federalAviationAdministration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  federalAviationAdministration as default
};
