import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Julian's Rum","description":"","frontmatter":{"title":"Julian's Rum","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["anon","q","research","badlands"],"sources":["raw/badlands-news-brief-36a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/julians-rum.md","filePath":"entities/julians-rum.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/julians-rum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="julian-s-rum" tabindex="-1">Julian&#39;s Rum <a class="header-anchor" href="#julian-s-rum" aria-label="Permalink to &quot;Julian&#39;s Rum&quot;">​</a></h1><p>Julian&#39;s Rum is an anonymous researcher and social-media figure described by <a href="/entities/badlands-media">Badlands Media</a> as a &quot;friend of Badlands&quot; and as &quot;one of the best Anons still in the game.&quot;[1]</p><p>In August 2024, Julian&#39;s Rum resurfaced a <a href="/concepts/qanon">Q</a> drop from 2020 concerning a last-minute change to the Democratic convention — a change ostensibly made under the guise of COVID-19 measures at the time — arguing that the drop had returned to relevance amid the revived monkeypox narrative and the <a href="/concepts/2024-mpox-global-health-emergency">2024 mpox global health emergency</a>.[1] He was himself responding to a viral Wall Street Silver post pointing to what it characterized as an obvious propaganda push around monkeypox in the preceding weeks, at a moment when some officials were calling for the <a href="/concepts/2024-democratic-national-convention">2024 Democratic National Convention</a> to be delayed or cancelled on public-health grounds.[1]</p><p><a href="/entities/burning-bright">Burning Bright</a> praised the find as &quot;a fantastic example of dot-connecting,&quot; while saying he personally would not expect the DNC to actually be delayed or cancelled, and read the narrative push as evidence of &quot;a true panic pattern developing for the <a href="/concepts/deep-state">Deep State</a>&quot; ahead of what should have been its coronation of the next candidate.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Monkeypox ... For Real? And Other Info War Oddities&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-36a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-36a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/julians-rum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const juliansRum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  juliansRum as default
};
