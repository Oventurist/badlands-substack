import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Punchbowl News","description":"","frontmatter":{"title":"Punchbowl News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","washington","congressional-reporting"],"sources":["raw/badlands-news-brief-08c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/punchbowl-news.md","filePath":"entities/punchbowl-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/punchbowl-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="punchbowl-news" tabindex="-1">Punchbowl News <a class="header-anchor" href="#punchbowl-news" aria-label="Permalink to &quot;Punchbowl News&quot;">​</a></h1><p>Punchbowl News is a Washington-based subscription news outlet focused on Congress and party political operations.[1]</p><p>In April 2023 Punchbowl reported, citing multiple sources, that the <a href="/entities/democratic-national-committee">Democratic National Committee</a> was parting ways with attorney <a href="/entities/marc-elias">Marc Elias</a> after strategic disagreements, ending a relationship dating to 2009.[1] The report detailed that Elias would continue representing the DCCC, DSCC, DAGA and DLCC through the <a href="/entities/elias-law-group">Elias Law Group</a>, and cited Federal Election Commission filings showing roughly $100,000 paid by the DNC to the firm in 2023 and just under $2 million in the 2022 cycle.[1] The story was excerpted and analyzed in the Badlands News Brief.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Real Leaks &amp; Fake News&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-08c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-08c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/punchbowl-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const punchbowlNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  punchbowlNews as default
};
