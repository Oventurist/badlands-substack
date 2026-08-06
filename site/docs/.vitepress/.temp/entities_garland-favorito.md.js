import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Garland Favorito","description":"","frontmatter":{"title":"Garland Favorito","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","georgia","election-integrity","activists"],"sources":["raw/badlands-news-brief-03a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/garland-favorito.md","filePath":"entities/garland-favorito.md","lastUpdated":null}');
const _sfc_main = { name: "entities/garland-favorito.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="garland-favorito" tabindex="-1">Garland Favorito <a class="header-anchor" href="#garland-favorito" aria-label="Permalink to &quot;Garland Favorito&quot;">​</a></h1><p>Garland Favorito is a Georgia lobbyist and election-integrity advocate.[1]</p><p>Favorito appeared as a supporter of <a href="/concepts/georgia-house-bill-397">House Bill 397</a> during the Georgia Senate Ethics Committee&#39;s late-night March 2025 hearing on the measure, which would require an election night hand count among other changes to state election administration.[1] Summarizing his case for the bill, Favorito said: &quot;If the elections aren&#39;t right, what else do we have? We rely on the elections to elect the right people, to make the right decisions.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;SCOTUS and Subsidies, Banker Bonuses, and Six More Years of Lindsay Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-03a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-03a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/garland-favorito.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const garlandFavorito = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  garlandFavorito as default
};
