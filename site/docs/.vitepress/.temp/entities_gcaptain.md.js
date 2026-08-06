import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"gCaptain","description":"","frontmatter":{"title":"gCaptain","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","maritime","shipping"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gcaptain.md","filePath":"entities/gcaptain.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gcaptain.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gcaptain" tabindex="-1">gCaptain <a class="header-anchor" href="#gcaptain" aria-label="Permalink to &quot;gCaptain&quot;">​</a></h1><p><strong>gCaptain</strong> is a website specializing in tracking the shipping industry, led by chief executive officer Captain <a href="/entities/john-konrad">John Konrad</a>.[1]</p><p>The outlet&#39;s reporting figured prominently in coverage of the <a href="/concepts/francis-scott-key-bridge-collapse">Francis Scott Key Bridge collapse</a> at the Port of Baltimore, where Konrad&#39;s assessment that the container ship <a href="/entities/dali">Dali</a> was sitting atop a high-pressure underwater gas line indicated the salvage operation would likely be delayed pending a survey of the line and further risk assessment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gcaptain.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gcaptain = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gcaptain as default
};
