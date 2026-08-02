import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alex Soros","description":"","frontmatter":{"title":"Alex Soros","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","cabal","open-society","dynasty"],"sources":["raw/a-week-to-remember.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/alex-soros.md","filePath":"entities/alex-soros.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alex-soros.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alex-soros" tabindex="-1">Alex Soros <a class="header-anchor" href="#alex-soros" aria-label="Permalink to &quot;Alex Soros&quot;">​</a></h1><p>Alex Soros is the son of financier George Soros and the chair of the Open Society Foundations, having taken over leadership of his father&#39;s philanthropic network.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>In the Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a>, <a href="/entities/erik-carlson">Erik Carlson</a> points to the announced engagement of Alex Soros and <a href="/entities/huma-abedin">Huma Abedin</a> as a possible signal of realignment among what the article calls the &quot;<a href="/concepts/cabal">Cabal</a> families.&quot; The author writes that the pairing &quot;recalls how royal families marry into other royal families to keep peace and consolidate power,&quot; and asks whether the engagement was announced &quot;to calm the mayhem between the Cabal Families, or did the mayhem result from a power grab that is occurring?&quot;</p><p>The engagement is introduced in the context of the article&#39;s broader argument that the <a href="/concepts/deep-state">Deep State</a> was in visible disarray in July 2024, with some figures standing by <a href="/entities/joe-biden">Joe Biden</a> and others abandoning him — a split the author attributes to an internal power struggle rather than to a unified strategy. Soros appears in the piece not as an actor with described conduct but as the dynastic half of an alliance the author reads as significant.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alex-soros.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alexSoros = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alexSoros as default
};
