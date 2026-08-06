import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William McKinley","description":"","frontmatter":{"title":"William McKinley","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["presidents","tariffs","history"],"sources":["raw/badlands-news-brief-095.md"],"confidence":"low"},"headers":[],"relativePath":"entities/william-mckinley.md","filePath":"entities/william-mckinley.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-mckinley.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-mckinley" tabindex="-1">William McKinley <a class="header-anchor" href="#william-mckinley" aria-label="Permalink to &quot;William McKinley&quot;">​</a></h1><p>William McKinley was a President of the United States who implemented his own tariff program and was assassinated.[1]</p><h2 id="invocation-in-the-2025-tariff-debate" tabindex="-1">Invocation in the 2025 tariff debate <a class="header-anchor" href="#invocation-in-the-2025-tariff-debate" aria-label="Permalink to &quot;Invocation in the 2025 tariff debate&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> cited a McKinley quotation on the eve of Supreme Court oral arguments over President <a href="/entities/donald-trump">Donald Trump</a>&#39;s tariffs, framing McKinley as a president who pursued a tariff program and &quot;was assassinated for it,&quot; and casting the case as an attempt by the <a href="/concepts/deep-state">Deep State</a> to stop a tariff policy that its supporters argue would eliminate the need for an income tax and free the American economy from globalism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Shutdown Showcase, Attempted Tariff Takedowns, &amp; the Launch of Mammany Hall&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-mckinley.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamMckinley = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamMckinley as default
};
