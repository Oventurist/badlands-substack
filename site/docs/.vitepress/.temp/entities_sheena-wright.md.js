import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sheena Wright","description":"","frontmatter":{"title":"Sheena Wright","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york-city","deputy-mayor","ngo","federal-investigation"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sheena-wright.md","filePath":"entities/sheena-wright.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sheena-wright.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sheena-wright" tabindex="-1">Sheena Wright <a class="header-anchor" href="#sheena-wright" aria-label="Permalink to &quot;Sheena Wright&quot;">​</a></h1><p>Sheena Wright is a lawyer and Deputy Mayor of New York City in the administration of <a href="/entities/eric-adams">Eric Adams</a> whose home was raided by federal agents in September 2024 alongside those of other senior city officials.[1]</p><p>Wright previously served on the city&#39;s Education Sector Advisory Council and on the state&#39;s New York Forward Re-Opening Advisory Board.[1] She is engaged to <a href="/entities/david-banks">David Banks</a>, the Commissioner of Schools and brother of Deputy Mayor for Public Safety <a href="/entities/philip-banks-iii">Philip Banks III</a>.[1]</p><p>Badlands cited Wright&#39;s combination of deputy-mayoral authority, advisory-board service, and family ties to the Banks brothers as part of the pattern of NGO-and-government overlap it described as corruption within public-private partnership in New York City, a scandal that also produced the resignation of Police Commissioner <a href="/entities/edward-caban">Edward Caban</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sheena-wright.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sheenaWright = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sheenaWright as default
};
