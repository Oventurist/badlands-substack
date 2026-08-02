import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Petro Poroshenko","description":"","frontmatter":{"title":"Petro Poroshenko","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["ukraine","oligarchs","politics","privatization"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/petro-poroshenko.md","filePath":"entities/petro-poroshenko.md","lastUpdated":null}');
const _sfc_main = { name: "entities/petro-poroshenko.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="petro-poroshenko" tabindex="-1">Petro Poroshenko <a class="header-anchor" href="#petro-poroshenko" aria-label="Permalink to &quot;Petro Poroshenko&quot;">​</a></h1><p>Petro Poroshenko is a Ukrainian businessman and politician who served as President of Ukraine from 2014 to 2019. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, he is listed among the oligarchs created by the privatization and liberalization reforms applied to Ukraine and other Warsaw Pact countries in the 1990s.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> names Poroshenko alongside Rinat Akhmetov, <a href="/entities/mikhail-khodorkovsky">Mikhail Khodorkovsky</a> and <a href="/entities/viktor-pinchuk">Viktor Pinchuk</a> on the Ukrainian side, and <a href="/entities/oleg-deripaska">Oleg Deripaska</a>, Boris Berezovsky, Mikhail Fridman and <a href="/entities/roman-abramovich">Roman Abramovich</a> on the Russian side, as products of the same process directed by <a href="/entities/anatoly-chubais">Anatoly Chubais</a> and <a href="/entities/yegor-gaidar">Yegor Gaidar</a> under <a href="/entities/boris-yeltsin">Boris Yeltsin</a>. The article treats this class as the social base of the post-2014 Ukrainian order that followed the removal of <a href="/entities/viktor-yanukovych">Viktor Yanukovych</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/petro-poroshenko.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const petroPoroshenko = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  petroPoroshenko as default
};
