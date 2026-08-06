import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hesder Yeshivas","description":"","frontmatter":{"title":"Hesder Yeshivas","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","religious-zionism","idf","military-recruitment","yeshiva"],"sources":["raw/badlands-brief-029.md"],"confidence":"low"},"headers":[],"relativePath":"entities/hesder-yeshivas.md","filePath":"entities/hesder-yeshivas.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hesder-yeshivas.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hesder-yeshivas" tabindex="-1">Hesder Yeshivas <a class="header-anchor" href="#hesder-yeshivas" aria-label="Permalink to &quot;Hesder Yeshivas&quot;">​</a></h1><p><strong>Hesder yeshivas</strong> are Israeli religious institutions that combine Talmudic study with military service, supplying a large share of the <a href="/entities/israel-defense-forces">Israel Defense Forces</a>&#39; combat soldiers and officers.[1]</p><h2 id="_2026-armored-corps-boycott-threat" tabindex="-1">2026 Armored Corps boycott threat <a class="header-anchor" href="#_2026-armored-corps-boycott-threat" aria-label="Permalink to &quot;2026 Armored Corps boycott threat&quot;">​</a></h2><p>In June 2026, the leaders of twelve Hesder yeshivas reportedly threatened to stop sending students to Armored Corps units in response to an IDF pilot programme integrating female soldiers into tank crews.[1] The IDF subsequently stated that men and women would not serve inside the same tanks, while insisting it still &quot;needs every male and female combat soldier.&quot;[1]</p><p>The threat was politically consequential precisely because Hesder graduates are heavily represented in Israeli combat units and the officer corps, meaning a boycott of armored service would carry real weight for military recruitment.[1] The rabbis argued that integration would produce an exodus from the IDF, with soldiers ending their tenure rather than extending their careers, at a moment when <a href="/entities/israel">Israel</a> cannot afford to lose experienced personnel.[1] Their stance stood against an April 2026 ruling by Israel&#39;s High Court of Justice ordering the IDF to proceed with integration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mixed Gender Crews, Trafficking Stings, &amp; Shadow Cabal Reruns&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-029" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-029</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hesder-yeshivas.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hesderYeshivas = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hesderYeshivas as default
};
