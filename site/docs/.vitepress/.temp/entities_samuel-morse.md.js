import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Samuel F. B. Morse","description":"","frontmatter":{"title":"Samuel F. B. Morse","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["painter","inventor","telegraph","anti-jesuit"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/samuel-morse.md","filePath":"entities/samuel-morse.md","lastUpdated":null}');
const _sfc_main = { name: "entities/samuel-morse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="samuel-f-b-morse" tabindex="-1">Samuel F. B. Morse <a class="header-anchor" href="#samuel-f-b-morse" aria-label="Permalink to &quot;Samuel F. B. Morse&quot;">​</a></h1><p>Samuel F. B. Morse was an American painter and inventor of the electric telegraph, trained in England by <a href="/entities/benjamin-west">Benjamin West</a> at the <a href="/entities/royal-academy-of-arts">English Royal Academy of Fine Arts</a>. The Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a> by <a href="/entities/matthew-ehret">Matthew Ehret</a> identifies him as one of West&#39;s most accomplished students, and specifically as one who mastered West&#39;s technique of embedding Platonic ironies and anomalies in his paintings.</p><p>The article places Morse in a scientific lineage descending from <a href="/entities/benjamin-franklin">Benjamin Franklin</a>&#39;s 1752 discovery of atmospheric electricity: Franklin&#39;s work, it argues, directly gave rise to Morse&#39;s advances in electrical communication, which were developed with the help of scientists around the Humboldt brothers, including Carl F. Gauss, Wilhelm Weber and Ampère, and alongside Joseph Henry and Franklin&#39;s descendant Alexander Dallas Bache in what the source calls the Göttingen-Philadelphia complex of genius.</p><p>In an endnote, the article credits Morse with exposing <a href="/entities/jesuits">Jesuit</a> operations in the Americas in his 1841 book <em>Foreign Conspiracy Against the Liberties of the United States</em>, in which he described Prince Metternich&#39;s Holy Alliance deploying agents to undo the American Revolution: &quot;the latter come from the same quarter, in the shape of hundreds of Jesuits and priests; a class of men notorious for their intrigue and political arts, and who have a complete military organization through the United States.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/samuel-morse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const samuelMorse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  samuelMorse as default
};
