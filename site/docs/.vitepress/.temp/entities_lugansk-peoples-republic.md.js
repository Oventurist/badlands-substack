import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Lugansk People's Republic","description":"","frontmatter":{"title":"Lugansk People's Republic","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","ukraine-war","donbas","starobelsk"],"sources":["raw/badlands-brief-70c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lugansk-peoples-republic.md","filePath":"entities/lugansk-peoples-republic.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/lugansk-peoples-republic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lugansk-people-s-republic" tabindex="-1">Lugansk People&#39;s Republic <a class="header-anchor" href="#lugansk-people-s-republic" aria-label="Permalink to &quot;Lugansk People&#39;s Republic&quot;">​</a></h1><p>The Lugansk People&#39;s Republic is a territory in the eastern Donbas region administered by <a href="/entities/russia">Russia</a> and treated in Russian official accounts as Russian territory during the <a href="/concepts/russian-invasion-of-ukraine">war in Ukraine</a>.[1]</p><h2 id="starobelsk-dormitory-attack" tabindex="-1">Starobelsk dormitory attack <a class="header-anchor" href="#starobelsk-dormitory-attack" aria-label="Permalink to &quot;Starobelsk dormitory attack&quot;">​</a></h2><p>On May 22, 2026, a Ukrainian drone struck a college dormitory in Starobelsk, within the Lugansk People&#39;s Republic, late at night while students were asleep.[1] The <a href="/concepts/starobelsk-dormitory-attack">attack</a> reportedly killed 21 people, most of them teenage girls, and injured 70 others.[1] Russia treated the strike as a terrorist attack on its own territory and responded with a large-scale overnight missile and drone campaign against Ukrainian military and industrial targets, coordinated by the <a href="/entities/russian-ministry-of-defence">Russian Ministry of Defence</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Taps Surprising New DNI While Media Freaks Out About Everything&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-70c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-70c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lugansk-peoples-republic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const luganskPeoplesRepublic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  luganskPeoplesRepublic as default
};
