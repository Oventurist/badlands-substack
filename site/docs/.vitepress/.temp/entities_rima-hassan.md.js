import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rima Hassan","description":"","frontmatter":{"title":"Rima Hassan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["european-parliament","france","gaza","activism"],"sources":["raw/badlands-news-brief-11d.md"],"confidence":"low"},"headers":[],"relativePath":"entities/rima-hassan.md","filePath":"entities/rima-hassan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rima-hassan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rima-hassan" tabindex="-1">Rima Hassan <a class="header-anchor" href="#rima-hassan" aria-label="Permalink to &quot;Rima Hassan&quot;">​</a></h1><p>Rima Hassan is a French Member of the European Parliament who was aboard the Gaza-bound civilian aid boat Madleen when Israeli naval forces intercepted it in international waters in June 2025.[1] She was detained along with climate activist <a href="/entities/greta-thunberg">Greta Thunberg</a>, Irish actor <a href="/entities/liam-cunningham">Liam Cunningham</a> and the rest of the crew, and was towed with the vessel to the Israeli port of Ashdod before Israel&#39;s Foreign Ministry announced that the passengers were &quot;expected to return to their home countries.&quot;[1] See <a href="/concepts/madleen-flotilla-interception">Madleen flotilla interception</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fake MAGA Break-ups and Based Accelerationism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rima-hassan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rimaHassan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rimaHassan as default
};
