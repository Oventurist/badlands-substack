import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Port of Baltimore","description":"","frontmatter":{"title":"Port of Baltimore","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["maritime","shipping","baltimore","infrastructure","disaster"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/port-of-baltimore.md","filePath":"entities/port-of-baltimore.md","lastUpdated":null}');
const _sfc_main = { name: "entities/port-of-baltimore.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="port-of-baltimore" tabindex="-1">Port of Baltimore <a class="header-anchor" href="#port-of-baltimore" aria-label="Permalink to &quot;Port of Baltimore&quot;">​</a></h1><p>The <strong>Port of Baltimore</strong> is the Maryland seaport spanned by the 1.6-mile Francis Scott Key Bridge, which collapsed in March 2024 after being struck by the container ship <a href="/entities/dali">Dali</a>.[1] The <a href="/concepts/francis-scott-key-bridge-collapse">collapse</a> left wreckage blocking the shipping channel and paralyzed the entire port.[1]</p><p>The federal government authorized $60 million for salvage efforts, and a massive floating crane described in reporting as CIA-linked arrived in Baltimore along with other cranes to begin clearing the mangled bridge from the channel.[1] Officials&#39; hopes for a swift salvage operation were complicated by Captain <a href="/entities/john-konrad">John Konrad</a>&#39;s report that the Dali appeared to be sitting atop a high-pressure underwater gas line, with sources at ICS indicating the effort would likely be delayed while the line was surveyed and additional risk assessed.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/port-of-baltimore.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const portOfBaltimore = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  portOfBaltimore as default
};
