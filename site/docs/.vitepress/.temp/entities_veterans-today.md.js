import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Veterans Today","description":"","frontmatter":{"title":"Veterans Today","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","alternative-media","veterans"],"sources":["raw/badlands-news-brief-6b1.md"],"confidence":"low"},"headers":[],"relativePath":"entities/veterans-today.md","filePath":"entities/veterans-today.md","lastUpdated":null}');
const _sfc_main = { name: "entities/veterans-today.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="veterans-today" tabindex="-1">Veterans Today <a class="header-anchor" href="#veterans-today" aria-label="Permalink to &quot;Veterans Today&quot;">​</a></h1><p><strong>Veterans Today</strong> is an American alternative-media outlet oriented toward military veterans and dissident foreign-policy commentary.[1] Its financial editor, <a href="/entities/mike-harris">Mike Harris</a>, a former 2006 Republican primary candidate for governor of Arizona, has for years traveled to <a href="/entities/afghanistan">Afghanistan</a> in an effort to help the <a href="/entities/taliban">Taliban</a> build a domestic economy capable of insulating Afghans from recruitment by Western intelligence into mercenary groups such as <a href="/entities/isis">ISIS</a> and <a href="/entities/al-qaeda">Al Qaeda</a>.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> cited his interview with Harris in June 2024 as corroboration for accounts of Taliban conduct that diverge sharply from Western corporate press coverage.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Russia, the MSM and El Salvador Call Out Joe Biden&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/veterans-today.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const veteransToday = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  veteransToday as default
};
