import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Strobe Talbott","description":"","frontmatter":{"title":"Strobe Talbott","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["united-states","rhodes-scholar","russia","diplomacy"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/strobe-talbott.md","filePath":"entities/strobe-talbott.md","lastUpdated":null}');
const _sfc_main = { name: "entities/strobe-talbott.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="strobe-talbott" tabindex="-1">Strobe Talbott <a class="header-anchor" href="#strobe-talbott" aria-label="Permalink to &quot;Strobe Talbott&quot;">​</a></h1><p>Strobe Talbott is an American journalist and diplomat who served as Deputy Secretary of State during the Clinton administration with particular responsibility for Russia policy. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a> he is identified as a Rhodes Scholar and as one of the Western managers of post-Soviet liberalization.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> lists Talbott — spelled &quot;Strobe Talbot&quot; in the article — among those involved in the Western side of Perestroika, alongside the IMF&#39;s <a href="/entities/jeffrey-sachs">Jeffrey Sachs</a>, Vice President <a href="/entities/al-gore">Al Gore</a> and the Goldman Sachs banker <a href="/entities/mark-carney">Mark Carney</a>. His designation as a Rhodes Scholar connects him, in the essay&#39;s argument, to the <a href="/concepts/rhodes-scholarship">Rhodes Scholarship</a> cadre network descended from <a href="/entities/cecil-rhodes">Cecil Rhodes</a> and working alongside the <a href="/entities/fabian-society">Fabian Society</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/strobe-talbott.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const strobeTalbott = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  strobeTalbott as default
};
