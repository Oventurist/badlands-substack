import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Clarke","description":"","frontmatter":{"title":"John Clarke","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["science","physics","quantum","nobel-prize"],"sources":["raw/badlands-news-brief-060.md"],"confidence":"high"},"headers":[],"relativePath":"entities/john-clarke.md","filePath":"entities/john-clarke.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-clarke.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-clarke" tabindex="-1">John Clarke <a class="header-anchor" href="#john-clarke" aria-label="Permalink to &quot;John Clarke&quot;">​</a></h1><p><strong>John Clarke</strong> is a physicist associated with the University of California, Berkeley, and one of three United States–based scientists awarded the <a href="/concepts/2025-nobel-prize-in-physics">2025 Nobel Prize in Physics</a>.[1]</p><p>The Royal Swedish Academy of Sciences cited Clarke, together with <a href="/entities/michel-devoret">Michel H. Devoret</a> and <a href="/entities/john-martinis">John M. Martinis</a>, &quot;for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit.&quot;[1] The award recognized experiments conducted on a chip that revealed quantum physics in action and that are considered foundational to the next generation of quantum technology, including quantum cryptography, quantum computers, and quantum sensors.[1] The three laureates share prize money of 11 million Swedish kronor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Quantum Tunneling, Natural Conflicts, &amp; Pirates for Gaza&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-060" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-060</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-clarke.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnClarke = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnClarke as default
};
