import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Sun","description":"","frontmatter":{"title":"The Sun","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","tabloid","journalism"],"sources":["raw/badlands-news-brief-8f0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-sun.md","filePath":"entities/the-sun.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-sun.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-sun" tabindex="-1">The Sun <a class="header-anchor" href="#the-sun" aria-label="Permalink to &quot;The Sun&quot;">​</a></h1><p>The Sun is a British tabloid newspaper whose American edition, The U.S. Sun, publishes celebrity, crime and political coverage. Badlands Media cited the outlet in September 2023 for an exclusive interview with <a href="/entities/errol-musk">Errol Musk</a>.[1]</p><h2 id="errol-musk-interview" tabindex="-1">Errol Musk interview <a class="header-anchor" href="#errol-musk-interview" aria-label="Permalink to &quot;Errol Musk interview&quot;">​</a></h2><p>The U.S. Sun reported that Errol Musk, a retired electromechanical engineer then aged 77, feared that his son <a href="/entities/elon-musk">Elon Musk</a> — described as the world&#39;s richest man — could be assassinated for going up against the US government.[1] The paper noted that Musk, then 52, was weathering legal attacks from the <a href="/entities/department-of-justice">Department of Justice</a> and negative press, and that <a href="/entities/joe-biden">President Joe Biden</a> had suggested in July that &quot;there&#39;s a lot of ways&quot; of investigating the tech tycoon.[1] Errol Musk told the outlet he had previously warned his son to increase his security and that Elon shared the same fear; the paper also recorded Elon Musk&#39;s earlier joke that he could &quot;die in mysterious circumstances.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Turns on COVID, Ukraine &amp; the Establishment Have Begun&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8f0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8f0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-sun.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theSun = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theSun as default
};
