import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Colby","description":"","frontmatter":{"title":"William Colby","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["intelligence","cia-director","congressional-testimony","media-manipulation"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"high"},"headers":[],"relativePath":"entities/william-colby.md","filePath":"entities/william-colby.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-colby.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-colby" tabindex="-1">William Colby <a class="header-anchor" href="#william-colby" aria-label="Permalink to &quot;William Colby&quot;">​</a></h1><p>William Colby was Director of the <a href="/entities/cia">Central Intelligence Agency</a> during the mid-1970s and the agency official whose sworn testimony is credited in the Badlands corpus with exposing Operation Mockingbird.</p><h2 id="testimony-before-the-church-committee" tabindex="-1">Testimony before the Church Committee <a class="header-anchor" href="#testimony-before-the-church-committee" aria-label="Permalink to &quot;Testimony before the Church Committee&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> recounts that in 1975 the congressional committee led by Frank Church &quot;grilled William Colby, the CIA Director, under oath.&quot; According to the essay, Colby revealed the existence of <a href="/concepts/operation-mockingbird">Operation Mockingbird</a> and described how the CIA had assets working within different media companies. The article dates the resulting picture of media manipulation back to at least 1960.</p><p>Colby&#39;s disclosure is treated in the corpus as the moment the agency&#39;s influence over American information moved from allegation to admitted fact, and thus as the foundation for the article&#39;s subsequent claims about the intelligence community&#39;s relationship with the internet era&#39;s dominant platforms.</p><h2 id="related-pages" tabindex="-1">Related pages <a class="header-anchor" href="#related-pages" aria-label="Permalink to &quot;Related pages&quot;">​</a></h2><ul><li><a href="/entities/church-committee">church-committee</a></li><li><a href="/concepts/operation-mockingbird">operation-mockingbird</a></li><li><a href="/concepts/america-has-a-cia-run-economy">america-has-a-cia-run-economy</a></li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-colby.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamColby = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamColby as default
};
