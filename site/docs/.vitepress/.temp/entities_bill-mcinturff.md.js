import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill McInturff","description":"","frontmatter":{"title":"Bill McInturff","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["polling","republican-party","nbc-news"],"sources":["raw/badlands-news-brief-051.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bill-mcinturff.md","filePath":"entities/bill-mcinturff.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-mcinturff.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-mcinturff" tabindex="-1">Bill McInturff <a class="header-anchor" href="#bill-mcinturff" aria-label="Permalink to &quot;Bill McInturff&quot;">​</a></h1><p>Bill McInturff is a Republican pollster with <a href="/entities/public-opinion-strategies">Public Opinion Strategies</a>.[1]</p><p>McInturff conducted the <a href="/concepts/november-2023-nbc-news-poll">November 2023 NBC News national poll</a> together with Democratic pollster <a href="/entities/jeff-horwitt">Jeff Horwitt</a> of <a href="/entities/hart-research-associates">Hart Research Associates</a>.[1] Reflecting on the survey&#39;s finding that President <a href="/entities/joe-biden">Joe Biden</a>&#39;s standing had fallen to the lowest point of his presidency amid the <a href="/concepts/israel-palestine-conflict">Israel-Hamas war</a>, McInturff said he could not recall another time when foreign affairs not involving U.S. troops had transformed the American political landscape.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Lawsuits Can Be Very Effective ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-051" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-051</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-mcinturff.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billMcinturff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billMcinturff as default
};
