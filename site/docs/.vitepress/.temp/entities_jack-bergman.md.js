import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jack Bergman","description":"","frontmatter":{"title":"Jack Bergman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","michigan","republican","military"],"sources":["raw/badlands-news-blast.md"],"confidence":"low"},"headers":[],"relativePath":"entities/jack-bergman.md","filePath":"entities/jack-bergman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jack-bergman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jack-bergman" tabindex="-1">Jack Bergman <a class="header-anchor" href="#jack-bergman" aria-label="Permalink to &quot;Jack Bergman&quot;">​</a></h1><p><strong>Jack Bergman</strong> is a U.S. Representative from Michigan and a retired Marine Corps officer.[1]</p><h2 id="lake-huron-shootdown" tabindex="-1">Lake Huron shootdown <a class="header-anchor" href="#lake-huron-shootdown" aria-label="Permalink to &quot;Lake Huron shootdown&quot;">​</a></h2><p>Bergman, together with Michigan Representative <a href="/entities/elissa-slotkin">Elissa Slotkin</a>, was among the first officials to report publicly that an unknown &quot;octagonal object&quot; had been shot down over Lake Huron on February 12, 2023, during the <a href="/concepts/2023-north-american-aerial-object-shootdowns">February 2023 aerial object shootdowns</a>.[1] The disclosures from Michigan&#39;s congressional delegation contributed to criticism that the <a href="/entities/pentagon">Pentagon</a> and White House were slower to inform the public than members of Congress were.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;UFO&#39;s, Epstein Logs &amp; Racist Squirrels?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-blast" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-blast</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jack-bergman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jackBergman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jackBergman as default
};
