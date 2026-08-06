import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Muhammad bin Nayef","description":"","frontmatter":{"title":"Muhammad bin Nayef","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["saudi-arabia","house-of-saud",2017,"purge"],"sources":["raw/arabian-nights.md"],"confidence":"low"},"headers":[],"relativePath":"entities/muhammad-bin-nayef.md","filePath":"entities/muhammad-bin-nayef.md","lastUpdated":null}');
const _sfc_main = { name: "entities/muhammad-bin-nayef.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="muhammad-bin-nayef" tabindex="-1">Muhammad bin Nayef <a class="header-anchor" href="#muhammad-bin-nayef" aria-label="Permalink to &quot;Muhammad bin Nayef&quot;">​</a></h1><p>Nayef was the would-be Crown Prince of <a href="/entities/saudi-arabia">Saudi Arabia</a> displaced during the 2017 consolidation of power by <a href="/entities/mohammed-bin-salman">Mohammed bin Salman</a> and <a href="/entities/king-salman">King Salman</a>.[1]</p><p>A cousin of MBS, he was deposed alongside the prince and minister then in charge of the Saudi military — also a cousin — with both arrested and stripped of all powers.[1] Nayef was charged with treason and later accused of plotting to murder King Salman.[1] The moves accompanied the <a href="/concepts/ritz-carlton-purge">Ritz-Carlton Purge</a> and MBS&#39;s coronation on November 4, 2017.[1] The article notes that many observers presumed these moves were made under the direct guidance of <a href="/entities/donald-trump">Donald Trump</a>, a view the author says he once held but later rejected.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arabian Nights&quot;, URL: <a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arabian-nights</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/muhammad-bin-nayef.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const muhammadBinNayef = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  muhammadBinNayef as default
};
