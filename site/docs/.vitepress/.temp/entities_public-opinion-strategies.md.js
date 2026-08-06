import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Public Opinion Strategies","description":"","frontmatter":{"title":"Public Opinion Strategies","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["polling","republican-party","nbc-news","public-opinion"],"sources":["raw/badlands-news-brief-051.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/public-opinion-strategies.md","filePath":"entities/public-opinion-strategies.md","lastUpdated":null}');
const _sfc_main = { name: "entities/public-opinion-strategies.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="public-opinion-strategies" tabindex="-1">Public Opinion Strategies <a class="header-anchor" href="#public-opinion-strategies" aria-label="Permalink to &quot;Public Opinion Strategies&quot;">​</a></h1><p>Public Opinion Strategies is an American Republican polling firm that conducts the GOP side of the bipartisan <a href="/entities/nbc-news">NBC News</a> national survey.[1]</p><h2 id="role-in-the-november-2023-nbc-news-poll" tabindex="-1">Role in the November 2023 NBC News poll <a class="header-anchor" href="#role-in-the-november-2023-nbc-news-poll" aria-label="Permalink to &quot;Role in the November 2023 NBC News poll&quot;">​</a></h2><p>Republican pollster <a href="/entities/bill-mcinturff">Bill McInturff</a> of Public Opinion Strategies conducted the <a href="/concepts/november-2023-nbc-news-poll">November 2023 NBC News poll</a> together with Democratic pollster <a href="/entities/jeff-horwitt">Jeff Horwitt</a> of <a href="/entities/hart-research-associates">Hart Research Associates</a>.[1] The survey recorded President <a href="/entities/joe-biden">Joe Biden</a>&#39;s approval at 40% and showed him trailing former President <a href="/entities/donald-trump">Donald Trump</a> in a hypothetical general-election matchup for the first time, though within the margin of error.[1]</p><p>Commenting on the results, McInturff said he could not recall another time when foreign affairs not involving U.S. troops had transformed the American political landscape.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Lawsuits Can Be Very Effective ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-051" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-051</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/public-opinion-strategies.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const publicOpinionStrategies = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  publicOpinionStrategies as default
};
