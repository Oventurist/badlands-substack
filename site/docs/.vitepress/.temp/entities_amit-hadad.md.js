import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amit Hadad","description":"","frontmatter":{"title":"Amit Hadad","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","attorney","netanyahu-trial","legal"],"sources":["raw/badlands-news-brief-08e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amit-hadad.md","filePath":"entities/amit-hadad.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amit-hadad.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amit-hadad" tabindex="-1">Amit Hadad <a class="header-anchor" href="#amit-hadad" aria-label="Permalink to &quot;Amit Hadad&quot;">​</a></h1><p>Amit Hadad is the attorney representing Israeli Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> in his ongoing corruption trial. In late December 2024 Hadad disclosed that the prime minister would be under full anesthesia during surgery to remove his prostate and would remain hospitalized for several days at Hadassah Medical Center in Jerusalem.[1]</p><p>On the Sunday of the operation, Hadad received approval from the Attorney General&#39;s Office to cancel Netanyahu&#39;s scheduled testimony that week in the corruption proceedings.[1] The cancellation followed a ruling three weeks earlier in which the judges presiding over the prosecution had denied a request from Netanyahu&#39;s security cabinet to delay his testimony.[1] Badlands commentary characterized the medical postponement as the latest in a long series of delays in a case whose charges were originally filed in 2019, after earlier interruptions from COVID-19 and from an attempt to reorganize Israel&#39;s judiciary.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: A President&#39;s Passing &amp; A Prime Minister&#39;s Prostate&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-08e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-08e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amit-hadad.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amitHadad = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amitHadad as default
};
