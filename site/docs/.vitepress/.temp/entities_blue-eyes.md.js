import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blue Eyes","description":"","frontmatter":{"title":"Blue Eyes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands","contributor","culture-of-change","commentator"],"sources":["raw/badlands-brief-405.md"],"confidence":"low"},"headers":[],"relativePath":"entities/blue-eyes.md","filePath":"entities/blue-eyes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/blue-eyes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blue-eyes" tabindex="-1">Blue Eyes <a class="header-anchor" href="#blue-eyes" aria-label="Permalink to &quot;Blue Eyes&quot;">​</a></h1><p>Blue Eyes is a Badlands Media contributor and co-host who appears on the program <a href="/entities/culture-of-change">Culture of Change</a> alongside <a href="/entities/ashe-in-america">Ashe in America</a>.[1]</p><h2 id="culture-of-change-discussion-on-ai-february-2026" tabindex="-1">Culture of Change discussion on AI (February 2026) <a class="header-anchor" href="#culture-of-change-discussion-on-ai-february-2026" aria-label="Permalink to &quot;Culture of Change discussion on AI (February 2026)&quot;">​</a></h2><p>Blue Eyes and Ashe in America discussed artificial intelligence&#39;s disruption of every industry on the Monday, February 9, 2026 episode of Culture of Change (episode 138), which Ashe described as &quot;a fun show.&quot;[1] The discussion informed her subsequent written commentary in the Badlands Brief, in which she argued that the ongoing AI transformation will separate companies that harness the technology intelligently from those that chase shiny objects, and that the infrastructure required to platform both outcomes underpins the case for the <a href="/concepts/ai-data-center-compact">AI data center compact</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Agencies Aflutter, Corporate Compacts &amp; Discombobulated Drones&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-405" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-405</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/blue-eyes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blueEyes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blueEyes as default
};
