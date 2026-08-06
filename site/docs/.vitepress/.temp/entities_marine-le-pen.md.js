import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marine Le Pen","description":"","frontmatter":{"title":"Marine Le Pen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","national-rally","elections","polling","nationalism"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/marine-le-pen.md","filePath":"entities/marine-le-pen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/marine-le-pen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marine-le-pen" tabindex="-1">Marine Le Pen <a class="header-anchor" href="#marine-le-pen" aria-label="Permalink to &quot;Marine Le Pen&quot;">​</a></h1><p>Marine Le Pen is the French politician associated with the National Rally (Rassemblement National, RN), who in February 2024 became the subject of the first opinion poll ever to show her winning the French presidency in a second round of voting.[1]</p><h2 id="the-2024-ifop-poll" tabindex="-1">The 2024 IFOP poll <a class="header-anchor" href="#the-2024-ifop-poll" aria-label="Permalink to &quot;The 2024 IFOP poll&quot;">​</a></h2><p>In an exclusive poll conducted by IFOP, Le Pen was predicted to defeat Gabriel Attal in the second round of the 2027 presidential election by 51 percent to 49 percent — the first time any poll had shown her securing victory and becoming president.[1] The same poll found she would tie Édouard Philippe at 50 percent apiece.[1] Attal serves as prime minister in the <a href="/entities/emmanuel-macron">Macron</a> government, and the poll drew front-page coverage in France.[1]</p><p>The result had been foreshadowed by political scientist Jérôme Fourquet, who told Le JDD in July 2022 that &quot;we can&#39;t rule out a Marine Le Pen victory in 2027,&quot; citing figures published by his own institute, Ifop.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/marine-le-pen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marineLePen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marineLePen as default
};
