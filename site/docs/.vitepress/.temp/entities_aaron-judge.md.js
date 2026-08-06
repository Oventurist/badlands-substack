import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Aaron Judge","description":"","frontmatter":{"title":"Aaron Judge","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sports","baseball","new-york"],"sources":["raw/badlands-news-brief-6e5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/aaron-judge.md","filePath":"entities/aaron-judge.md","lastUpdated":null}');
const _sfc_main = { name: "entities/aaron-judge.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="aaron-judge" tabindex="-1">Aaron Judge <a class="header-anchor" href="#aaron-judge" aria-label="Permalink to &quot;Aaron Judge&quot;">​</a></h1><p>Aaron Judge is a star outfielder for the <a href="/entities/new-york-yankees">New York Yankees</a>.[1]</p><p>On September 11, 2025, Judge was among the players who shook hands with President <a href="/entities/donald-trump">Donald Trump</a> when the president visited the Yankees clubhouse before a game held on the anniversary of the <a href="/concepts/september-11-attacks">September 11 attacks</a>.[1] Players that day wore hats bearing &quot;FDNY&quot; and &quot;NYPD&quot; to honor first responders, and Trump told the assembled players and coaches, &quot;You&#39;re going to win. You&#39;re going to go all the way.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manhunts, Mental Health, &amp; the Mother of a Monster&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/aaron-judge.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aaronJudge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  aaronJudge as default
};
