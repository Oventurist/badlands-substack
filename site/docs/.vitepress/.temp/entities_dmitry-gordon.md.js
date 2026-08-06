import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dmitry Gordon","description":"","frontmatter":{"title":"Dmitry Gordon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","journalism","russia","peace-plan"],"sources":["raw/badlands-news-brief-528.md"],"confidence":"low"},"headers":[],"relativePath":"entities/dmitry-gordon.md","filePath":"entities/dmitry-gordon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dmitry-gordon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dmitry-gordon" tabindex="-1">Dmitry Gordon <a class="header-anchor" href="#dmitry-gordon" aria-label="Permalink to &quot;Dmitry Gordon&quot;">​</a></h1><p>Dmitry Gordon is a leading Ukrainian television journalist.[1] In July 2024 he said he had received details of an alleged Russian peace package from &quot;our intelligence sources,&quot; according to a Daily Mail report relayed in the Badlands News Brief.[1]</p><p>The package described by Gordon reportedly involved <a href="/entities/vladimir-putin">Vladimir Putin</a> offering to share sovereignty over <a href="/entities/crimea">Crimea</a> with <a href="/entities/ukraine">Ukraine</a>, transmitted to Washington via interior minister <a href="/entities/vladimir-kolokoltsev">Vladimir Kolokoltsev</a>.[1] The Russian Telegram channel Gosdumskaya, which claims insider sources in Moscow, separately reported a similar set of Putin demands.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Pushes Back as Peacemakers Posture&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-528" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-528</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dmitry-gordon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dmitryGordon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dmitryGordon as default
};
