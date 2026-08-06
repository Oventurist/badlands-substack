import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steve Marshall","description":"","frontmatter":{"title":"Steve Marshall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["alabama","attorney-general","election-fraud"],"sources":["raw/badlands-news-brief-2e8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/steve-marshall.md","filePath":"entities/steve-marshall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steve-marshall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steve-marshall" tabindex="-1">Steve Marshall <a class="header-anchor" href="#steve-marshall" aria-label="Permalink to &quot;Steve Marshall&quot;">​</a></h1><p>Steve Marshall is the Attorney General of Alabama.[1] His office was involved in the August 2023 voter-fraud case against state Representative <a href="/entities/david-cole">David Cole</a> (R-Huntsville), who was arrested on charges of fraud by voting at multiple or unauthorized locations stemming from complaints about the 2022 election.[1] At the time of reporting the full extent of the charges brought against Cole remained unclear.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Rise and Fall of the Warmongers ... And More&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steve-marshall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steveMarshall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  steveMarshall as default
};
