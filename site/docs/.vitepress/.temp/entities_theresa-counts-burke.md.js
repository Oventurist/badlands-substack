import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Theresa Counts Burke","description":"","frontmatter":{"title":"Theresa Counts Burke","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","missouri","st-louis"],"sources":["raw/badlands-news-brief-12e.md"],"confidence":"low"},"headers":[],"relativePath":"entities/theresa-counts-burke.md","filePath":"entities/theresa-counts-burke.md","lastUpdated":null}');
const _sfc_main = { name: "entities/theresa-counts-burke.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="theresa-counts-burke" tabindex="-1">Theresa Counts Burke <a class="header-anchor" href="#theresa-counts-burke" aria-label="Permalink to &quot;Theresa Counts Burke&quot;">​</a></h1><p>Theresa Counts Burke is a St. Louis judge who in April 2023 sanctioned the office of St. Louis Circuit Attorney <a href="/entities/kim-gardner">Kim Gardner</a> over discovery violations in a double-murder prosecution.[1]</p><p>Burke ruled in favor of defense lawyers for Alex Heflin, 23, after they filed a motion accusing a prosecutor under Gardner of violating discovery rules by failing to turn over evidence that included a 911 call recording and DNA evidence.[1] Heflin, initially charged with two counts of second-degree murder and armed criminal action and held without bond since January, saw his charges reduced to involuntary and voluntary manslaughter before his release, with his trial postponed from April 17 to June 12.[1]</p><p>Commentary published by <a href="/entities/badlands-media">Badlands Media</a> cited the ruling as an example of judicial pushback against prosecutorial misconduct, while cautioning that reform cannot depend on individual judges acting correctly in isolated cases.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Mayhem, WW3 &amp; Trump&#39;s Travels&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-12e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-12e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/theresa-counts-burke.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theresaCountsBurke = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theresaCountsBurke as default
};
