import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Janet Reno","description":"","frontmatter":{"title":"Janet Reno","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","attorney-general","justice-department","clinton-administration"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/janet-reno.md","filePath":"entities/janet-reno.md","lastUpdated":null}');
const _sfc_main = { name: "entities/janet-reno.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="janet-reno" tabindex="-1">Janet Reno <a class="header-anchor" href="#janet-reno" aria-label="Permalink to &quot;Janet Reno&quot;">​</a></h1><p>Janet Reno served as United States Attorney General throughout the presidency of <a href="/entities/bill-clinton">Bill Clinton</a>, from 1993 to 2001.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> mentions Reno at two points in the <a href="/entities/ron-brown">Ron Brown</a> affair. In the spring of 1995 she publicly stated that Brown had apparently failed to properly report large payments from his business partner <a href="/entities/nolanda-hill">Nolanda Sue Hill</a> — the finding that triggered the appointment of independent counsel <a href="/entities/daniel-pearson">Daniel S. Pearson</a>.</p><p>After Brown&#39;s death in April 1996, the investigation was transferred from the independent counsel back to the Justice Department under Reno, on the reasoning that Brown&#39;s surviving partners were not members of the Clinton administration and therefore no independent counsel was required. The article characterizes Reno&#39;s Justice Department as &quot;Clinton&#39;s corrupt DOJ&quot; and argues that the transfer was the decisive step in the cover-up: it &quot;took the target off the Clinton administration.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/janet-reno.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const janetReno = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  janetReno as default
};
