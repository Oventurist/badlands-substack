import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"New York University","description":"","frontmatter":{"title":"New York University","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["education","protests","israel-hamas-war","campus-activism"],"sources":["raw/badlands-news-brief-08a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/new-york-university.md","filePath":"entities/new-york-university.md","lastUpdated":null}');
const _sfc_main = { name: "entities/new-york-university.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="new-york-university" tabindex="-1">New York University <a class="header-anchor" href="#new-york-university" aria-label="Permalink to &quot;New York University&quot;">​</a></h1><p>New York University (NYU) is a private research university in Manhattan that saw one of the largest of the April 2024 pro-Palestinian campus encampments, following mass arrests at nearby <a href="/entities/columbia-university">Columbia University</a>.[1]</p><h2 id="april-2024-protest-and-arrests" tabindex="-1">April 2024 protest and arrests <a class="header-anchor" href="#april-2024-protest-and-arrests" aria-label="Permalink to &quot;April 2024 protest and arrests&quot;">​</a></h2><p>An encampment set up by NYU students swelled to hundreds of protesters over the course of Monday, April 22, 2024. The university said it warned the crowd to disperse and then called in police after the scene became disorderly and after the administration said it had learned of reports of &quot;intimidating chants and several antisemitic incidents.&quot; Officers began making arrests shortly after 8:30 p.m.[1]</p><p>NYU law student Byul Yoon criticized the administration&#39;s response, calling it &quot;a really outrageous crackdown by the university to allow the police to arrest students on our own campus.&quot;[1]</p><p>The NYU arrests were reported alongside similar actions at <a href="/entities/yale-university">Yale University</a> and the closure of Harvard Yard by <a href="/entities/harvard-university">Harvard University</a> as part of a coordinated institutional attempt to contain protests over Israel&#39;s war with <a href="/entities/hamas">Hamas</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Communist Ouroboros Accelerates&quot;, raw/badlands-news-brief-08a.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/new-york-university.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newYorkUniversity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newYorkUniversity as default
};
