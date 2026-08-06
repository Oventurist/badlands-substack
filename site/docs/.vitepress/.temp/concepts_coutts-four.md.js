import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Coutts 4","description":"","frontmatter":{"title":"Coutts 4","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["canada","freedom-convoy","prosecution","remand","alberta"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/coutts-four.md","filePath":"concepts/coutts-four.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/coutts-four.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="coutts-4" tabindex="-1">Coutts 4 <a class="header-anchor" href="#coutts-4" aria-label="Permalink to &quot;Coutts 4&quot;">​</a></h1><p>The Coutts 4 are four men who led a border-crossing protest at Coutts, Alberta during the 2022 <a href="/concepts/freedom-convoy">Freedom Convoy</a> and were subsequently imprisoned for two years without trial.[1]</p><p>Badlands writer <a href="/entities/simon-esler">Simon Esler</a> described the case as one of the most important coming out of the convoy, noting that he had interviewed the only journalist in Canada covering it.[1] Two of the four were released in early 2024, and — most significantly — the charges alleging a plot to kill an RCMP officer were dropped.[1]</p><p>Esler argued the dropped charges were consequential on two fronts: they had been the stated justification for holding the men in remand, or pre-trial imprisonment, for two years, and they had also been one of the narratives promoted in Canadian legacy media to justify the invocation of the <a href="/concepts/emergencies-act">Emergencies Act</a>.[1] The case forms part of what Esler characterized as a broader Canadian <a href="/concepts/lawfare">lawfare</a> front in which rulings against the public are repeatedly exposed as corrupt government operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/coutts-four.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const couttsFour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  couttsFour as default
};
