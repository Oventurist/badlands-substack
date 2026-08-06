import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Institutional Revolutionary Party (PRI)","description":"","frontmatter":{"title":"Institutional Revolutionary Party (PRI)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","politics","corruption"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pri.md","filePath":"entities/pri.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pri.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="institutional-revolutionary-party-pri" tabindex="-1">Institutional Revolutionary Party (PRI) <a class="header-anchor" href="#institutional-revolutionary-party-pri" aria-label="Permalink to &quot;Institutional Revolutionary Party (PRI)&quot;">​</a></h1><p>The Institutional Revolutionary Party, known by its Spanish initials PRI, was the party that ruled Mexico during the events described in the Badlands Media account.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>Its secretary general and second-ranking official, <a href="/entities/jose-francisco-ruiz-massieu">José Francisco Ruiz Massieu</a>, was assassinated in September 1994 in a killing whose &quot;intellectual author&quot; a federal judge found to be <a href="/entities/raul-salinas">Raúl Salinas</a>, brother of the sitting PRI president Carlos Salinas de Gortari.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> When <a href="/entities/mario-ruiz-massieu">Mario Ruiz Massieu</a> resigned as special prosecutor over the case, he said his investigation was being blocked by ruling-party power brokers — placing the party apparatus itself inside the cover-up.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The article presents the episode as an illustration of the <a href="/entities/salinas-family">Salinas family</a>&#39;s capture of Mexican state institutions on behalf of the <a href="/entities/gulf-cartel">Gulf Cartel</a>.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pri.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pri = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pri as default
};
