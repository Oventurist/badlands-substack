import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blake Masters","description":"","frontmatter":{"title":"Blake Masters","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","republican","america-first","us-senate"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/blake-masters.md","filePath":"entities/blake-masters.md","lastUpdated":null}');
const _sfc_main = { name: "entities/blake-masters.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blake-masters" tabindex="-1">Blake Masters <a class="header-anchor" href="#blake-masters" aria-label="Permalink to &quot;Blake Masters&quot;">​</a></h1><p>Blake Masters is an Arizona Republican who was the America First, <a href="/entities/donald-trump">Trump</a>-endorsed candidate for United States Senate in the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>.</p><h2 id="absence-from-the-december-2022-litigation" tabindex="-1">Absence from the December 2022 litigation <a class="header-anchor" href="#absence-from-the-december-2022-litigation" aria-label="Permalink to &quot;Absence from the December 2022 litigation&quot;">​</a></h2><p>Masters is discussed in the Badlands Media article <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a> primarily for what he did not do. The author, <a href="/entities/kitty-gillespie">Kitty Gillespie</a>, reports that at the time of writing she could find no indication that Masters had filed any lawsuit contesting his election by the December 9, 2022 deadline — in contrast to <a href="/entities/kari-lake">Kari Lake</a>, <a href="/entities/abe-hamadeh">Abe Hamadeh</a>, <a href="/entities/mark-finchem">Mark Finchem</a>, and <a href="/entities/jeff-zink">Jeff Zink</a>, all of whom filed within the window that opened when the results were certified on December 5.</p><p>She calls this &quot;interesting&quot; and offers two speculative explanations: that &quot;someone&quot; told him not to file, or that he was simply worn out by the vitriol of a year of campaigning. She notes that she could not find that Masters had made any public comment during the week in which the other lawsuits were filed. The article does not resolve the question, presenting the silence as an open anomaly.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/blake-masters.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blakeMasters = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blakeMasters as default
};
