import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Druze","description":"","frontmatter":{"title":"Druze","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","levant","ethnic-groups","minorities"],"sources":["raw/badlands-news-brief-02a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/druze.md","filePath":"entities/druze.md","lastUpdated":null}');
const _sfc_main = { name: "entities/druze.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="druze" tabindex="-1">Druze <a class="header-anchor" href="#druze" aria-label="Permalink to &quot;Druze&quot;">​</a></h1><p>The Druze are a religious and ethnic community of the Levant, concentrated in southern <a href="/entities/syria">Syria</a>, Lebanon, and Israel.[1]</p><h2 id="role-in-the-syria-balkanization-thesis" tabindex="-1">Role in the Syria balkanization thesis <a class="header-anchor" href="#role-in-the-syria-balkanization-thesis" aria-label="Permalink to &quot;Role in the Syria balkanization thesis&quot;">​</a></h2><p>Badlands commentary on the Israeli–Turkish deconfliction talks of April 2025 identified the Druze, alongside the <a href="/entities/alawites">Alawites</a> and the <a href="/entities/kurds">Kurds</a>, as one of the competing ethnic groups whose historic conflicts would be exploited under the <a href="/concepts/davids-corridor">David&#39;s Corridor</a> strategy to balkanize Syria and prevent those communities from unifying into a coalition comparable to <a href="/entities/hezbollah">Hezbollah</a> in southern Lebanon.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: World Wealth Whiplash &amp; The Most Secure Memorandum in History&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-02a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-02a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/druze.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const druze = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  druze as default
};
