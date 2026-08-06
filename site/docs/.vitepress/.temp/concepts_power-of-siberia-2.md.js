import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Power of Siberia 2","description":"","frontmatter":{"title":"Power of Siberia 2","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["energy","pipeline","russia","china","gas"],"sources":["raw/badlands-brief-739.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/power-of-siberia-2.md","filePath":"concepts/power-of-siberia-2.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/power-of-siberia-2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="power-of-siberia-2" tabindex="-1">Power of Siberia 2 <a class="header-anchor" href="#power-of-siberia-2" aria-label="Permalink to &quot;Power of Siberia 2&quot;">​</a></h1><p>Power of Siberia 2 is a long-discussed natural gas pipeline project intended to carry Russian gas to China, which Moscow views as critical for redirecting energy exports away from Europe.[1]</p><p>At the May 2026 Beijing summit, <a href="/entities/vladimir-putin">Vladimir Putin</a> reportedly failed to secure final Chinese approval for the project despite the meeting producing more than 40 agreements covering trade, technology, energy, media cooperation, and strategic coordination.[1] Pricing and long-term dependency concerns reportedly remained unresolved, and the impasse was cited as evidence of the limits of the Russia–China partnership even as the two governments signed a joint declaration calling for a <a href="/concepts/multipolar-world">multipolar world</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/power-of-siberia-2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const powerOfSiberia2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  powerOfSiberia2 as default
};
