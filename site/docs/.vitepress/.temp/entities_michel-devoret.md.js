import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michel H. Devoret","description":"","frontmatter":{"title":"Michel H. Devoret","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["science","physics","quantum","nobel-prize"],"sources":["raw/badlands-news-brief-060.md"],"confidence":"high"},"headers":[],"relativePath":"entities/michel-devoret.md","filePath":"entities/michel-devoret.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michel-devoret.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michel-h-devoret" tabindex="-1">Michel H. Devoret <a class="header-anchor" href="#michel-h-devoret" aria-label="Permalink to &quot;Michel H. Devoret&quot;">​</a></h1><p><strong>Michel H. Devoret</strong> is a physicist affiliated with Yale University in New Haven and with the University of California, Santa Barbara, and one of three laureates of the <a href="/concepts/2025-nobel-prize-in-physics">2025 Nobel Prize in Physics</a>.[1]</p><p>Devoret shared the prize with <a href="/entities/john-clarke">John Clarke</a> and <a href="/entities/john-martinis">John M. Martinis</a>, honored by the Royal Swedish Academy of Sciences &quot;for the discovery of macroscopic quantum mechanical tunnelling and energy quantisation in an electric circuit.&quot;[1] The cited experiments, performed on a chip, demonstrated quantum behaviour at a scale where such effects usually become insignificant and were described as enabling the next generation of quantum technology, including quantum cryptography, quantum computers, and quantum sensors.[1] The three share prize money of 11 million Swedish kronor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Quantum Tunneling, Natural Conflicts, &amp; Pirates for Gaza&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-060" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-060</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michel-devoret.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michelDevoret = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michelDevoret as default
};
