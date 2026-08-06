import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"NSO Group","description":"","frontmatter":{"title":"NSO Group","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","surveillance","spyware","cia","iran"],"sources":["raw/badlands-brief-949.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nso-group.md","filePath":"entities/nso-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nso-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nso-group" tabindex="-1">NSO Group <a class="header-anchor" href="#nso-group" aria-label="Permalink to &quot;NSO Group&quot;">​</a></h1><p>NSO Group is the Israeli firm that produces the <a href="/concepts/pegasus">Pegasus</a> surveillance software.[1]</p><p>In April 2026, reporting cited by Badlands stated that the <a href="/entities/cia">CIA</a> had used NSO Group&#39;s Pegasus software to run a deception operation against <a href="/entities/islamic-revolutionary-guard-corps">Islamic Revolutionary Guard Corps</a> officials as part of the rescue of a U.S. pilot reported to have been shot down in <a href="/entities/iran">Iran</a>.[1] The report, attributed to the Times of Israel, was highlighted by <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> as evidence that the U.S. military was openly deploying deception psychological operations within the <a href="/concepts/iran-war">Iran War</a> narrative.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Exposes Traitors; Peace Talks in Pakistan&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-949" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-949</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nso-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nsoGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nsoGroup as default
};
