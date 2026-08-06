import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charlie Berens","description":"","frontmatter":{"title":"Charlie Berens","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","comedy","wisconsin","artificial-intelligence","activism"],"sources":["raw/badlands-brief-a6b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/charlie-berens.md","filePath":"entities/charlie-berens.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charlie-berens.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charlie-berens" tabindex="-1">Charlie Berens <a class="header-anchor" href="#charlie-berens" aria-label="Permalink to &quot;Charlie Berens&quot;">​</a></h1><p>Charlie Berens is an internet-famous American comedian associated with Wisconsin regional humor and a staunch public critic of artificial intelligence.[1]</p><p>In 2026 Berens&#39;s &quot;impassioned coverage&quot; was credited with helping the largely social-media-organized protest campaign against the <a href="/entities/port-washington">Port Washington</a> AI data center go viral.[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> cited his involvement as evidence that the anti-data-center movement was influencer-driven rather than organic, and wondered aloud whether &quot;the internet-famous comedian knows or cares&quot; that the affected towns appeared abandoned and in need of industry.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;On-Ramps to Off-Ramps and the Beginnings of the Golden Age&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a6b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a6b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charlie-berens.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlieBerens = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlieBerens as default
};
