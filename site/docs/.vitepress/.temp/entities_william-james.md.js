import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William James","description":"","frontmatter":{"title":"William James","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["philosopher","psychology","pragmatism","quotation"],"sources":["raw/a-mysterious-masterclass-in-multi.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/william-james.md","filePath":"entities/william-james.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-james.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-james" tabindex="-1">William James <a class="header-anchor" href="#william-james" aria-label="Permalink to &quot;William James&quot;">​</a></h1><p>William James was an American philosopher and psychologist, a founding figure of pragmatism and of modern psychology in the United States. In the <a href="/entities/badlands-media">Badlands Media</a> essay <a href="/concepts/a-mysterious-masterclass-in-multi">&quot;A Mysterious Masterclass in Multi Sensory Deception&quot;</a> he is cited for the aphorism, &quot;There is nothing so absurd that it cannot be believed as truth if repeated often enough.&quot;</p><p>The quotation is used to explain the role of repetition in the illusion staged at the <a href="/entities/cosmos-mystery-area">Cosmos Mystery Area</a>, where a guide reiterates claims of &quot;cosmic energy&quot; and altered gravity while visitors&#39; senses are being manipulated. The essay generalizes the point to propaganda in the <a href="/concepts/information-war">information war</a>, arguing that repetition delivered by a perceived authority is one of the core mechanisms by which false narratives are accepted.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-mysterious-masterclass-in-multi" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-james.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamJames = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamJames as default
};
