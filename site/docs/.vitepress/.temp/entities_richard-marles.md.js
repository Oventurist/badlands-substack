import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Richard Marles","description":"","frontmatter":{"title":"Richard Marles","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["australia","defense","foreign-policy"],"sources":["raw/badlands-news-brief-0ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/richard-marles.md","filePath":"entities/richard-marles.md","lastUpdated":null}');
const _sfc_main = { name: "entities/richard-marles.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="richard-marles" tabindex="-1">Richard Marles <a class="header-anchor" href="#richard-marles" aria-label="Permalink to &quot;Richard Marles&quot;">​</a></h1><p>Richard Marles is the Defense Minister of Australia.[1]</p><p>In August 2024, Marles joined Australian Foreign Minister <a href="/entities/penny-wong">Penny Wong</a> in meetings with US Secretary of State <a href="/entities/antony-blinken">Antony Blinken</a> amid intensive American diplomacy aimed at preventing a regional war between <a href="/entities/iran">Iran</a> and <a href="/entities/israel">Israel</a> after the assassinations of <a href="/entities/ismail-haniyeh">Ismail Haniyeh</a> and <a href="/entities/fuad-shukr">Fuad Shukr</a>.[1] Speaking at the conclusion of that meeting, Blinken described Washington as &quot;engaged in intense diplomacy with allies and partners,&quot; having conveyed de-escalation messages directly to both Tehran and Jerusalem.[1] The exchange was reported by the <a href="/entities/times-of-israel">Times of Israel</a> and carried in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Walz Cycle Consumes Itself as Tensions Pause&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/richard-marles.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const richardMarles = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  richardMarles as default
};
