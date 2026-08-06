import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Review","description":"","frontmatter":{"title":"National Review","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","conservative-press","publication"],"sources":["raw/badlands-news-brief-26c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-review.md","filePath":"entities/national-review.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-review.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-review" tabindex="-1">National Review <a class="header-anchor" href="#national-review" aria-label="Permalink to &quot;National Review&quot;">​</a></h1><p>National Review is an American conservative magazine and news outlet whose reporting is periodically cited in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> roundups.[1]</p><h2 id="coverage-of-the-bobulinski-testimony" tabindex="-1">Coverage of the Bobulinski testimony <a class="header-anchor" href="#coverage-of-the-bobulinski-testimony" aria-label="Permalink to &quot;Coverage of the Bobulinski testimony&quot;">​</a></h2><p>In February 2024 National Review obtained and published the opening statement that <a href="/entities/tony-bobulinski">Tony Bobulinski</a> delivered to the <a href="/entities/house-oversight-committee">House Oversight Committee</a> and <a href="/entities/house-judiciary-committee">House Judiciary Committee</a> during closed-door testimony on the Biden family&#39;s overseas business dealings.[1] The outlet reported Bobulinski&#39;s contention that <a href="/entities/joe-biden">Joe Biden</a> sat at the center of the arrangements and that the president had been &quot;the Brand&quot; the family sold to foreign actors.[1] National Review had previously editorialized on the relative absence of the Bobulinski story from mainstream front pages and broadcasts.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Russia Collusion is Back ... Unlike Biden&#39;s Memories&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-26c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-26c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-review.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalReview as default
};
