import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fidesz","description":"","frontmatter":{"title":"Fidesz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hungary","elections","european-union","orban"],"sources":["raw/badlands-brief-949.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/fidesz.md","filePath":"entities/fidesz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fidesz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fidesz" tabindex="-1">Fidesz <a class="header-anchor" href="#fidesz" aria-label="Permalink to &quot;Fidesz&quot;">​</a></h1><p>Fidesz is the Hungarian governing party led by <a href="/entities/viktor-orban">Viktor Orbán</a> for the sixteen years preceding the 2026 parliamentary election.[1]</p><p>In that election Fidesz was defeated by <a href="/entities/peter-magyar">Péter Magyar</a>&#39;s <a href="/entities/tisza-party">Tisza</a> party, which led roughly 52% to 39% at the time Orbán conceded and congratulated Magyar.[1] The party&#39;s tenure in government had been marked by repeated disputes with the <a href="/entities/european-union">European Union</a> over Russia policy, sanctions, and military support for <a href="/entities/ukraine">Ukraine</a>.[1] Ahead of the vote, Orbán received public backing from Czech politician Andrej Babiš and Slovak Prime Minister <a href="/entities/robert-fico">Robert Fico</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Exposes Traitors; Peace Talks in Pakistan&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-949" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-949</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fidesz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fidesz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fidesz as default
};
