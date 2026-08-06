import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Haywood Talcove","description":"","frontmatter":{"title":"Haywood Talcove","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doge","fraud","identity-verification","congressional-testimony"],"sources":["raw/badlands-news-brief-048.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/haywood-talcove.md","filePath":"entities/haywood-talcove.md","lastUpdated":null}');
const _sfc_main = { name: "entities/haywood-talcove.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="haywood-talcove" tabindex="-1">Haywood Talcove <a class="header-anchor" href="#haywood-talcove" aria-label="Permalink to &quot;Haywood Talcove&quot;">​</a></h1><p>Haywood Talcove is the chief executive of <a href="/entities/lexisnexis">LexisNexis</a> and a witness at the <a href="/entities/doge">DOGE</a> hearing held in February 2025.[1]</p><h2 id="testimony-on-identity-verification-savings" tabindex="-1">Testimony on identity verification savings <a class="header-anchor" href="#testimony-on-identity-verification-savings" aria-label="Permalink to &quot;Testimony on identity verification savings&quot;">​</a></h2><p>Testifying on Friday, February 14, 2025, Talcove stated that the United States could save $1 trillion per year simply by verifying the identities of benefit recipients.[1] Badlands writer <a href="/entities/canncon">CannCon</a> treated the figure as convergent with long-standing election-integrity claims, noting the parallel to <a href="/entities/elon-musk">Elon Musk</a>&#39;s post that 400 million Americans appeared eligible for Social Security in a country of roughly 340 million people, and asking whether that pattern sounded like the voter rolls.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Meddling Musk &amp; Sanctions for Soros&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-048" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-048</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/haywood-talcove.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const haywoodTalcove = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  haywoodTalcove as default
};
