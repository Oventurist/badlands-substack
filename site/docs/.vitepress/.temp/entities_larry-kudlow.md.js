import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Larry Kudlow","description":"","frontmatter":{"title":"Larry Kudlow","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","economics","fox-business","energy"],"sources":["raw/badlands-news-brief-670.md"],"confidence":"low"},"headers":[],"relativePath":"entities/larry-kudlow.md","filePath":"entities/larry-kudlow.md","lastUpdated":null}');
const _sfc_main = { name: "entities/larry-kudlow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="larry-kudlow" tabindex="-1">Larry Kudlow <a class="header-anchor" href="#larry-kudlow" aria-label="Permalink to &quot;Larry Kudlow&quot;">​</a></h1><p>Larry Kudlow is an American economic commentator and television host, formerly director of the National Economic Council.[1]</p><h2 id="coverage-of-the-anwr-lease-cancellations" tabindex="-1">Coverage of the ANWR lease cancellations <a class="header-anchor" href="#coverage-of-the-anwr-lease-cancellations" aria-label="Permalink to &quot;Coverage of the ANWR lease cancellations&quot;">​</a></h2><p>In September 2023 Kudlow devoted a segment to the <a href="/entities/joe-biden">Biden</a> administration&#39;s cancellation of seven oil and gas leases in the <a href="/concepts/arctic-national-wildlife-refuge">Arctic National Wildlife Refuge</a> that had been legally awarded from a 2021 sale.[1] The segment circulated widely on X, where one user&#39;s reaction — &quot;Who is Biden working for?&quot; — supplied the headline framing used by <a href="/entities/zerohedge">ZeroHedge</a> and reproduced in the Badlands News Brief.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Musk the Peacemaker, Constitutional Overreach &amp; POTATUS&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-670" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-670</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/larry-kudlow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const larryKudlow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  larryKudlow as default
};
