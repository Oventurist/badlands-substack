import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Karen Read","description":"","frontmatter":{"title":"Karen Read","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["criminal-justice","courts","massachusetts","double-jeopardy"],"sources":["raw/badlands-news-brief-5b4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/karen-read.md","filePath":"entities/karen-read.md","lastUpdated":null}');
const _sfc_main = { name: "entities/karen-read.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="karen-read" tabindex="-1">Karen Read <a class="header-anchor" href="#karen-read" aria-label="Permalink to &quot;Karen Read&quot;">​</a></h1><p>Karen Read is an American woman accused of killing her boyfriend, a police officer, in a Massachusetts case that drew national attention and inspired a documentary series.[1] Her first trial ended in a mistrial in 2024 after a jury failed to reach a unanimous verdict, and she subsequently faced retrial on the same accusations.[1]</p><h2 id="supreme-court-emergency-application" tabindex="-1">Supreme Court emergency application <a class="header-anchor" href="#supreme-court-emergency-application" aria-label="Permalink to &quot;Supreme Court emergency application&quot;">​</a></h2><p>Jury selection in Read&#39;s second trial began on April 1, 2025 in Massachusetts and had entered its second week by early April.[1] Read asked the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> to block the ongoing retrial until the justices could resolve her double jeopardy claims, filing an emergency application seeking to halt the proceedings pending her appeal.[1] The case was reported in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> of April 8, 2025 as a bonus item.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Deceivers Coin &#39;De-Extinction,&#39; Alien Enemies Exit, Markets March Back&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/karen-read.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const karenRead = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  karenRead as default
};
