import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brooklyn Nets","description":"","frontmatter":{"title":"Brooklyn Nets","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nba","basketball","sports"],"sources":["raw/badlands-news-brief-547.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brooklyn-nets.md","filePath":"entities/brooklyn-nets.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brooklyn-nets.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brooklyn-nets" tabindex="-1">Brooklyn Nets <a class="header-anchor" href="#brooklyn-nets" aria-label="Permalink to &quot;Brooklyn Nets&quot;">​</a></h1><p>The Brooklyn Nets are a National Basketball Association franchise based in Brooklyn, New York. In Badlands Media coverage the team figures principally through its handling of guard <a href="/entities/kyrie-irving">Kyrie Irving</a> during the 2022–23 season.[1]</p><p>After Irving shared a documentary described as antisemitic on social media and repeatedly declined to apologize, the Nets suspended him. Irving then posted an apology on Instagram, served his suspension, and rejoined the team.[1]</p><p>The relationship ended the following season-half: after contract extension talks broke down, Irving requested a trade and the Nets dealt him to the <a href="/entities/dallas-mavericks">Dallas Mavericks</a> in early February 2023. Shortly afterward, reporters noticed that Irving&#39;s apology post had been removed from Instagram, prompting speculation — voiced by Badlands contributor <a href="/entities/absolutetruth1776">absolutetruth1776</a> — that the apology had been extracted by the club and the <a href="/entities/national-basketball-association">NBA</a> as a precondition for his return to play.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: State of Confusion, Kamala Mayhem &amp; Boiled Eggs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-547" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-547</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brooklyn-nets.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brooklynNets = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brooklynNets as default
};
