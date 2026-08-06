import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pittsburgh Steelers","description":"","frontmatter":{"title":"Pittsburgh Steelers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nfl","sports","pennsylvania"],"sources":["raw/badlands-news-brief-481.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pittsburgh-steelers.md","filePath":"entities/pittsburgh-steelers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pittsburgh-steelers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pittsburgh-steelers" tabindex="-1">Pittsburgh Steelers <a class="header-anchor" href="#pittsburgh-steelers" aria-label="Permalink to &quot;Pittsburgh Steelers&quot;">​</a></h1><p>The Pittsburgh Steelers are a National Football League franchise based in Pittsburgh, Pennsylvania.</p><p>The team features in Badlands Media&#39;s October 2024 coverage as the franchise where wide receiver <a href="/entities/antonio-brown">Antonio Brown</a> spent the prime of his career, from 2014 through 2018, breaking a wide range of receiving records before his departure.[1] Brown returned to the Steelers&#39; orbit politically in October 2024, leading a voter registration drive at a tailgate party ahead of the team&#39;s Sunday evening game against the New York Jets and distributing Trump–Vance rally towels in Steelers yellow.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Donald&#39;s Drive-Thru Goes Viral as Iran Makes Moves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-481" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-481</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pittsburgh-steelers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pittsburghSteelers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pittsburghSteelers as default
};
