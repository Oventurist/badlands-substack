import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nick Sortor","description":"","frontmatter":{"title":"Nick Sortor","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","immigration-enforcement"],"sources":["raw/badlands-brief-e3b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/nick-sortor.md","filePath":"entities/nick-sortor.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nick-sortor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nick-sortor" tabindex="-1">Nick Sortor <a class="header-anchor" href="#nick-sortor" aria-label="Permalink to &quot;Nick Sortor&quot;">​</a></h1><p>Nick Sortor is an independent investigative journalist active in coverage of US immigration enforcement disputes.[1]</p><p>In January 2026 Sortor released video showing that a Hampton Inn by Hilton franchise in Lakeville, Minnesota, was continuing to deny service to federal immigration agents despite earlier assurances that the dispute had been resolved.[1] The footage contributed to the escalation of the controversy and preceded <a href="/entities/hilton-worldwide">Hilton</a>&#39;s termination of the property&#39;s franchise agreement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mad-Lad Maduro, Media Meltdowns &amp; Weapons of the Future&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nick-sortor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nickSortor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nickSortor as default
};
