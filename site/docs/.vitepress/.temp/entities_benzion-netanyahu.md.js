import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Benzion Netanyahu","description":"","frontmatter":{"title":"Benzion Netanyahu","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["zionism","revisionism","israel","netanyahu-family"],"sources":["raw/badlands-news-brief-322.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/benzion-netanyahu.md","filePath":"entities/benzion-netanyahu.md","lastUpdated":null}');
const _sfc_main = { name: "entities/benzion-netanyahu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="benzion-netanyahu" tabindex="-1">Benzion Netanyahu <a class="header-anchor" href="#benzion-netanyahu" aria-label="Permalink to &quot;Benzion Netanyahu&quot;">​</a></h1><p>Benzion Netanyahu was an Israeli historian and Revisionist Zionist activist, and the father of Israeli prime minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>.[1]</p><p>Badlands reporting emphasizes that Benzion Netanyahu served as the personal secretary to <a href="/entities/zeev-jabotinsky">Ze&#39;ev Jabotinsky</a>, founder of the <a href="/entities/irgun">Irgun</a> and leader of the <a href="/concepts/revisionist-zionism">Revisionist Zionist</a> movement, which explicitly held that violence was a legitimate form of political expression.[1] That connection is presented as a direct line from the militant Revisionist current of the 1930s and 1940s to the modern Israeli political leadership.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;We Have the Source ... And the Sauce&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-322" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-322</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/benzion-netanyahu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benzionNetanyahu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benzionNetanyahu as default
};
