import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Daniel S. Pearson","description":"","frontmatter":{"title":"Daniel S. Pearson","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","independent-counsel","clinton-administration","law"],"sources":["raw/america-for-sale-part-1.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/daniel-pearson.md","filePath":"entities/daniel-pearson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/daniel-pearson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="daniel-s-pearson" tabindex="-1">Daniel S. Pearson <a class="header-anchor" href="#daniel-s-pearson" aria-label="Permalink to &quot;Daniel S. Pearson&quot;">​</a></h1><p>Daniel S. Pearson was a Miami attorney, former state judge, and former federal prosecutor appointed as independent counsel to investigate the financial affairs of Commerce Secretary <a href="/entities/ron-brown">Ron Brown</a>.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/america-for-sale-part-1">America for Sale - Part 1</a> quotes the <em>Greensboro News and Record</em>, which reported that a federal appeals court named Pearson, then 64, to determine &quot;whether Brown broke the law in his private financial dealings or in his public reports of those transactions.&quot; The appointment made him the fourth special counsel then probing officials of the <a href="/entities/bill-clinton">Clinton</a> administration, and legal sources quoted in that report expected the investigation to last &quot;well into the 1996 presidential campaign.&quot;</p><p>The article stresses that the inquiry was still in its early stages when Brown died on April 3, 1996, at which point the matter was handed to the Justice Department under <a href="/entities/janet-reno">Janet Reno</a>. In the author&#39;s reading, Pearson&#39;s independent-counsel status — outside the administration&#39;s control — was precisely what made Brown dangerous, and its termination is described as the moment the &quot;Pandora&#39;s Box of illegal fundraising and the selling of America&#39;s secrets&quot; was closed.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-1" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/daniel-pearson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const danielPearson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  danielPearson as default
};
