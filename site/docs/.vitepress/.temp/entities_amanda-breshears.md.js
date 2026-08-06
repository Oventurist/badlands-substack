import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amanda Breshears","description":"","frontmatter":{"title":"Amanda Breshears","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["east-palestine","ohio","environment"],"sources":["raw/badlands-news-brief-2f8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amanda-breshears.md","filePath":"entities/amanda-breshears.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amanda-breshears.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amanda-breshears" tabindex="-1">Amanda Breshears <a class="header-anchor" href="#amanda-breshears" aria-label="Permalink to &quot;Amanda Breshears&quot;">​</a></h1><p>Amanda Breshears is a resident of North Lima, Ohio, who became a widely cited witness to the apparent downwind effects of the <a href="/concepts/east-palestine-train-derailment">East Palestine train derailment</a> and the controlled chemical release that followed.[1]</p><h2 id="chicken-deaths-in-north-lima" tabindex="-1">Chicken deaths in North Lima <a class="header-anchor" href="#chicken-deaths-in-north-lima" aria-label="Permalink to &quot;Chicken deaths in North Lima&quot;">​</a></h2><p>Residents across the Mahoning Valley, including Mahoning and Trumbull counties, reported smelling chlorine after the controlled release in East Palestine on Monday, February 13, 2023; officials said it was not dangerous.[1] Breshears, who lives a little more than ten miles from East Palestine, said the smell made her eyes water when she let her dog out and expressed skepticism about the official assurances.[1] On Tuesday morning she went to feed her five hens and rooster and found them all lifeless, positioned almost identically, with no sign that a predator had entered the enclosure.[1] Her account, reported by WKBN, was cited in the February 16, 2023 <a href="/concepts/badlands-news-brief">Badlands News Brief</a> as evidence that the chemical release was more harmful than authorities acknowledged.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Media Panic, Elitist Advances &amp; Dead Chickens&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amanda-breshears.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amandaBreshears = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amandaBreshears as default
};
