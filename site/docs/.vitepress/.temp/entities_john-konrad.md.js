import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Konrad","description":"","frontmatter":{"title":"John Konrad","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["maritime","journalism","shipping","space-weather"],"sources":["raw/badlands-news-brief-092.md","raw/badlands-news-brief-83b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-konrad.md","filePath":"entities/john-konrad.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-konrad.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-konrad" tabindex="-1">John Konrad <a class="header-anchor" href="#john-konrad" aria-label="Permalink to &quot;John Konrad&quot;">​</a></h1><p><strong>Captain John Konrad</strong> is a mariner and the chief executive officer of <a href="/entities/gcaptain">gCaptain</a>, a website specializing in tracking the shipping industry.[1]</p><p>Konrad became a widely cited source during the aftermath of the <a href="/concepts/francis-scott-key-bridge-collapse">Francis Scott Key Bridge collapse</a> in Baltimore, when he stated that the 984-foot Singapore-flagged container ship <a href="/entities/dali">Dali</a> was apparently &quot;sitting atop a high-pressure underwater gas line.&quot;[1] Writing on the social media platform X, he reported that &quot;Sources at ICS reports ship salvage effort will likely be delayed while line is surveyed and additional risk can be assessed.&quot;[1] His assessment complicated official expectations that the federally funded $60 million salvage effort would proceed smoothly.[1]</p><p>During the <a href="/concepts/may-2024-g5-geomagnetic-storm">May 2024 G5 geomagnetic storm</a>, Konrad — identified as chief executive of Captain — again became a cited voice on infrastructure disruption, writing on X that &quot;The solar storm has knocked out almost all long-distance shortwave radio.&quot;[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li><li>Badlands Brief — &quot;Badlands News Brief: Biden Baits Israel as Solar Storms Bring the Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-83b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-83b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-konrad.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnKonrad = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnKonrad as default
};
