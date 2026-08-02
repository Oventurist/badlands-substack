import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Babylon Bee","description":"","frontmatter":{"title":"Babylon Bee","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["media","satire","conservative","twitter","censorship"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/babylon-bee.md","filePath":"entities/babylon-bee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/babylon-bee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="babylon-bee" tabindex="-1">Babylon Bee <a class="header-anchor" href="#babylon-bee" aria-label="Permalink to &quot;Babylon Bee&quot;">​</a></h1><p>The Babylon Bee is an American satirical news website with a Christian and conservative editorial sensibility. It became a widely cited example in debates over social media moderation after its Twitter account was suspended, and it was restored to the platform in late 2022 following Elon Musk&#39;s acquisition of the company.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p><a href="/entities/kitty-gillespie">Kitty Gillespie</a> closes <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a> with an image from &quot;our friends at the <em>Babylon Bee</em>, who are BACK ON TWITTER,&quot; using the outlet&#39;s reinstatement as a note of levity and encouragement after a lengthy account of the failures of the 2022 election in <a href="/entities/maricopa-county">Maricopa County</a>. The reference functions in the corpus as shorthand for a broader narrative in which conservative and dissident voices, previously suppressed, are regaining access to public platforms.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/babylon-bee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const babylonBee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  babylonBee as default
};
