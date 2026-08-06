import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"DP World","description":"","frontmatter":{"title":"DP World","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["logistics","uae","dubai","shipping","africa"],"sources":["raw/badlands-brief-cc3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dp-world.md","filePath":"entities/dp-world.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dp-world.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dp-world" tabindex="-1">DP World <a class="header-anchor" href="#dp-world" aria-label="Permalink to &quot;DP World&quot;">​</a></h1><p>DP World is a Dubai-based global shipping and ports company operating at the highest levels of international logistics. In Badlands analysis it is treated as one of the two corporate poles of an apparent internal power struggle inside the <a href="/entities/united-arab-emirates">United Arab Emirates</a>, pitted against the Abu Dhabi-based rival AD Ports.[1]</p><h2 id="role-in-the-uae-emirate-rivalry" tabindex="-1">Role in the UAE emirate rivalry <a class="header-anchor" href="#role-in-the-uae-emirate-rivalry" aria-label="Permalink to &quot;Role in the UAE emirate rivalry&quot;">​</a></h2><p>A Financial Times article circulated within Badlands circles focused on the competing development plans of DP World and AD Ports, which commentator <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> read as reinforcing reports that Dubai is in a struggle of sorts with Abu Dhabi, with many of the other emirates siding with Abu Dhabi.[1] The UAE is described as a federal semi-constitutional monarchy of seven emirates, each maintaining its own sovereignty in parallel with the federal government, producing a natural rivalry between the kingdoms.[1]</p><h2 id="sovereign-alliance-framing" tabindex="-1">Sovereign Alliance framing <a class="header-anchor" href="#sovereign-alliance-framing" aria-label="Permalink to &quot;Sovereign Alliance framing&quot;">​</a></h2><p>DP World is said to have been involved in operations in Africa aimed at shifting control of resources away from the global regime toward the <a href="/concepts/sovereign-alliance">Sovereign Alliance</a>.[1] Its longtime chairman and chief executive, <a href="/entities/sultan-ahmed-bin-sulayem">Sultan Ahmed bin Sulayem</a>, was involved in <a href="/entities/donald-trump">President Trump</a>&#39;s original Dubai real estate venture and was executive chairman of Nakheel when that company announced its partnership with the Trump Organization on the forthcoming Trump Tower in Dubai.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Heretical Garbage, Closet Commies, &amp; Fugitive AIs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-cc3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-cc3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dp-world.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dpWorld = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dpWorld as default
};
