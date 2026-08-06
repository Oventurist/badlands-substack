import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wireless Festival","description":"","frontmatter":{"title":"Wireless Festival","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["music","uk","sponsorship","controversy"],"sources":["raw/badlands-brief-282.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/wireless-festival.md","filePath":"concepts/wireless-festival.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/wireless-festival.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wireless-festival" tabindex="-1">Wireless Festival <a class="header-anchor" href="#wireless-festival" aria-label="Permalink to &quot;Wireless Festival&quot;">​</a></h1><p>The Wireless Festival is a London music festival at which <a href="/entities/kanye-west">Kanye West</a> was scheduled to headline all three nights in July 2026 as part of a European tour.[1] The booking drew criticism over West&#39;s past antisemitic statements.[1] Pepsi and Diageo withdrew sponsorship from the festival following the backlash, and British Prime Minister <a href="/entities/keir-starmer">Keir Starmer</a> said the decision to book West was &quot;deeply concerning.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Jesus Walks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-282" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-282</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/wireless-festival.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wirelessFestival = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wirelessFestival as default
};
