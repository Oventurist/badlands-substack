import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Liz Magill","description":"","frontmatter":{"title":"Liz Magill","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["academia","antisemitism","congress","resignation"],"sources":["raw/badlands-news-brief-220.md"],"confidence":"high"},"headers":[],"relativePath":"entities/liz-magill.md","filePath":"entities/liz-magill.md","lastUpdated":null}');
const _sfc_main = { name: "entities/liz-magill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="liz-magill" tabindex="-1">Liz Magill <a class="header-anchor" href="#liz-magill" aria-label="Permalink to &quot;Liz Magill&quot;">​</a></h1><p>Liz Magill was president of the <a href="/entities/university-of-pennsylvania">University of Pennsylvania</a> until her resignation in December 2023 in the aftermath of congressional testimony on campus antisemitism.[1]</p><p>Magill was one of three university leaders—alongside <a href="/entities/claudine-gay">Claudine Gay</a> of <a href="/entities/harvard-university">Harvard University</a> and Sally Kornbluth of MIT—called before the House Committee on Education and the Workforce to testify about their institutions&#39; responses to alleged incidents of antisemitism following the Israel–Hamas war.[1] All three gave widely criticized testimony in which they failed to state that calls for the genocide of Jews explicitly violated campus harassment and bullying codes.[1]</p><p>Magill stepped down first. Her departure shifted the spotlight to Gay and Kornbluth; Rep. <a href="/entities/elise-stefanik">Elise Stefanik</a> marked the resignation on X with the post &quot;One down. Two to go.&quot;[1] A bipartisan group of lawmakers subsequently sent a letter to the governing boards of Harvard, Penn, and MIT urging removal of the university leaders.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Trump &amp; Rootin&#39; for Putin?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-220" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-220</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/liz-magill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lizMagill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lizMagill as default
};
