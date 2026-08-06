import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Aleksandr Khinshtein","description":"","frontmatter":{"title":"Aleksandr Khinshtein","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","kursk","governors"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/aleksandr-khinshtein.md","filePath":"entities/aleksandr-khinshtein.md","lastUpdated":null}');
const _sfc_main = { name: "entities/aleksandr-khinshtein.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="aleksandr-khinshtein" tabindex="-1">Aleksandr Khinshtein <a class="header-anchor" href="#aleksandr-khinshtein" aria-label="Permalink to &quot;Aleksandr Khinshtein&quot;">​</a></h1><p>Aleksandr Khinshtein is the governor of Russia&#39;s Kursk Region.[1]</p><p>He met with President <a href="/entities/vladimir-putin">Vladimir Putin</a> during the president&#39;s May 2025 visit to the region — Putin&#39;s first since the territory was fully cleared of Ukrainian forces in April — along with heads of local municipalities and volunteers assisting those affected by the repulsed Ukrainian incursion, according to the Kremlin.[1] The visit coincided with what Russian air defense commander Yury Dashkin described as an unprecedented Ukrainian drone assault on the region.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/aleksandr-khinshtein.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aleksandrKhinshtein = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aleksandrKhinshtein as default
};
