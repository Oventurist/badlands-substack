import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andris Spruds","description":"","frontmatter":{"title":"Andris Spruds","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["latvia","defense-minister","conscription","nato"],"sources":["raw/badlands-news-brief-7d4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andris-spruds.md","filePath":"entities/andris-spruds.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andris-spruds.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andris-spruds" tabindex="-1">Andris Spruds <a class="header-anchor" href="#andris-spruds" aria-label="Permalink to &quot;Andris Spruds&quot;">​</a></h1><p>Andris Spruds is the Defense Minister of <a href="/entities/latvia">Latvia</a> and a member of the Progressives party.[1]</p><p>In September 2025 he told Delfi TV that his party would submit a proposal the following year requiring both men and women to serve in the military from 2028, extending compulsory military service beyond the male-only conscription Riga reintroduced in 2023.[1] He noted that female-specific equipment was already being introduced into the National Armed Forces in preparation for the change.[1] The move aligns Latvia with other <a href="/entities/nato">NATO</a> members expanding their forces in response to what they describe as a Russian threat, and would follow <a href="/entities/denmark">Denmark</a>&#39;s decision to begin drafting women from 2026.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Funding Freezes, Russian Oil, &amp; Imminent Exposes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7d4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7d4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andris-spruds.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andrisSpruds = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andrisSpruds as default
};
