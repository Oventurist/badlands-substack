import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Terrence Banks","description":"","frontmatter":{"title":"Terrence Banks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york-city","lobbying","pearl-alliance","contracts"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/terrence-banks.md","filePath":"entities/terrence-banks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/terrence-banks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="terrence-banks" tabindex="-1">Terrence Banks <a class="header-anchor" href="#terrence-banks" aria-label="Permalink to &quot;Terrence Banks&quot;">​</a></h1><p>Terrence Banks is the third of the Banks brothers involved in the September 2024 New York City corruption story, and runs the Pearl Alliance, a firm that represents companies holding contracts worth hundreds of thousands of dollars with a number of city agencies.[1] According to CBS News reporting cited by Badlands, Terrence Banks is not a registered lobbyist.[1]</p><p>His brothers are <a href="/entities/philip-banks-iii">Philip Banks III</a>, the deputy mayor for public safety, and <a href="/entities/david-banks">David Banks</a>, the Commissioner of Schools, whose fiancée <a href="/entities/sheena-wright">Sheena Wright</a> is also a deputy mayor.[1] Badlands treated the arrangement — a family member representing city contractors while two siblings held senior positions inside city government — as a central example of the nepotism and public-private corruption exposed by the federal investigation that also led to the resignation of Police Commissioner <a href="/entities/edward-caban">Edward Caban</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/terrence-banks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terrenceBanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  terrenceBanks as default
};
