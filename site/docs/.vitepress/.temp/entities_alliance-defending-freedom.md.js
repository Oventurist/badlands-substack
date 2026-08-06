import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alliance Defending Freedom","description":"","frontmatter":{"title":"Alliance Defending Freedom","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["legal","religious-liberty","litigation","arizona"],"sources":["raw/badlands-news-brief-860.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alliance-defending-freedom.md","filePath":"entities/alliance-defending-freedom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alliance-defending-freedom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alliance-defending-freedom" tabindex="-1">Alliance Defending Freedom <a class="header-anchor" href="#alliance-defending-freedom" aria-label="Permalink to &quot;Alliance Defending Freedom&quot;">​</a></h1><p><strong>Alliance Defending Freedom</strong> is an Arizona-based legal organization that litigates religious-liberty and free-expression cases in American courts.[1] The firm represented Colorado baker <a href="/entities/jack-phillips">Jack Phillips</a> in the transgender-cake case brought by attorney <a href="/entities/autumn-scardina">Autumn Scardina</a> against his bakery, <a href="/entities/masterpiece-cakeshop">Masterpiece Cakeshop</a>.[1]</p><p>After the <a href="/entities/colorado-supreme-court">Colorado Supreme Court</a> dismissed the case on procedural grounds in a 4–3 decision on October 8, 2024, Phillips&#39;s attorney Jake Werner of the organization said his client had been pursued and mocked for years by those who disagreed with him, adding: &quot;Enough is enough. Jack has been dragged through courts for over a decade. It&#39;s time to leave him alone.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Harris Gets Rattled as Storms Gather&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-860" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-860</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alliance-defending-freedom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const allianceDefendingFreedom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  allianceDefendingFreedom as default
};
