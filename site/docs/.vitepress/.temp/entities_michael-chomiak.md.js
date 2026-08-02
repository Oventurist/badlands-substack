import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Chomiak","description":"","frontmatter":{"title":"Michael Chomiak","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["ukraine","world-war-ii","canada","propaganda"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/michael-chomiak.md","filePath":"entities/michael-chomiak.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-chomiak.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-chomiak" tabindex="-1">Michael Chomiak <a class="header-anchor" href="#michael-chomiak" aria-label="Permalink to &quot;Michael Chomiak&quot;">​</a></h1><p>Michael Chomiak was a Ukrainian émigré to Canada and the maternal grandfather of <a href="/entities/chrystia-freeland">Chrystia Freeland</a>. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, <a href="/entities/matthew-ehret">Matthew Ehret</a> describes him as a Nazi propagandist and treats his career as formative for the political network from which Freeland emerged.</p><h2 id="account-in-the-source" tabindex="-1">Account in the source <a class="header-anchor" href="#account-in-the-source" aria-label="Permalink to &quot;Account in the source&quot;">​</a></h2><p>The article states that Freeland &quot;was bred from a zealous family of Ukrainian nationalists under the patriarchy of her Nazi grandfather Michael Chomiak,&quot; linking to reporting by the analyst John Helmer alleging that Chomiak volunteered for Hitler before Ukraine was invaded and was pursued by Polish police into the 1980s. Helmer&#39;s earlier work is also cited in the article&#39;s framing of Freeland&#39;s record relative to her grandfather&#39;s wartime service as a propagandist and spy.</p><p>Ehret adds that the network to which Chomiak belonged &quot;was brought to Canada after WWII by Anglo-American intelligence and cultivated as a force with ties to pro-Nazi Ukrainian counterparts ever since.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-chomiak.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelChomiak = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelChomiak as default
};
