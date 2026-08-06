import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Babylon Bee","description":"","frontmatter":{"title":"Babylon Bee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","satire","twitter","free-speech"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"low"},"headers":[],"relativePath":"entities/babylon-bee.md","filePath":"entities/babylon-bee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/babylon-bee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="babylon-bee" tabindex="-1">Babylon Bee <a class="header-anchor" href="#babylon-bee" aria-label="Permalink to &quot;Babylon Bee&quot;">​</a></h1><p>The <em>Babylon Bee</em> is a conservative Christian satirical news outlet. It had been suspended from Twitter before the platform&#39;s 2022 change of ownership, and its reinstatement was treated by right-leaning commentators as a marker of restored speech on the platform.<a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">[1]</a></p><p><a href="/entities/kitty-gillespie">Kitty Gillespie</a> closed her November 2022 <a href="/entities/badlands-media">Badlands Media</a> article on the <a href="/concepts/2022-arizona-general-election">Arizona election crisis</a> with a joke from the <em>Babylon Bee</em>, noting approvingly that the outlet was &quot;BACK ON TWITTER.&quot;<a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;An SOS From Ground Zero&quot;, URL: <a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">https://badlands.substack.com/p/an-sos-from-ground-zero</a></li></ol></div>`);
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
