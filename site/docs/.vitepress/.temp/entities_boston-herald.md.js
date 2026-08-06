import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Boston Herald","description":"","frontmatter":{"title":"Boston Herald","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","newspaper","massachusetts"],"sources":["raw/badlands-news-brief-3f8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/boston-herald.md","filePath":"entities/boston-herald.md","lastUpdated":null}');
const _sfc_main = { name: "entities/boston-herald.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="boston-herald" tabindex="-1">Boston Herald <a class="header-anchor" href="#boston-herald" aria-label="Permalink to &quot;Boston Herald&quot;">​</a></h1><p>The Boston Herald is a daily newspaper published in Boston, Massachusetts, covering state politics, local government and regional news.[1]</p><h2 id="coverage-of-the-massachusetts-license-law" tabindex="-1">Coverage of the Massachusetts license law <a class="header-anchor" href="#coverage-of-the-massachusetts-license-law" aria-label="Permalink to &quot;Coverage of the Massachusetts license law&quot;">​</a></h2><p>In July 2023 the Herald&#39;s Chris Van Buskirk published data obtained from the <a href="/entities/massachusetts-registry-of-motor-vehicles">Registry of Motor Vehicles</a> showing that roughly 100,000 learner&#39;s permit appointment requests had been placed since the state&#39;s <a href="/concepts/massachusetts-drivers-licenses-for-illegal-aliens">driver&#39;s license law for illegal aliens</a> took effect on July 1, and that the RMV had hired 52 additional employees to cope with the demand.[1] The Herald&#39;s reporting was subsequently picked up by <a href="/entities/breitbart">Breitbart</a> and circulated in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> as evidence of the scale of the policy&#39;s implementation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;&#39;X&#39; Marks the Spot &amp; Vineyard Mysteries Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/boston-herald.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bostonHerald = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bostonHerald as default
};
