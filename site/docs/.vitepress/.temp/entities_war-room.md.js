import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"War Room","description":"","frontmatter":{"title":"War Room","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","steve-bannon","podcast","populist-right"],"sources":["raw/badlands-news-brief-7e6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/war-room.md","filePath":"entities/war-room.md","lastUpdated":null}');
const _sfc_main = { name: "entities/war-room.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="war-room" tabindex="-1">War Room <a class="header-anchor" href="#war-room" aria-label="Permalink to &quot;War Room&quot;">​</a></h1><p><em>War Room</em> is the daily political broadcast hosted by <a href="/entities/steve-bannon">Steve Bannon</a>, a program widely regarded within the populist right as a central organizing platform for activists, candidates and independent researchers.[1] The show functions as a venue where guests surface documents, reports and investigative claims that mainstream outlets have not covered, and its segments are routinely recirculated by allied independent publications.[1]</p><h2 id="coverage-in-the-badlands-news-brief" tabindex="-1">Coverage in the Badlands News Brief <a class="header-anchor" href="#coverage-in-the-badlands-news-brief" aria-label="Permalink to &quot;Coverage in the Badlands News Brief&quot;">​</a></h2><p>In April 2023, <em>War Room</em> hosted attorney <a href="/entities/elizabeth-yore">Elizabeth Yore</a>, who used the platform to publicize what she described as a <a href="/entities/united-nations">United Nations</a> report calling for the normalization and decriminalization of pedophilia.[1] Yore&#39;s on-air statements — including her assertion that the UN was &quot;declaring that pedophilia is a human right&quot; — were the primary sourcing for subsequent write-ups by <a href="/entities/the-gateway-pundit">The Gateway Pundit</a> and for the corresponding item in the <a href="/entities/badlands-media">Badlands Media</a> news brief.[1] The episode illustrates the program&#39;s role as an upstream node in the independent-media information chain, where a broadcast interview becomes the basis for aggregation and commentary elsewhere.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;GART is Here! Plus, Exposure &amp; Disclosure Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7e6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7e6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/war-room.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const warRoom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  warRoom as default
};
