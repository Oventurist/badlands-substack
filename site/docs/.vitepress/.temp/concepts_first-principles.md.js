import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"First Principles","description":"","frontmatter":{"title":"First Principles","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["epistemology","badlands-media","analysis","truth-community"],"sources":["raw/badlands-blitz-episode-12.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/first-principles.md","filePath":"concepts/first-principles.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/first-principles.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="first-principles" tabindex="-1">First Principles <a class="header-anchor" href="#first-principles" aria-label="Permalink to &quot;First Principles&quot;">​</a></h1><p><strong>First Principles</strong> refers to reasoning from foundational, independently verified premises rather than from inherited conclusions or prevailing narratives.[1] The term is used by <a href="/entities/badlands-media">Badlands Media</a> commentators as a methodological standard for analysis, and it was one of three stated themes of the twelfth episode of <a href="/concepts/the-blitz">The Blitz</a>, published 28 March 2026.[1]</p><h2 id="treatment-in-the-blitz-episode-12" tabindex="-1">Treatment in The Blitz Episode 12 <a class="header-anchor" href="#treatment-in-the-blitz-episode-12" aria-label="Permalink to &quot;Treatment in The Blitz Episode 12&quot;">​</a></h2><p><a href="/entities/burning-bright">Burning Bright</a> and <a href="/entities/ashe-in-america">Ashe in America</a> argued that first principles, along with <a href="/concepts/narrative-warfare">narrative warfare</a> and <a href="/concepts/sovereign-disentanglement">sovereign disentanglement</a>, have been &quot;quite forgotten&quot; both in the wider world and inside the <a href="/concepts/truth-community">Truth Community</a>.[1] The episode used the mutually contradictory reports about the Iranian Ayatollah — treated as simultaneously a fabricated story and a real and serious matter — to illustrate why analysts must return to foundational reasoning rather than adopting whichever narrative arrives first.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Blitz Episode 12&quot;, URL: <a href="https://badlands.substack.com/p/badlands-blitz-episode-12" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-blitz-episode-12</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/first-principles.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const firstPrinciples = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  firstPrinciples as default
};
