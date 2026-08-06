import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ami Ayalon","description":"","frontmatter":{"title":"Ami Ayalon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","intelligence","shin-bet","gaza"],"sources":["raw/badlands-news-brief-08a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ami-ayalon.md","filePath":"entities/ami-ayalon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ami-ayalon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ami-ayalon" tabindex="-1">Ami Ayalon <a class="header-anchor" href="#ami-ayalon" aria-label="Permalink to &quot;Ami Ayalon&quot;">​</a></h1><p>Ami Ayalon is the former head of the <a href="/entities/shin-bet">Shin Bet</a>, Israel&#39;s domestic security service.[1]</p><p>In an interview in January 2024, Ayalon said he had come to realize that the only way Israel will ever have peace and security is if the Palestinians have hope for the future, advocating a two-state solution.[1] He argued that people who are desperate and without hope will always turn to violence and zealotry as they face their own existential demise.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> endorsed Ayalon&#39;s reasoning, arguing that the more the <a href="/entities/israel-defense-forces">IDF</a> bombs Gaza, the more radicalized vigilantes it creates, with the sentiment spreading beyond Palestine into the wider region and onto American campuses.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Communist Ouroboros Accelerates&quot;, raw/badlands-news-brief-08a.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ami-ayalon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amiAyalon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amiAyalon as default
};
