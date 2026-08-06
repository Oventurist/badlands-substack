import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alawites","description":"","frontmatter":{"title":"Alawites","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","levant","ethnic-groups","minorities"],"sources":["raw/badlands-news-brief-02a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alawites.md","filePath":"entities/alawites.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alawites.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alawites" tabindex="-1">Alawites <a class="header-anchor" href="#alawites" aria-label="Permalink to &quot;Alawites&quot;">​</a></h1><p>The Alawites are a religious minority community in <a href="/entities/syria">Syria</a>, historically associated with the ruling establishment under <a href="/entities/bashar-al-assad">Bashar al-Assad</a>.[1]</p><h2 id="role-in-the-syria-balkanization-thesis" tabindex="-1">Role in the Syria balkanization thesis <a class="header-anchor" href="#role-in-the-syria-balkanization-thesis" aria-label="Permalink to &quot;Role in the Syria balkanization thesis&quot;">​</a></h2><p>In Badlands commentary accompanying the April 2025 report on Israeli–Turkish deconfliction talks, the Alawites were named alongside the <a href="/entities/druze">Druze</a> and the <a href="/entities/kurds">Kurds</a> as one of the competing ethnic groups whose historic rivalries the <a href="/concepts/davids-corridor">David&#39;s Corridor</a> strategy would exploit in order to balkanize Syria and prevent a unified coalition on the model of <a href="/entities/hezbollah">Hezbollah</a> in southern Lebanon.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: World Wealth Whiplash &amp; The Most Secure Memorandum in History&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-02a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-02a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alawites.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alawites = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alawites as default
};
