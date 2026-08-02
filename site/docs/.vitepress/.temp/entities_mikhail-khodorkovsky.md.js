import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mikhail Khodorkovsky","description":"","frontmatter":{"title":"Mikhail Khodorkovsky","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["russia","oligarchs","yukos","exile"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/mikhail-khodorkovsky.md","filePath":"entities/mikhail-khodorkovsky.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mikhail-khodorkovsky.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mikhail-khodorkovsky" tabindex="-1">Mikhail Khodorkovsky <a class="header-anchor" href="#mikhail-khodorkovsky" aria-label="Permalink to &quot;Mikhail Khodorkovsky&quot;">​</a></h1><p>Mikhail Khodorkovsky is a Russian businessman, formerly head of the Yukos oil company, who was imprisoned in Russia and subsequently lived in exile in London. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, he appears among the oligarchs produced by post-Soviet privatization and among the contacts of <a href="/entities/chrystia-freeland">Chrystia Freeland</a>.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p>The article lists Khodorkovsky in its catalogue of oligarchs created by the reforms of the 1990s, and states that Freeland &quot;had made high level contacts with those Ukrainian, Russian and Western oligarchs mentioned above, including <a href="/entities/viktor-pinchuk">Viktor Pinchuk</a> and Mikhail Khodorkovsky.&quot;</p><p>A footnote in the essay observes that when <a href="/entities/vladimir-putin">Vladimir Putin</a> &quot;began exiling many of these unrepentant oligarchs, they quickly made their way to London where many became disposable playthings of the British Empire,&quot; a milieu the article associates with the <a href="/entities/city-of-london">City of London</a> and the district nicknamed &quot;Moscow on Thames.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mikhail-khodorkovsky.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikhailKhodorkovsky = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikhailKhodorkovsky as default
};
