import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Maggie Haberman","description":"","frontmatter":{"title":"Maggie Haberman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","new-york-times","trump-coverage"],"sources":["raw/badlands-brief-da2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/maggie-haberman.md","filePath":"entities/maggie-haberman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/maggie-haberman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maggie-haberman" tabindex="-1">Maggie Haberman <a class="header-anchor" href="#maggie-haberman" aria-label="Permalink to &quot;Maggie Haberman&quot;">​</a></h1><p>Maggie Haberman is a reporter for The New York Times known for her coverage of <a href="/entities/donald-trump">Donald Trump</a> and his administrations.[1]</p><h2 id="_2026-book-with-jonathan-swan" tabindex="-1">2026 book with Jonathan Swan <a class="header-anchor" href="#_2026-book-with-jonathan-swan" aria-label="Permalink to &quot;2026 book with Jonathan Swan&quot;">​</a></h2><p>Haberman co-authored a book with fellow New York Times reporter <a href="/entities/jonathan-swan">Jonathan Swan</a> that alleged Treasury Secretary <a href="/entities/scott-bessent">Scott Bessent</a> had privately used derogatory language about Ukrainian President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a> ahead of a contentious Oval Office meeting involving Trump and Vice President <a href="/entities/jd-vance">JD Vance</a>.[1] Excerpts from the book, cited by RT and attributed to material published by The Guardian, described Bessent&#39;s concerns about Zelensky&#39;s behavior before the meeting, including the characterization that Zelensky &quot;acted like Mr. Bean on crack.&quot;[1]</p><p>The reporting placed Bessent inside the negotiation of the U.S.–Ukraine minerals arrangement and present during the discussions that collapsed into confrontation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;America Wins, Zionists Seethe&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-da2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-da2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/maggie-haberman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maggieHaberman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maggieHaberman as default
};
