import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John M. Martinis","description":"","frontmatter":{"title":"John M. Martinis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["science","physics","quantum","nobel-prize"],"sources":["raw/badlands-news-brief-060.md"],"confidence":"high"},"headers":[],"relativePath":"entities/john-martinis.md","filePath":"entities/john-martinis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-martinis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-m-martinis" tabindex="-1">John M. Martinis <a class="header-anchor" href="#john-m-martinis" aria-label="Permalink to &quot;John M. Martinis&quot;">​</a></h1><p><strong>John M. Martinis</strong> is a physicist associated with the University of California, Santa Barbara, and one of three United States–based recipients of the <a href="/concepts/2025-nobel-prize-in-physics">2025 Nobel Prize in Physics</a>.[1]</p><p>Martinis shared the award with <a href="/entities/john-clarke">John Clarke</a> and <a href="/entities/michel-devoret">Michel H. Devoret</a>, cited by the Royal Swedish Academy of Sciences &quot;for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit.&quot;[1] Their experiments on a chip revealed quantum physics in action and were described as providing opportunities for the next generation of quantum technology, including quantum cryptography, quantum computers, and quantum sensors.[1] The laureates share prize money of 11 million Swedish kronor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Quantum Tunneling, Natural Conflicts, &amp; Pirates for Gaza&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-060" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-060</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-martinis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnMartinis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnMartinis as default
};
