import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Standard Oil","description":"","frontmatter":{"title":"Standard Oil","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["antitrust","rockefeller","monopoly","supreme-court"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/standard-oil.md","filePath":"entities/standard-oil.md","lastUpdated":null}');
const _sfc_main = { name: "entities/standard-oil.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="standard-oil" tabindex="-1">Standard Oil <a class="header-anchor" href="#standard-oil" aria-label="Permalink to &quot;Standard Oil&quot;">​</a></h1><p><strong>Standard Oil</strong> was the Rockefeller oil monopoly broken up in 1911 after the U.S. Supreme Court ruled it in violation of federal antitrust laws, splitting it into 34 separate entities.<a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">[1]</a></p><h2 id="relevance-to-modern-concentration" tabindex="-1">Relevance to modern concentration <a class="header-anchor" href="#relevance-to-modern-concentration" aria-label="Permalink to &quot;Relevance to modern concentration&quot;">​</a></h2><p>In <em>America Has a CIA-Run Economy</em>, <a href="/entities/erik-carlson">Erik Carlson</a> invokes the Standard Oil breakup as a precedent when asking whether antitrust action is the path forward for limiting the power and influence that the top 1% of publicly traded American companies now exert over the economy and society.<a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">[1]</a> He expects that going forward some mega-corporations will indeed be broken up into smaller companies.<a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;America Has a CIA-Run Economy&quot;, URL: <a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">https://badlands.substack.com/p/america-has-a-cia-run-economy</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/standard-oil.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const standardOil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  standardOil as default
};
