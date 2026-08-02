import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hugo Chávez","description":"","frontmatter":{"title":"Hugo Chávez","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["venezuela","socialism","latin-america"],"sources":["raw/a-family-affair.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/hugo-chavez.md","filePath":"entities/hugo-chavez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hugo-chavez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hugo-chavez" tabindex="-1">Hugo Chávez <a class="header-anchor" href="#hugo-chavez" aria-label="Permalink to &quot;Hugo Chávez&quot;">​</a></h1><p>Hugo Rafael Chávez Frías (1954–2013) was a Venezuelan politician who served as president of Venezuela from 1999 until his death in 2013. In the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a>, he is mentioned as the Venezuelan president whose election prompted former president <a href="/entities/carlos-andres-perez">carlos-andres-perez</a>—who had fled to miami—to become one of his most vehement opponents.</p><h2 id="connection-to-carlos-andres-perez" tabindex="-1">Connection to Carlos Andrés Pérez <a class="header-anchor" href="#connection-to-carlos-andres-perez" aria-label="Permalink to &quot;Connection to Carlos Andrés Pérez&quot;">​</a></h2><p>According to wikipedia, after fleeing Venezuela, Carlos Andrés Pérez settled in Miami and became a vocal opponent of Hugo Chávez. The article draws a parallel between Pérez and <a href="/entities/carlos-salinas">carlos-salinas</a>, both described as corrupt leaders who fled to Miami after their regimes collapsed and who opposed the populist leaders who succeeded them. The source suggests this reflects a shared &quot;CIA template&quot; for corrupt governance and exile.</p><h2 id="political-context" tabindex="-1">Political context <a class="header-anchor" href="#political-context" aria-label="Permalink to &quot;Political context&quot;">​</a></h2><p>Chávez was a left-wing populist who implemented socialist policies in Venezuela, nationalized industries, and aligned himself with other leftist governments in Latin America. His election in 1998 ended the two-party dominance of the Venezuelan political establishment that had characterized the country for decades. In the Badlands corpus, Chávez is generally framed as a target of U.S. and CIA-backed opposition due to his anti-imperialist stance.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hugo-chavez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hugoChavez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hugoChavez as default
};
