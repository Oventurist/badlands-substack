import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dronegate","description":"","frontmatter":{"title":"Dronegate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["drones","faa","new-jersey","white-house","uap"],"sources":["raw/badlands-news-brief-7c9.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/dronegate.md","filePath":"concepts/dronegate.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/dronegate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dronegate" tabindex="-1">Dronegate <a class="header-anchor" href="#dronegate" aria-label="Permalink to &quot;Dronegate&quot;">​</a></h1><p>&quot;Dronegate&quot; is the popular label for the December 2024 wave of unexplained drone sightings over New Jersey and New York that sparked nationwide concern about potential threats from China and Russia.[1] See also the <a href="/concepts/2024-northeast-drone-sightings">2024 northeast drone sightings</a>.</p><h2 id="white-house-clarification" tabindex="-1">White House clarification <a class="header-anchor" href="#white-house-clarification" aria-label="Permalink to &quot;White House clarification&quot;">​</a></h2><p>At a press conference on Tuesday afternoon, January 28, 2025, White House Press Secretary <a href="/entities/karoline-leavitt">Karoline Leavitt</a> said the drones spotted over New Jersey and New York in December had been authorized by the <a href="/entities/federal-aviation-administration">Federal Aviation Administration</a> for &quot;research purposes.&quot;[1] &quot;After research and study, the drones flying over New Jersey in large numbers were authorized to be flown by the FAA for research and various other reasons. Many of these drones are hobbyist and recreational drones that enjoy flying drones,&quot; Leavitt said, adding: &quot;This was not the enemy.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Opposition Intensifies. So Does Winning.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7c9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7c9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/dronegate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dronegate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dronegate as default
};
