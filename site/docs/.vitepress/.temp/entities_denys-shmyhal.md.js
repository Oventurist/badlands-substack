import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Denys Shmyhal","description":"","frontmatter":{"title":"Denys Shmyhal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","defense","uk"],"sources":["raw/badlands-news-brief-592.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/denys-shmyhal.md","filePath":"entities/denys-shmyhal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/denys-shmyhal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="denys-shmyhal" tabindex="-1">Denys Shmyhal <a class="header-anchor" href="#denys-shmyhal" aria-label="Permalink to &quot;Denys Shmyhal&quot;">​</a></h1><p>Denys Shmyhal is Ukraine&#39;s Defence Minister, previously the country&#39;s prime minister.[1]</p><h2 id="reception-of-the-uk-defence-secretary" tabindex="-1">Reception of the UK Defence Secretary <a class="header-anchor" href="#reception-of-the-uk-defence-secretary" aria-label="Permalink to &quot;Reception of the UK Defence Secretary&quot;">​</a></h2><p>On September 3, 2025, Shmyhal announced on X that UK Defence Secretary <a href="/entities/john-healey">John Healey</a> had arrived in Kyiv on an official visit, receiving his British counterpart at a railway station in the capital — the standard arrival point for Western officials travelling into Ukraine overland.[1] The visit was reported by European Pravda and Ukrainska Pravda and came during a period of intensified diplomacy over the war, as President <a href="/entities/vladimir-putin">Vladimir Putin</a> warned that Russia would pursue its objectives militarily if no peace agreement was reached.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Annexes, Envoys, &amp; Warmongers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-592" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-592</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/denys-shmyhal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const denysShmyhal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  denysShmyhal as default
};
