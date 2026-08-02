import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ottoman Empire","description":"","frontmatter":{"title":"Ottoman Empire","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["middle-east","empire","arabian-history","world-war-i"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/ottoman-empire.md","filePath":"entities/ottoman-empire.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ottoman-empire.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ottoman-empire" tabindex="-1">Ottoman Empire <a class="header-anchor" href="#ottoman-empire" aria-label="Permalink to &quot;Ottoman Empire&quot;">​</a></h1><p>The Ottoman Empire appears in the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> as the imperial power that held the Arabian holy lands from the sixteenth century until the First World War.</p><p>The source records that the <a href="/entities/banu-hashim">Hashemite</a> kingdom of Hejaz had been under Ottoman control since the sixteenth century. It was against this position that Abdullah, the son and successor of <a href="/entities/mohammed-bin-saud">mohammed-bin-saud</a>, moved in 1814. The attempt failed: Abdullah and his kinsmen were captured, taken to Istanbul and publicly beheaded, and Abdullah&#39;s head was thrown into the waters of the Bosphorus — an event the article treats as the end of the <a href="/concepts/emirate-of-diriyah">emirate-of-diriyah</a>, the First State of Saud.</p><p>A century later the Hashemites, led by King Hussein and his son Prince Faisal in the 1916 Arab Revolt, sought sovereignty over what they regarded as the true Arabia from both the Ottoman Empire and the British Crown. The essay promises a fuller treatment of that struggle, and of the subsequent role of <a href="/entities/british-intelligence">british-intelligence</a>, in its sequel.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ottoman-empire.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ottomanEmpire = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ottomanEmpire as default
};
