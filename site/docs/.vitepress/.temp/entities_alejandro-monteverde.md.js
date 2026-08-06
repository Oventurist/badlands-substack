import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alejandro Monteverde","description":"","frontmatter":{"title":"Alejandro Monteverde","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["film-director","sound-of-freedom"],"sources":["raw/badlands-news-brief-3f8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/alejandro-monteverde.md","filePath":"entities/alejandro-monteverde.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alejandro-monteverde.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alejandro-monteverde" tabindex="-1">Alejandro Monteverde <a class="header-anchor" href="#alejandro-monteverde" aria-label="Permalink to &quot;Alejandro Monteverde&quot;">​</a></h1><p>Alejandro Monteverde is a film director best known for directing the 2023 anti-child-trafficking film <a href="/concepts/sound-of-freedom">Sound of Freedom</a>, which was made on a $14 million budget and starred <a href="/entities/jim-caviezel">Jim Caviezel</a> as <a href="/entities/tim-ballard">Tim Ballard</a>.[1] The film became the 16th highest-grossing movie of 2023 at the time it passed the $100 million mark, and according to <a href="/entities/variety">Variety</a> was the first independent film to reach that threshold at the North American box office since the start of the COVID-19 pandemic.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;&#39;X&#39; Marks the Spot &amp; Vineyard Mysteries Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alejandro-monteverde.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alejandroMonteverde = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alejandroMonteverde as default
};
