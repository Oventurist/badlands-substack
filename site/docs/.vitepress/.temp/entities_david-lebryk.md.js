import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Lebryk","description":"","frontmatter":{"title":"David Lebryk","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["treasury","doge","civil-service","federal-payments"],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-lebryk.md","filePath":"entities/david-lebryk.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-lebryk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-lebryk" tabindex="-1">David Lebryk <a class="header-anchor" href="#david-lebryk" aria-label="Permalink to &quot;David Lebryk&quot;">​</a></h1><p>David Lebryk was a career civil servant and senior official at the <a href="/entities/us-department-of-the-treasury">US Department of the Treasury</a> who resisted allowing representatives of the <a href="/entities/doge">Department of Government Efficiency</a> into the department&#39;s federal payment system in late January 2025.[1]</p><h2 id="departure" tabindex="-1">Departure <a class="header-anchor" href="#departure" aria-label="Permalink to &quot;Departure&quot;">​</a></h2><p>Following a standoff over access to the payment system — which disburses money on behalf of the entire federal government — Lebryk was put on leave and then abruptly retired on Friday, January 31, 2025, according to people familiar with his exit.[1] Treasury Secretary <a href="/entities/scott-bessent">Scott Bessent</a> subsequently granted DOGE representatives access to the system late that same day, handing <a href="/entities/elon-musk">Elon Musk</a> and the team he was leading a powerful tool to monitor and potentially limit government spending.[1]</p><p>Reporting noted that the system could give the <a href="/entities/donald-trump">Trump</a> administration another mechanism to attempt to unilaterally restrict disbursement of money appropriated by Congress for specific purposes, a push that had already met legal roadblocks.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-lebryk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidLebryk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidLebryk as default
};
