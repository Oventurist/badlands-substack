import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Battle of Gallipoli","description":"","frontmatter":{"title":"Battle of Gallipoli","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["wwi","britain","turkey","military-history"],"sources":["raw/badlands-news-brief-6f7.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/battle-of-gallipoli.md","filePath":"concepts/battle-of-gallipoli.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/battle-of-gallipoli.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="battle-of-gallipoli" tabindex="-1">Battle of Gallipoli <a class="header-anchor" href="#battle-of-gallipoli" aria-label="Permalink to &quot;Battle of Gallipoli&quot;">​</a></h1><p>The Gallipoli campaign of the First World War is presented in the Badlands News Brief as the formative humiliation behind <a href="/entities/winston-churchill">Winston Churchill</a>&#39;s later conduct in the Second World War.[1] As First Lord of the Admiralty, Churchill owned the operation, having grown tired of the endless stalemate in the land trenches — particularly since Britain was a naval power.[1]</p><p>The Brief notes that the ultimate weapon of the First World War was the battleship, and that Gallipoli offered an ideal opportunity to use it against land forces because the peninsula is very long and very narrow, sitting at the Dardanelles Strait, the maritime entrance to the Black Sea through Turkey.[1]</p><p>The attack was a total failure. Turkish artillery sank several British ships, and after about a year of fighting both sides had each lost 250,000 men, for a total of 500,000.[1] British and Australian forces boarded their ships and sailed away, leaving Churchill humiliated and seeking redemption.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Psyops Abound as the Media Landscape Shifts Rapidly&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6f7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6f7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/battle-of-gallipoli.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const battleOfGallipoli = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  battleOfGallipoli as default
};
