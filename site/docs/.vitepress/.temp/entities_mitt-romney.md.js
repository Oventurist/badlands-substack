import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mitt Romney","description":"","frontmatter":{"title":"Mitt Romney","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["politics","consulting","republican-party"],"sources":["raw/badlands-news-brief-355.md"],"confidence":"low"},"headers":[],"relativePath":"entities/mitt-romney.md","filePath":"entities/mitt-romney.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mitt-romney.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mitt-romney" tabindex="-1">Mitt Romney <a class="header-anchor" href="#mitt-romney" aria-label="Permalink to &quot;Mitt Romney&quot;">​</a></h1><p>Mitt Romney is an American politician and former management consultant who appears in Badlands coverage chiefly through his early career at <a href="/entities/boston-consulting-group">Boston Consulting Group</a>.[1]</p><h2 id="bcg-years-and-the-netanyahu-connection" tabindex="-1">BCG years and the Netanyahu connection <a class="header-anchor" href="#bcg-years-and-the-netanyahu-connection" aria-label="Permalink to &quot;BCG years and the Netanyahu connection&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> noted that <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> worked at BCG between 1976 and 1978 as an economic analyst alongside Romney, and that the two men are said to have formed a lifelong bond from that shared experience.[1] The detail was raised in June 2025 while examining BCG&#39;s involvement in designing the <a href="/entities/gaza-humanitarian-foundation">Gaza Humanitarian Foundation</a>, though the commentator cautioned he was offering datapoints rather than asserting a direct connection.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mushroom Zombies, Palantir, &amp; Election DAY&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-355" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-355</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mitt-romney.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mittRomney = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mittRomney as default
};
