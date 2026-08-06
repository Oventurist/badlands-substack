import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Roger Ailes","description":"","frontmatter":{"title":"Roger Ailes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","fox-news","cable-news","conservative-media"],"sources":["raw/badlands-news-brief-2ca.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/roger-ailes.md","filePath":"entities/roger-ailes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/roger-ailes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="roger-ailes" tabindex="-1">Roger Ailes <a class="header-anchor" href="#roger-ailes" aria-label="Permalink to &quot;Roger Ailes&quot;">​</a></h1><p>Roger Ailes was the founding executive of <a href="/entities/fox-news">Fox News</a> and, in Badlands Media&#39;s retrospective framing, the figure whose death marked the network&#39;s decline.[1]</p><h2 id="legacy-in-badlands-coverage" tabindex="-1">Legacy in Badlands coverage <a class="header-anchor" href="#legacy-in-badlands-coverage" aria-label="Permalink to &quot;Legacy in Badlands coverage&quot;">​</a></h2><p>Writing in September 2023 about a Fox Business polling-graphic scandal, <a href="/entities/ashe-in-america">Ashe in America</a> argued that although &quot;the network is dead,&quot; it is important to remember &quot;that it died with Roger Ailes.&quot;[1] The commentary credited Ailes with business and communications brilliance: he identified a market opportunity to cater news to the silent majority, gave conservatives a voice, and grew Fox into &quot;the envy of cable news.&quot;[1]</p><p>Ailes died in 2017, and the same commentary held that Fox has been in decline ever since, concluding that with stories such as the <a href="/entities/stuart-varney">Varney &amp; Co.</a> graphic controversy &quot;it&#39;s clear that Fox hasn&#39;t yet found its bottom.&quot;[1] The critique situates Ailes as the counterexample to what the writer describes as the network&#39;s present role in manufacturing consent.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ukrainian Nazis, Spirit Cooks &amp; Potato Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ca" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ca</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/roger-ailes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rogerAiles = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rogerAiles as default
};
