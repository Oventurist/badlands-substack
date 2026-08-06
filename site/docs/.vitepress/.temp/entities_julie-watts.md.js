import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Julie Watts","description":"","frontmatter":{"title":"Julie Watts","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","cbs-news","california","media"],"sources":["raw/badlands-news-brief-42c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/julie-watts.md","filePath":"entities/julie-watts.md","lastUpdated":null}');
const _sfc_main = { name: "entities/julie-watts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="julie-watts" tabindex="-1">Julie Watts <a class="header-anchor" href="#julie-watts" aria-label="Permalink to &quot;Julie Watts&quot;">​</a></h1><p>Julie Watts is a correspondent for <a href="/entities/cbs-news">CBS News</a> who covers California politics.[1] She drew national attention in October 2025 for an interview with California gubernatorial candidate <a href="/entities/katie-porter">Katie Porter</a> that Porter attempted to cut short on camera.[1]</p><h2 id="porter-interview" tabindex="-1">Porter interview <a class="header-anchor" href="#porter-interview" aria-label="Permalink to &quot;Porter interview&quot;">​</a></h2><p>In the interview, which aired Tuesday, October 7, 2025, Watts asked Porter, &quot;What do you say to the 40 percent of California voters, who you&#39;ll need in order to win, who voted for Trump?&quot;[1] Porter challenged the premise of the question, and Watts followed up by asking whether Porter expected to win the remaining 60 percent of voters, and what would happen in a general election against a fellow Democrat.[1]</p><p>When Porter objected that the interview had become &quot;unnecessarily argumentative,&quot; Watts replied that CBS News had put the same question to the other candidates in the race.[1] Porter then ended the interview.[1] Commentators at the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> described Watts&#39;s questioning as fair and standard, arguing that the resulting viral clip exposed Porter rather than the interviewer.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Palisades Patsy, A Gazan Golden Age, &amp; African Espionage&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-42c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-42c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/julie-watts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const julieWatts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  julieWatts as default
};
