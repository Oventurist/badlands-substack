import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dallas Mavericks","description":"","frontmatter":{"title":"Dallas Mavericks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nba","basketball","sports"],"sources":["raw/badlands-news-brief-547.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dallas-mavericks.md","filePath":"entities/dallas-mavericks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dallas-mavericks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dallas-mavericks" tabindex="-1">Dallas Mavericks <a class="header-anchor" href="#dallas-mavericks" aria-label="Permalink to &quot;Dallas Mavericks&quot;">​</a></h1><p>The Dallas Mavericks are a National Basketball Association franchise based in Dallas, Texas. The team acquired guard <a href="/entities/kyrie-irving">Kyrie Irving</a> from the <a href="/entities/brooklyn-nets">Brooklyn Nets</a> in early February 2023, after Irving requested a trade in the wake of failed contract extension talks in Brooklyn.[1]</p><p>Irving was introduced as a Maverick at a press availability on Tuesday, February 7, 2023, at which reporters questioned him about the disappearance of his Instagram apology for having shared a documentary characterized as antisemitic. Irving answered that he deletes many things from his Instagram account and that the removal was &quot;no disrespect to anyone within the community.&quot;[1]</p><p>Badlands Media commentary treated the sequence — trade first, deletion after — as suggestive that the <a href="/entities/national-basketball-association">NBA</a> and Irving&#39;s former club had pressured him into the original apology.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: State of Confusion, Kamala Mayhem &amp; Boiled Eggs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-547" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-547</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dallas-mavericks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dallasMavericks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dallasMavericks as default
};
