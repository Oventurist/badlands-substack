import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yegor Gaidar","description":"","frontmatter":{"title":"Yegor Gaidar","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["russia","shock-therapy","economics","1990s"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/yegor-gaidar.md","filePath":"entities/yegor-gaidar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/yegor-gaidar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yegor-gaidar" tabindex="-1">Yegor Gaidar <a class="header-anchor" href="#yegor-gaidar" aria-label="Permalink to &quot;Yegor Gaidar&quot;">​</a></h1><p>Yegor Gaidar (1956–2009) was a Russian economist and acting Prime Minister who led the early 1990s program of price liberalization and market reform in the Russian Federation. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, he is named alongside <a href="/entities/anatoly-chubais">Anatoly Chubais</a> as a monetarist &quot;reformer&quot; operating under <a href="/entities/boris-yeltsin">Boris Yeltsin</a>.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> argues that although the former Soviet bloc nations &quot;were in tatters by 1992, their sovereign powers could only be undone by applying the liberalization process, which took 30 years in the west in a short space of only a decade,&quot; and that this compression was directed by Gaidar and Chubais. The article treats the resulting privatizations as the origin of the Russian and Ukrainian oligarchic class, many of whose members later relocated to London — the &quot;Moscow on Thames&quot; described in the essay.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/yegor-gaidar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yegorGaidar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yegorGaidar as default
};
