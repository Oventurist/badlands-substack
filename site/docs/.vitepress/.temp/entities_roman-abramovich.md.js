import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Roman Abramovich","description":"","frontmatter":{"title":"Roman Abramovich","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["russia","oligarchs","london","privatization"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/roman-abramovich.md","filePath":"entities/roman-abramovich.md","lastUpdated":null}');
const _sfc_main = { name: "entities/roman-abramovich.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="roman-abramovich" tabindex="-1">Roman Abramovich <a class="header-anchor" href="#roman-abramovich" aria-label="Permalink to &quot;Roman Abramovich&quot;">​</a></h1><p>Roman Abramovich is a Russian businessman who accumulated a fortune in oil and metals in the wake of the 1990s privatizations and later became widely known in Britain as the owner of Chelsea Football Club. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, he is named among the oligarchs created by post-Soviet shock therapy.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> lists Abramovich with <a href="/entities/oleg-deripaska">Oleg Deripaska</a>, Boris Berezovsky and Mikhail Fridman as Russian members of a &quot;nouveau riche&quot; class produced by the reforms of <a href="/entities/anatoly-chubais">Anatoly Chubais</a> and <a href="/entities/yegor-gaidar">Yegor Gaidar</a> under <a href="/entities/boris-yeltsin">Boris Yeltsin</a>. The essay stresses the London connection: many such figures &quot;purchased houses in the swank upmarket sections of London, which has come to be known as &#39;Moscow on Thames&#39;,&quot; and, a footnote adds, when <a href="/entities/vladimir-putin">Vladimir Putin</a> exiled unrepentant oligarchs they became &quot;disposable playthings of the British Empire&quot; centred on the <a href="/entities/city-of-london">City of London</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/roman-abramovich.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const romanAbramovich = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  romanAbramovich as default
};
