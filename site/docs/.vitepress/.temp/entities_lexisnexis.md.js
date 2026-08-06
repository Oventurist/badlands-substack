import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LexisNexis","description":"","frontmatter":{"title":"LexisNexis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["data-broker","identity-verification","doge","fraud"],"sources":["raw/badlands-news-brief-048.md"],"confidence":"low"},"headers":[],"relativePath":"entities/lexisnexis.md","filePath":"entities/lexisnexis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lexisnexis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lexisnexis" tabindex="-1">LexisNexis <a class="header-anchor" href="#lexisnexis" aria-label="Permalink to &quot;LexisNexis&quot;">​</a></h1><p>LexisNexis is a data and analytics company whose chief executive, <a href="/entities/haywood-talcove">Haywood Talcove</a>, appeared as a witness at the February 2025 <a href="/entities/doge">DOGE</a> hearing.[1]</p><h2 id="role-in-the-doge-fraud-debate" tabindex="-1">Role in the DOGE fraud debate <a class="header-anchor" href="#role-in-the-doge-fraud-debate" aria-label="Permalink to &quot;Role in the DOGE fraud debate&quot;">​</a></h2><p>Talcove testified on February 14, 2025, that verifying the identities of federal benefit recipients could save roughly $1 trillion per year, a claim Badlands commentary linked to identity- and roll-integrity arguments long made in the election-fraud debate.[1] The company&#39;s identity-verification business is the practical backdrop for that estimate.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Meddling Musk &amp; Sanctions for Soros&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-048" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-048</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lexisnexis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lexisnexis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lexisnexis as default
};
