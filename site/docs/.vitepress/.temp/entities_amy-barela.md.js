import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amy Barela","description":"","frontmatter":{"title":"Amy Barela","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-mexico","republican-party","state-politics","political-violence"],"sources":["raw/badlands-news-brief-1c8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/amy-barela.md","filePath":"entities/amy-barela.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amy-barela.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amy-barela" tabindex="-1">Amy Barela <a class="header-anchor" href="#amy-barela" aria-label="Permalink to &quot;Amy Barela&quot;">​</a></h1><p><strong>Amy Barela</strong> is the Chairwoman of the Republican Party of New Mexico.[1]</p><p>In late March 2025, after the party&#39;s Albuquerque headquarters was damaged in an alleged arson attack, Barela shared images of the destroyed entryway on X and stated that the incident was &quot;a deliberate act of arson which also included spray-painting the words &#39;ICE=KKK.&#39;&quot;[1] Her party characterized the attack as a &quot;direct assault on our values.&quot;[1] See <a href="/concepts/albuquerque-gop-headquarters-arson">Albuquerque GOP headquarters arson</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Myanmar&#39;s Mayhem, Musk&#39;s Marxists, &amp; the Military&#39;s Secret Memo&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amy-barela.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amyBarela = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amyBarela as default
};
