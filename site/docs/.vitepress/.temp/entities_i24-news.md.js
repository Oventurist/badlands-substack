import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"i24 News","description":"","frontmatter":{"title":"i24 News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","israel","news-outlet"],"sources":["raw/badlands-news-brief-8ae.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/i24-news.md","filePath":"entities/i24-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/i24-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="i24-news" tabindex="-1">i24 News <a class="header-anchor" href="#i24-news" aria-label="Permalink to &quot;i24 News&quot;">​</a></h1><p>i24 News is an Israel-based international news channel that reports in English, French, and Arabic.[1]</p><h2 id="reporting-on-the-israel–lebanon-ceasefire-track" tabindex="-1">Reporting on the Israel–Lebanon ceasefire track <a class="header-anchor" href="#reporting-on-the-israel–lebanon-ceasefire-track" aria-label="Permalink to &quot;Reporting on the Israel–Lebanon ceasefire track&quot;">​</a></h2><p>In July 2024, i24 News reported that US Special Envoy <a href="/entities/amos-hochstein">Amos Hochstein</a> was close to brokering a deal between Israel and Lebanon, citing a report in the Lebanese newspaper al-Diyar.[1] According to that reporting, Hochstein told French officials that Israeli and Lebanese officials had almost completely agreed on terms to end hostilities, even though the fighting had been between Israel and <a href="/entities/hezbollah">Hezbollah</a> rather than the Lebanese armed forces.[1]</p><p>Quoting Lebanese political sources, the outlet said the core unresolved disputes involved pushing Hezbollah back from the frontier and several border areas under Israeli control.[1] Agreed points included Hezbollah not erecting observation towers along the border and the Lebanese army deploying more extensively in southern Lebanon.[1] Of thirteen territorial disagreements along the border, seven had been resolved, with the Shebaa Farms in the east and segments near Rosh Hanikra in the west remaining contested.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: Vance Takes the Stage as Biden Takes the Basement&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8ae" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8ae</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/i24-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const i24News = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  i24News as default
};
