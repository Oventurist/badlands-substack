import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Abu Bakr","description":"","frontmatter":{"title":"Abu Bakr","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["islam","caliph","rashidun","quran"],"sources":["raw/arabian-nights.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/abu-bakr.md","filePath":"entities/abu-bakr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/abu-bakr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="abu-bakr" tabindex="-1">Abu Bakr <a class="header-anchor" href="#abu-bakr" aria-label="Permalink to &quot;Abu Bakr&quot;">​</a></h1><p>Abu Bakr — a kunya meaning &quot;the father of camels&quot; — was the most trusted companion of the Prophet <a href="/entities/muhammad">Muhammad</a> and the first caliph of the <a href="/concepts/rashidun-caliphate">Rashidun Caliphate</a>.<a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">[1]</a></p><p>When Muhammad died leaving no dictated line of succession, most of his followers supported Abu Bakr as leader.<a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">[1]</a> For thirty years Abu Bakr and three other trusted companions of Muhammad were sequentially elected by their peers to rule the Rashidun (&quot;Rightly Guided&quot;) Caliphate, expanding the empire from modern-day Libya to India and making it the most powerful military, cultural, and economic force in West Asia.<a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">[1]</a> The Quran was written under Abu Bakr.<a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">[1]</a></p><p>The alternative view, that <a href="/entities/ali-ibn-abi-talib">Ali</a> was Muhammad&#39;s designated heir, produced the <a href="/concepts/shia-islam">Shia</a> branch; the majority who accepted the elective principle became the <a href="/concepts/sunni-islam">Sunni</a>.<a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arabian Nights&quot;, URL: <a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arabian-nights</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/abu-bakr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const abuBakr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  abuBakr as default
};
