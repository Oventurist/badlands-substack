import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Khalid bin Salman","description":"","frontmatter":{"title":"Khalid bin Salman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["saudi-arabia","defense-minister","mbs"],"sources":["raw/badlands-brief-1c6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/khalid-bin-salman.md","filePath":"entities/khalid-bin-salman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/khalid-bin-salman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="khalid-bin-salman" tabindex="-1">Khalid bin Salman <a class="header-anchor" href="#khalid-bin-salman" aria-label="Permalink to &quot;Khalid bin Salman&quot;">​</a></h1><p>Khalid bin Salman is the Defense Minister of <a href="/entities/saudi-arabia">Saudi Arabia</a> and the younger brother of Crown Prince <a href="/entities/mohammed-bin-salman">Mohammed bin Salman</a>.[1] The Badlands Brief identified him as the figure appearing in a widely circulated photograph of President <a href="/entities/donald-trump">Donald Trump</a>&#39;s box at the <a href="/concepts/2026-fifa-world-cup">2026 FIFA World Cup</a> final, after readers asked the author to identify him.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Spain Wins The [American] World Cup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/khalid-bin-salman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const khalidBinSalman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  khalidBinSalman as default
};
