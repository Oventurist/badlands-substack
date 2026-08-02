import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Royal Academy of Arts","description":"","frontmatter":{"title":"Royal Academy of Arts","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["art-institution","britain","patronage","cultural-power"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/royal-academy-of-arts.md","filePath":"entities/royal-academy-of-arts.md","lastUpdated":null}');
const _sfc_main = { name: "entities/royal-academy-of-arts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="royal-academy-of-arts" tabindex="-1">Royal Academy of Arts <a class="header-anchor" href="#royal-academy-of-arts" aria-label="Permalink to &quot;Royal Academy of Arts&quot;">​</a></h1><p>The Royal Academy of Arts — referred to in the Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a> as the English Royal Academy of Fine Arts and, in places, the Royal Society of Fine Arts — was established in 1769 under the patronage of <a href="/entities/king-george-iii">King George III</a> as the central institution of British artistic life.</p><p><a href="/entities/benjamin-west">Benjamin West</a>, a self-taught Quaker born in Pennsylvania, was a founding member at its establishment and became its president in 1791, a position he still held in 1816. His 1795 group painting <em>The Royal Academicians</em> depicts him at the center of the institution, surrounded by its artists and artworks; <a href="/entities/john-singleton-copley">John Singleton Copley</a> is among the figures present.</p><p><a href="/entities/matthew-ehret">Matthew Ehret</a> treats West&#39;s occupancy of the Academy&#39;s presidency as the essay&#39;s central irony: an American republican serving as &quot;a shaper of cultural, moral and aesthetical senses within the very heart of the empire.&quot; The Academy also appears as an enforcer of artistic convention — West was warned he would &quot;never get a commission again&quot; if he broke the rule that history paintings use Greco-Roman costume, a threat overridden when George III purchased <em>The Death of General Wolfe</em>. Through the Academy, West trained a generation of American painters including <a href="/entities/samuel-morse">Samuel F. B. Morse</a>, Copley, Charles Willson Peale, Rembrandt Peale, Gilbert Stuart and John Trumbull.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/royal-academy-of-arts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const royalAcademyOfArts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  royalAcademyOfArts as default
};
