import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Juan Guaidó","description":"","frontmatter":{"title":"Juan Guaidó","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","opposition","essequibo","politics"],"sources":["raw/badlands-news-brief-65a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/juan-guaido.md","filePath":"entities/juan-guaido.md","lastUpdated":null}');
const _sfc_main = { name: "entities/juan-guaido.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="juan-guaido" tabindex="-1">Juan Guaidó <a class="header-anchor" href="#juan-guaido" aria-label="Permalink to &quot;Juan Guaidó&quot;">​</a></h1><p>Juan Guaidó is a Venezuelan opposition politician and former head of the country&#39;s National Assembly.[1]</p><h2 id="essequibo-arrest-warrant" tabindex="-1">Essequibo arrest warrant <a class="header-anchor" href="#essequibo-arrest-warrant" aria-label="Permalink to &quot;Essequibo arrest warrant&quot;">​</a></h2><p>In December 2023, as <a href="/entities/nicolas-maduro">Nicolás Maduro</a> moved to annex the oil-rich Essequibo region of <a href="/entities/guyana">Guyana</a> following a Sunday referendum, Venezuela&#39;s Prosecutor&#39;s Office issued arrest warrants for a dozen opposition members, including Guaidó.[1] Also targeted were three staff members of opposition presidential candidate <a href="/entities/maria-corina-machado">María Corina Machado</a>, charged with conspiring against the referendum.[1]</p><p>The warrants accompanied Maduro&#39;s placement of the disputed territory under military jurisdiction, a step that jeopardized <a href="/entities/exxonmobil">Exxon</a> and <a href="/entities/chevron">Chevron</a> operations there, while Guyana conducted joint military drills with the United States.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hunter Hunted, Swamp Exposed &amp; Proxies Disabled&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-65a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-65a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/juan-guaido.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const juanGuaido = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  juanGuaido as default
};
