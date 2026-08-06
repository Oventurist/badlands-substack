import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The National Pulse","description":"","frontmatter":{"title":"The National Pulse","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","alternative-media","polling"],"sources":["raw/badlands-news-brief-2ca.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-national-pulse.md","filePath":"entities/the-national-pulse.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-national-pulse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-national-pulse" tabindex="-1">The National Pulse <a class="header-anchor" href="#the-national-pulse" aria-label="Permalink to &quot;The National Pulse&quot;">​</a></h1><p>The National Pulse is an alternative news outlet cited by Badlands Media in its September 2023 news brief.[1]</p><h2 id="reporting-on-the-fox-business-poll-graphic" tabindex="-1">Reporting on the Fox Business poll graphic <a class="header-anchor" href="#reporting-on-the-fox-business-poll-graphic" aria-label="Permalink to &quot;Reporting on the Fox Business poll graphic&quot;">​</a></h2><p>The National Pulse reported that <a href="/entities/fox-business">Fox Business</a>&#39;s <em>Varney &amp; Co.</em> appeared to have intentionally altered a graphic breaking down a <a href="/entities/fox-news">Fox News</a> presidential poll in an effort to mislead viewers.[1] The poll, taken September 9–12, 2023, showed <a href="/entities/donald-trump">Donald Trump</a> leading <a href="/entities/joe-biden">Joe Biden</a> 48–46, while the on-air graphic gave the impression Trump trailed 46–48.[1] The outlet noted the resulting social-media confusion, including claims that the numbers showed <a href="/entities/ron-desantis">Ron DeSantis</a> as the stronger 2024 candidate, and pointed out that host <a href="/entities/stuart-varney">Stuart Varney</a> was slated to co-moderate the second Republican primary debate on September 27.[1]</p><p>Badlands Media reproduced the report as part of its running critique of legacy conservative media&#39;s role in shaping public perception of the 2024 race.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ukrainian Nazis, Spirit Cooks &amp; Potato Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ca" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ca</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-national-pulse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theNationalPulse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theNationalPulse as default
};
