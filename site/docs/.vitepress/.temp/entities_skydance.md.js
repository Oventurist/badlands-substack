import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Skydance","description":"","frontmatter":{"title":"Skydance","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","hollywood","paramount","mergers"],"sources":["raw/badlands-brief-7c6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/skydance.md","filePath":"entities/skydance.md","lastUpdated":null}');
const _sfc_main = { name: "entities/skydance.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="skydance" tabindex="-1">Skydance <a class="header-anchor" href="#skydance" aria-label="Permalink to &quot;Skydance&quot;">​</a></h1><p>Skydance is the entertainment company that owns <a href="/entities/paramount-global">Paramount</a> following its acquisition of the studio.[1]</p><h2 id="_2026-consolidation-talks" tabindex="-1">2026 consolidation talks <a class="header-anchor" href="#_2026-consolidation-talks" aria-label="Permalink to &quot;2026 consolidation talks&quot;">​</a></h2><p>In February 2026, <a href="/entities/warner-bros-discovery">Warner Bros. Discovery</a> reopened takeover talks with Skydance-owned Paramount after receiving a waiver from <a href="/entities/netflix">Netflix</a>, while continuing to back its merger agreement with Netflix.[1] Because Paramount holds broadcast assets — including <a href="/entities/cbs">CBS</a> — and their associated licenses, any resulting transaction would require regulatory approval.[1]</p><p>Commentary in the <a href="/concepts/badlands-brief">Badlands Brief</a> situated the renewed talks within a broader pattern of legacy studios centralizing in response to the democratization of content production and distribution, including disputes over AI-generated content and intellectual property.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Democratization of Narrative Distribution. And a New War with Iran.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/skydance.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skydance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  skydance as default
};
