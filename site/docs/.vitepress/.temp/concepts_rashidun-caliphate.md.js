import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rashidun Caliphate","description":"","frontmatter":{"title":"Rashidun Caliphate","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["islam","arabian-history","caliphate","succession"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"concepts/rashidun-caliphate.md","filePath":"concepts/rashidun-caliphate.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/rashidun-caliphate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rashidun-caliphate" tabindex="-1">Rashidun Caliphate <a class="header-anchor" href="#rashidun-caliphate" aria-label="Permalink to &quot;Rashidun Caliphate&quot;">​</a></h1><p>The Rashidun — &quot;Rightly Guided&quot; — Caliphate was the polity governed by the four companions of <a href="/entities/prophet-muhammad">Muhammad</a> who were sequentially elected to lead the Muslim community after his death. The Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> treats it as the immediate consequence of Muhammad&#39;s failure to dictate a line of succession.</p><p>Most of Muhammad&#39;s followers supported his most trusted companion, <a href="/entities/abu-bakr">abu-bakr</a>. Over the following thirty years, Abu Bakr and three other trusted companions were each elected by their peers to rule. During that period, the source states, the empire expanded from modern-day Libya to India and became the most powerful military, cultural and economic force in West Asia. The Quran was written under Abu Bakr.</p><p>The fourth of these caliphs — <em>caliph</em> meaning successor to the Prophet — was <a href="/entities/ali-ibn-abi-talib">Ali</a>. The dispute over whether Ali had in fact been designated Muhammad&#39;s heir produced the division between <a href="/concepts/sunni-islam">Sunni</a> and <a href="/concepts/shia-islam">Shia</a> Islam. The source notes that most caliphs of Islam have historically been either <em>sharifs</em>, descendants of Muhammad, or members of the <a href="/entities/banu-hashim">banu-hashim</a>, and stresses that the modern leadership of the Muslim world, held by <a href="/entities/saudi-arabia">saudi-arabia</a>, belongs to neither category.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/rashidun-caliphate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rashidunCaliphate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rashidunCaliphate as default
};
