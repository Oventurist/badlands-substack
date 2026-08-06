import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Neal Froneman","description":"","frontmatter":{"title":"Neal Froneman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mining","south-africa","executives"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/neal-froneman.md","filePath":"entities/neal-froneman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/neal-froneman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="neal-froneman" tabindex="-1">Neal Froneman <a class="header-anchor" href="#neal-froneman" aria-label="Permalink to &quot;Neal Froneman&quot;">​</a></h1><p>Neal Froneman is the chief executive officer of the South African mining company <a href="/entities/sibanye-stillwater">Sibanye-Stillwater</a>.[1]</p><p>Following the May 2025 rescue of 260 miners trapped underground at the company&#39;s Kloof gold mine near Johannesburg, Froneman stated: &quot;Safety remains our core priority, and we will not resume operations until we are confident that all the necessary remedial actions have been implemented,&quot; thanking management, mine rescue, and medical teams for ensuring that workers &quot;returned safely to their families.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/neal-froneman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nealFroneman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nealFroneman as default
};
