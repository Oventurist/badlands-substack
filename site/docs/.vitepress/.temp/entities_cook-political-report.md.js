import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cook Political Report","description":"","frontmatter":{"title":"Cook Political Report","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","political-analysis","electoral-college","media"],"sources":["raw/badlands-news-brief-786.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cook-political-report.md","filePath":"entities/cook-political-report.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cook-political-report.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cook-political-report" tabindex="-1">Cook Political Report <a class="header-anchor" href="#cook-political-report" aria-label="Permalink to &quot;Cook Political Report&quot;">​</a></h1><p>The Cook Political Report is an American election-handicapping publication whose Electoral College ratings are widely cited by political journalists and campaign operatives.[1]</p><h2 id="_2024-electoral-ratings-shift" tabindex="-1">2024 electoral ratings shift <a class="header-anchor" href="#_2024-electoral-ratings-shift" aria-label="Permalink to &quot;2024 electoral ratings shift&quot;">​</a></h2><p>On Tuesday, July 9, 2024, the Cook Political Report moved six states toward <a href="/entities/donald-trump">Donald Trump</a> in its Electoral College ratings, citing <a href="/entities/joe-biden">Joe Biden</a>&#39;s decline in national and private battleground polling shared by both Democratic and Republican sources.[1] The revision was reported by <a href="/entities/axios">Axios</a> as part of its account of Biden&#39;s &quot;incredible shrinking path to victory&quot; following his June 27 debate performance.[1]</p><p>Coverage noted that even before the debate Biden was a historically unpopular incumbent with a narrow path to 270 electoral votes, and that the ratings change compounded Democratic anxiety during the internal push for him to withdraw.[1] Badlands Media commentary treated the accompanying Axios framing sceptically, arguing that legacy outlets continued to insist the race remained &quot;neck and neck&quot; in order to preserve what the writer called the &quot;50/50 country&quot; narrative.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump&#39;s Plan, Biden&#39;s Path &amp; Israel&#39;s Dilemma&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-786" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-786</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cook-political-report.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cookPoliticalReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cookPoliticalReport as default
};
