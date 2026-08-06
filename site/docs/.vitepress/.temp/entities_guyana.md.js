import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Guyana","description":"","frontmatter":{"title":"Guyana","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["south-america","oil","territorial-dispute","venezuela","essequibo"],"sources":["raw/badlands-news-brief-65a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/guyana.md","filePath":"entities/guyana.md","lastUpdated":null}');
const _sfc_main = { name: "entities/guyana.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="guyana" tabindex="-1">Guyana <a class="header-anchor" href="#guyana" aria-label="Permalink to &quot;Guyana&quot;">​</a></h1><p>Guyana is a South American state whose western Essequibo region became the focus of a rapidly deteriorating crisis with <a href="/entities/venezuela">Venezuela</a> in December 2023.[1]</p><h2 id="essequibo-crisis" tabindex="-1">Essequibo crisis <a class="header-anchor" href="#essequibo-crisis" aria-label="Permalink to &quot;Essequibo crisis&quot;">​</a></h2><p>The situation in Guyana deteriorated rapidly as Venezuelan President <a href="/entities/nicolas-maduro">Nicolás Maduro</a> issued arrest warrants for opposition politicians challenging his move to annex the oil-rich Essequibo territory.[1] Following a Sunday referendum, Maduro declared the return of Essequibo — some two-thirds of Guyana&#39;s territory — to Venezuela, and officially placed the disputed territory under military jurisdiction.[1] That step put the oil exploration and production operations of <a href="/entities/exxonmobil">Exxon</a> and <a href="/entities/chevron">Chevron</a> at risk.[1]</p><p>Venezuela&#39;s Prosecutor&#39;s Office issued arrest warrants for a dozen opposition members, including former National Assembly head <a href="/entities/juan-guaido">Juan Guaidó</a> and three staff members of opposition presidential candidate <a href="/entities/maria-corina-machado">María Corina Machado</a>, who were charged with conspiring against the referendum to annex Essequibo.[1] The escalation unfolded as Guyana readied for the possibility of invasion and conducted joint military drills with the United States, with U.S. Secretary of State Antony Blinken conveying &quot;unwavering support&quot; for Guyana.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hunter Hunted, Swamp Exposed &amp; Proxies Disabled&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-65a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-65a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/guyana.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const guyana = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  guyana as default
};
