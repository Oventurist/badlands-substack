import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jesuits","description":"","frontmatter":{"title":"Jesuits","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["religious-order","colonial-america","intelligence-operations","new-france"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/jesuits.md","filePath":"entities/jesuits.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jesuits.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jesuits" tabindex="-1">Jesuits <a class="header-anchor" href="#jesuits" aria-label="Permalink to &quot;Jesuits&quot;">​</a></h1><p>The Society of Jesus, or Jesuits, appears in the Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a> as the principal adversary of the American republican networks in colonial North America. <a href="/entities/matthew-ehret">Matthew Ehret</a> describes the Jesuits as the effective controllers of the French territories of the Americas, credited with doing &quot;the most work in organizing a lot of alliances with different native bands&quot; and with &quot;an immense amount of damage manipulating these groups against each other, and sometimes against colonists.&quot;</p><p>The article argues that the great danger for English republicans before the Battle of Quebec was that the <a href="/entities/iroquois-confederacy">Mohawks and Iroquois</a> would ally with the Jesuit-run French; it credits <a href="/entities/william-johnson">William Johnson</a> with reversing that outcome and thereby tipping the battle. In discussing the <a href="/concepts/penn-treaty-of-1682">Penn Treaty of 1682</a>, Ehret reads its fourth article — forbidding either side from believing false rumors about the other — as an explicit countermeasure to &quot;Jesuitical intelligence operations&quot; that spread slander and gossip to provoke violence between settlers and natives, and that he claims deployed manipulated native groups from Canada and Quebec to conduct massacres.</p><p>The essay cites three supporting sources for this reading: <a href="/entities/cynthia-chung">Cynthia Chung</a>&#39;s <em>The Shaping of a World Religion: From Jesuits, Freemasons and Anthropologists to the Ghost Dance Religion</em>; Friedrich Schiller&#39;s 1792 study <em>The Jesuit Government in Paraguay</em>; and <a href="/entities/samuel-morse">Samuel F. B. Morse</a>&#39;s 1841 <em>Foreign Conspiracy Against the Liberties of the United States</em>, which described Prince Metternich&#39;s Holy Alliance deploying &quot;hundreds of Jesuits and priests... who have a complete military organization through the United States&quot; in order to undo the American Revolution.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jesuits.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jesuits = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jesuits as default
};
