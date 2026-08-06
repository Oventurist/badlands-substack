import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Kramer","description":"","frontmatter":{"title":"Bill Kramer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hollywood","oscars","executives"],"sources":["raw/badlands-news-brief-83b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bill-kramer.md","filePath":"entities/bill-kramer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-kramer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-kramer" tabindex="-1">Bill Kramer <a class="header-anchor" href="#bill-kramer" aria-label="Permalink to &quot;Bill Kramer&quot;">​</a></h1><p><strong>Bill Kramer</strong> is the chief executive of the <a href="/entities/academy-of-motion-picture-arts-and-sciences">Academy of Motion Picture Arts &amp; Sciences</a>.[1]</p><p>In a May 2024 interview, Kramer disclosed that the Academy had launched a $500 million global fundraising drive and had already raised roughly $100 million, with individual donors including <a href="/entities/leonard-blavatnik">Leonard Blavatnik</a> and sponsorship deals signed with luxury brands including the Dorchester Collection.[1] He described the Academy&#39;s existing broadcast deal with ABC as &quot;very healthy&quot; and the relationship with Walt Disney as &quot;an amazing partnership,&quot; while explaining that streaming&#39;s disruption of the film and television business had pushed the Academy toward a &quot;revenue diversification campaign.&quot;[1] Kramer argued that &quot;No healthy company or organisation should rely on one source of support to a degree that could cause concern if that support decreases.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Baits Israel as Solar Storms Bring the Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-83b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-83b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-kramer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billKramer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billKramer as default
};
