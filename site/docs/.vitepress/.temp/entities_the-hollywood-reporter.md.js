import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Hollywood Reporter","description":"","frontmatter":{"title":"The Hollywood Reporter","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","entertainment","publication"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"low"},"headers":[],"relativePath":"entities/the-hollywood-reporter.md","filePath":"entities/the-hollywood-reporter.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-hollywood-reporter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-hollywood-reporter" tabindex="-1">The Hollywood Reporter <a class="header-anchor" href="#the-hollywood-reporter" aria-label="Permalink to &quot;The Hollywood Reporter&quot;">​</a></h1><p>The Hollywood Reporter is an American trade publication covering the film and television industries.[1]</p><h2 id="coverage-cited-by-badlands" tabindex="-1">Coverage cited by Badlands <a class="header-anchor" href="#coverage-cited-by-badlands" aria-label="Permalink to &quot;Coverage cited by Badlands&quot;">​</a></h2><p>In April 2025 the outlet reported on a Los Angeles film and TV industry town hall warning that California&#39;s entertainment sector risked &quot;becoming the next Detroit auto&quot; — a city built on a single industry that hollowed out when that business left.[1] The event, held Monday night, addressed the drop in production in Hollywood and California and the campaign to increase the state&#39;s entertainment production tax incentive, focusing on the later-stage pipeline of scoring and postproduction.[1] Noelle Stehman, a member of the &quot;Stay in LA&quot; campaign, said at the event: &quot;This is not hyperbole to say that if we don&#39;t act, the California film and TV industry will become the next Detroit auto.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-hollywood-reporter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theHollywoodReporter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theHollywoodReporter as default
};
