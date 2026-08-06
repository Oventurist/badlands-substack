import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Grover Cleveland","description":"","frontmatter":{"title":"Grover Cleveland","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-presidents","economic-history","nonconsecutive-terms"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"low"},"headers":[],"relativePath":"entities/grover-cleveland.md","filePath":"entities/grover-cleveland.md","lastUpdated":null}');
const _sfc_main = { name: "entities/grover-cleveland.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="grover-cleveland" tabindex="-1">Grover Cleveland <a class="header-anchor" href="#grover-cleveland" aria-label="Permalink to &quot;Grover Cleveland&quot;">​</a></h1><p>Grover Cleveland was the American president who succeeded <a href="/entities/benjamin-harrison">Benjamin Harrison</a> and who, in Badlands commentary, was unfairly blamed for an economic collapse engineered by his predecessor.[1]</p><p>Cleveland was inaugurated days after a stock market crash triggered, in this account, by Harrison&#39;s deliberate efforts to damage the incoming administration; the resulting <a href="/concepts/panic-of-1893">Panic of 1893</a> produced a depression lasting through 1897 for which Cleveland bore the political cost.[1] Commentators noted that Cleveland, like <a href="/entities/donald-trump">Donald Trump</a>, served two presidential terms with a &quot;pause&quot; in the middle — a parallel used to frame the 2024 transition.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/grover-cleveland.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const groverCleveland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  groverCleveland as default
};
