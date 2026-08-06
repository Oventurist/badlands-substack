import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andrej Babiš","description":"","frontmatter":{"title":"Andrej Babiš","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["czech-republic","european-union","hungary","elections"],"sources":["raw/badlands-brief-949.md"],"confidence":"low"},"headers":[],"relativePath":"entities/andrej-babis.md","filePath":"entities/andrej-babis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andrej-babis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andrej-babis" tabindex="-1">Andrej Babiš <a class="header-anchor" href="#andrej-babis" aria-label="Permalink to &quot;Andrej Babiš&quot;">​</a></h1><p>Andrej Babiš is a Czech politician who publicly backed Hungarian Prime Minister <a href="/entities/viktor-orban">Viktor Orbán</a> ahead of Hungary&#39;s 2026 parliamentary election.[1]</p><p>His endorsement, alongside that of Slovak Prime Minister <a href="/entities/robert-fico">Robert Fico</a>, aligned him with Orbán&#39;s positions in the bloc&#39;s disputes with the <a href="/entities/european-union">European Union</a> over Russia policy, sanctions, and military support for <a href="/entities/ukraine">Ukraine</a>.[1] Orbán nonetheless conceded defeat to <a href="/entities/peter-magyar">Péter Magyar</a>&#39;s <a href="/entities/tisza-party">Tisza</a> party.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Exposes Traitors; Peace Talks in Pakistan&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-949" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-949</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andrej-babis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andrejBabis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andrejBabis as default
};
