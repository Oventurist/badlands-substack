import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ben Christman","description":"","frontmatter":{"title":"Ben Christman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sports","sudden-deaths","college-football"],"sources":["raw/badlands-news-brief-7b8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ben-christman.md","filePath":"entities/ben-christman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ben-christman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ben-christman" tabindex="-1">Ben Christman <a class="header-anchor" href="#ben-christman" aria-label="Permalink to &quot;Ben Christman&quot;">​</a></h1><p>Ben Christman was an American college football offensive lineman who died on February 11, 2025 at the age of 21.[1]</p><h2 id="death" tabindex="-1">Death <a class="header-anchor" href="#death" aria-label="Permalink to &quot;Death&quot;">​</a></h2><p>Christman, a senior offensive lineman at the <a href="/entities/university-of-nevada-las-vegas">University of Nevada, Las Vegas</a>, was found dead in an off-campus apartment on Tuesday morning, February 11, 2025; the university announced the death the following day.[1] UNLV said it had no other details at the time and that the cause of death would be released by the Clark County Coroner&#39;s Office in Nevada.[1] The university informed Christman&#39;s family and the football team and made counseling available to those in mourning.[1]</p><p>Christman had transferred to UNLV that offseason after spending the previous two years at Kentucky, where he appeared in 12 games on special teams in his final season there.[1]</p><p>The <a href="/concepts/badlands-news-brief">Badlands News Brief</a> carried the New York Times Athletic report among its bonus items, in keeping with the outlet&#39;s ongoing tracking of sudden deaths among young athletes.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: MAHA, Modi, Musk, &amp; Munich&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7b8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7b8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ben-christman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benChristman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benChristman as default
};
