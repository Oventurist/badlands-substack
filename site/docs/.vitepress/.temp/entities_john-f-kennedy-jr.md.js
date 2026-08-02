import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John F. Kennedy Jr.","description":"","frontmatter":{"title":"John F. Kennedy Jr.","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["kennedy","new-york","plane-crash","hillary-clinton"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/john-f-kennedy-jr.md","filePath":"entities/john-f-kennedy-jr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-f-kennedy-jr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-f-kennedy-jr" tabindex="-1">John F. Kennedy Jr. <a class="header-anchor" href="#john-f-kennedy-jr" aria-label="Permalink to &quot;John F. Kennedy Jr.&quot;">​</a></h1><p>John F. Kennedy Jr. (1960–1999) was the son of President John F. Kennedy and Jacqueline Kennedy Onassis. In the Badlands Media article &quot;A Conflict of Interest,&quot; he is presented as a victim of the same covert network the source describes as controlling U.S. politics through money and violence.</p><p>According to the article, JFK Jr. was planning to run for the U.S. Senate in New York and had higher political aspirations. The source claims he was &quot;loved by the American people&quot; and was aware of the enemy&#39;s identity because &quot;they had murdered his father.&quot; The article asserts that his plane was sabotaged and that his death was not an accident, arguing that the enemy eliminated him to prevent him from reaching power. It further claims that <a href="/entities/hillary-clinton">Hillary Clinton</a> was running for the same Senate seat at the time, had no realistic chance of defeating him, and that his unexpected death cleared her path to the seat.</p><p>The source uses JFK Jr.&#39;s death as an early example of the pattern it identifies throughout American political history: popular outsiders who threaten the hidden network are eliminated before they can disrupt the flow of money and power. The article states that <a href="/entities/donald-trump">Donald Trump</a> never forgot what was done to his friend and that &quot;payback is coming.&quot;</p><p>These claims about sabotage and political assassination are interpretive and are not supported by the mainstream historical record, which attributes the 1999 plane crash to pilot error and spatial disorientation.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-f-kennedy-jr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnFKennedyJr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnFKennedyJr as default
};
