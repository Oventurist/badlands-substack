import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Singleton Copley","description":"","frontmatter":{"title":"John Singleton Copley","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["painter","history-painting","american-revolution","royal-academy"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/john-singleton-copley.md","filePath":"entities/john-singleton-copley.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-singleton-copley.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-singleton-copley" tabindex="-1">John Singleton Copley <a class="header-anchor" href="#john-singleton-copley" aria-label="Permalink to &quot;John Singleton Copley&quot;">​</a></h1><p>John Singleton Copley was an American painter born in 1737, the same year as <a href="/entities/benjamin-west">Benjamin West</a>, who studied under West at the <a href="/entities/royal-academy-of-arts">Royal Society of Fine Arts</a> in England and appears in West&#39;s 1795 group portrait <em>The Royal Academicians</em>.</p><p>The Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a> discusses Copley&#39;s 1781 painting of the death of <a href="/entities/william-pitt-the-elder">Lord Chatham</a> in Parliament, a rival treatment of the same subject West had painted. Copley&#39;s version juxtaposes the dying Pitt with a depiction on the wall of the 1588 defeat of the Spanish Armada — the moment England displaced the Spanish Habsburg Empire as the seat of a world maritime empire. <a href="/entities/matthew-ehret">Matthew Ehret</a> reads the juxtaposition as expressing &quot;the past grandeur of the British Empire&#39;s romantic memories dying with this man in this moment of historical change,&quot; at a time when the success of the American Revolution threatened to end British maritime supremacy. Copley is listed among the American painters trained by West in England, alongside Charles Willson Peale, Rembrandt Peale, Gilbert Stuart and John Trumbull.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-singleton-copley.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnSingletonCopley = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnSingletonCopley as default
};
