import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Helmer","description":"","frontmatter":{"title":"John Helmer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","russia","analysis"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"low"},"headers":[],"relativePath":"entities/john-helmer.md","filePath":"entities/john-helmer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-helmer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-helmer" tabindex="-1">John Helmer <a class="header-anchor" href="#john-helmer" aria-label="Permalink to &quot;John Helmer&quot;">​</a></h1><p>John Helmer is an analyst and journalist whose reporting on the career of <a href="/entities/chrystia-freeland">Chrystia Freeland</a> is cited in <a href="/entities/matthew-ehret">Matthew Ehret</a>&#39;s assessment of her removal from Canadian government.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a> In an article covering Freeland&#39;s ouster, Helmer wrote that &quot;Freeland&#39;s ouster was so rushed, there was no time for her to explain what the hurry was in her departure, nor for Carney to prepare what Freeland would be doing as his special envoy to the Ukraine without any staff or diplomatic rank.&quot;<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><p>Helmer has also published research on Freeland&#39;s grandfather <a href="/entities/michael-chomiak">Michael Chomiak</a>, arguing that Chomiak volunteered for Hitler before Ukraine was invaded and was hunted by the Polish police into the 1980s.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a> Helmer&#39;s framing of Freeland&#39;s career casts her as having achieved less for Ukrainian fascism between 2013 and 2025 than her grandfather achieved as a propagandist and spy from 1939.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Re-Alignment of World Systems&quot;, URL: <a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-re-alignment-of-world-systems</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-helmer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnHelmer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnHelmer as default
};
