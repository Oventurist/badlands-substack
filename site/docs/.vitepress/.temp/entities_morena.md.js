import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Morena","description":"","frontmatter":{"title":"Morena","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","political-party","elections"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/morena.md","filePath":"entities/morena.md","lastUpdated":null}');
const _sfc_main = { name: "entities/morena.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="morena" tabindex="-1">Morena <a class="header-anchor" href="#morena" aria-label="Permalink to &quot;Morena&quot;">​</a></h1><p>Morena is the Mexican left-populist political party founded around <a href="/entities/andres-manuel-lopez-obrador">Andrés Manuel López Obrador</a> and the vehicle for <a href="/entities/claudia-sheinbaum">Claudia Sheinbaum</a>&#39;s successful 2024 presidential campaign.[1]</p><p>In the June 2, 2024 general election, Sheinbaum — López Obrador&#39;s favored successor — won between 58.3 percent and 60.7 percent of the vote according to the National Electoral Institute, defeating opposition candidate <a href="/entities/xochitl-galvez">Xóchitl Gálvez</a> and Jorge Álvarez Máynez.[1] Morena was also projected to hold its majorities in both chambers of Mexico&#39;s Congress, giving the incoming administration broad legislative control.[1] Sheinbaum pledged to continue the direction set by the outgoing populist leftist leader while offering a contrasting personal style.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/morena.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const morena = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  morena as default
};
