import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Arsene Pujo","description":"","frontmatter":{"title":"Arsene Pujo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congressman","investigation","money-trust"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/arsene-pujo.md","filePath":"entities/arsene-pujo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/arsene-pujo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="arsene-pujo" tabindex="-1">Arsene Pujo <a class="header-anchor" href="#arsene-pujo" aria-label="Permalink to &quot;Arsene Pujo&quot;">​</a></h1><p>Arsene Pujo was the U.S. Representative who formed the special committee known as the <a href="/entities/pujo-committee">Pujo Committee</a> to investigate the monopoly of <a href="/entities/jp-morgan">J. P. Morgan</a> and New York&#39;s other powerful bankers, after the creation of the <a href="/entities/federal-reserve">Federal Reserve</a> and the <a href="/entities/internal-revenue-service">IRS</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>Pujo left <a href="/entities/congress">Congress</a> in 1913.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> He retained some support in the following years, but nothing came of the committee&#39;s work; the article states that the <a href="/concepts/cabal">cabal</a> squashed the findings and, controlling the media, kept them from the mass public.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/arsene-pujo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const arsenePujo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  arsenePujo as default
};
