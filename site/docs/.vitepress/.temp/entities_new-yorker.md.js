import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The New Yorker","description":"","frontmatter":{"title":"The New Yorker","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","magazine","journalism"],"sources":["raw/badlands-news-brief-8f0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/new-yorker.md","filePath":"entities/new-yorker.md","lastUpdated":null}');
const _sfc_main = { name: "entities/new-yorker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-new-yorker" tabindex="-1">The New Yorker <a class="header-anchor" href="#the-new-yorker" aria-label="Permalink to &quot;The New Yorker&quot;">​</a></h1><p>The New Yorker is an American magazine known for long-form reporting and cultural criticism. In Badlands Media&#39;s coverage it appears as the publisher of <a href="/entities/ronan-farrow">Ronan Farrow</a>&#39;s September 2023 investigative profile &quot;Elon Musk&#39;s Shadow Rule.&quot;[1]</p><h2 id="coverage-of-elon-musk" tabindex="-1">Coverage of Elon Musk <a class="header-anchor" href="#coverage-of-elon-musk" aria-label="Permalink to &quot;Coverage of Elon Musk&quot;">​</a></h2><p>The magazine&#39;s piece argued that <a href="/entities/elon-musk">Elon Musk</a>&#39;s &quot;influence is more brazen and expansive&quot; than earlier forms of oligarchic meddling in the fate of nations, publishing at a moment when Musk faced legal pressure from the <a href="/entities/department-of-justice">Department of Justice</a>.[1] <a href="/entities/errol-musk">Errol Musk</a> characterized the article as &quot;a hit job, a shadow government-sponsored opening salvo&quot; against his son, framing it as narrative preparation for a more direct attack.[1] Badlands cited the episode as an example of establishment media outlets being used as instruments in the <a href="/concepts/information-war">Information War</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Turns on COVID, Ukraine &amp; the Establishment Have Begun&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8f0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8f0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/new-yorker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newYorker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newYorker as default
};
