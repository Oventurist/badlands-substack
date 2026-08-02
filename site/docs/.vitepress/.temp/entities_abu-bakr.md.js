import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Abu Bakr","description":"","frontmatter":{"title":"Abu Bakr","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["islam","rashidun-caliphate","arabian-history","sunni-islam"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/abu-bakr.md","filePath":"entities/abu-bakr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/abu-bakr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="abu-bakr" tabindex="-1">Abu Bakr <a class="header-anchor" href="#abu-bakr" aria-label="Permalink to &quot;Abu Bakr&quot;">​</a></h1><p>Abu Bakr was the closest companion of <a href="/entities/prophet-muhammad">Muhammad</a> and the first of the four elected caliphs of the <a href="/concepts/rashidun-caliphate">rashidun-caliphate</a>. The Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> notes that &quot;Abu Bakr&quot; is a <em>kunya</em> meaning &quot;the father of camels.&quot;</p><p>When Muhammad died without dictating a line of succession, most of his followers supported Abu Bakr. The source records that for thirty years Abu Bakr and three other trusted companions were sequentially elected by their peers to rule the Rashidun — &quot;Rightly Guided&quot; — Caliphate, during which the empire grew from modern-day Libya to India and became the most powerful military, cultural and economic force in West Asia. Under Abu Bakr, the source states, the Quran was written.</p><p>His election, rather than the designation of a hereditary heir, is the point of departure for <a href="/concepts/sunni-islam">sunni-islam</a>, whose adherents hold that Muhammad appointed no successor and intended the Muslim community to choose from among itself the leader most capable of uniting the people under the <em>hadiths</em>. Those who instead held that only the descendants of <a href="/entities/ali-ibn-abi-talib">Ali</a> could lead became the <a href="/concepts/shia-islam">Shia</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
