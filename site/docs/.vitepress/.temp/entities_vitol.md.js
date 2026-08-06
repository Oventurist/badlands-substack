import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vitol","description":"","frontmatter":{"title":"Vitol","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["commodities","oil-trading","venezuela","corruption"],"sources":["raw/badlands-brief-577.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/vitol.md","filePath":"entities/vitol.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vitol.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vitol" tabindex="-1">Vitol <a class="header-anchor" href="#vitol" aria-label="Permalink to &quot;Vitol&quot;">​</a></h1><p>Vitol is one of the largest commodity trading firms in the world. In January 2026 it was reported that President <a href="/entities/donald-trump">Donald Trump</a> had called on Vitol and its rival <a href="/entities/trafigura">Trafigura</a> to begin brokering deals with potential buyers of <a href="/entities/venezuela">Venezuelan</a> oil as the post-Maduro government moved to reopen the country&#39;s petroleum sector to foreign investment.[1]</p><h2 id="venezuela-litigation-and-scandal-potential" tabindex="-1">Venezuela litigation and scandal potential <a class="header-anchor" href="#venezuela-litigation-and-scandal-potential" aria-label="Permalink to &quot;Venezuela litigation and scandal potential&quot;">​</a></h2><p>Both Vitol and Trafigura were named as defendants in a lawsuit filed by former Venezuelan President <a href="/entities/nicolas-maduro">Nicolás Maduro</a> in United States and Swiss courts in March 2018, and both companies have had executives arrested on corruption charges.[1] Badlands commentator <a href="/entities/ghost-of-patrick-henry">GhostofBasedPatrickHenry</a> argued that once these brokerage firms and their banks begin circulating money for new Venezuelan oil deals, banking regulators could be triggered to file Suspicious Activity Reports if funds move in patterns that differ from those described in the 2018 litigation — a scenario he speculated could place severe strain on the transnational central banking system.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;ICE Getting Boiled, Chinese Coup Chaos, &amp; Carney Bends The Knee&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-577" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-577</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vitol.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vitol = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vitol as default
};
