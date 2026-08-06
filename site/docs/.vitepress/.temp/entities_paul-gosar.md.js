import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Gosar","description":"","frontmatter":{"title":"Paul Gosar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","arizona","sound-money"],"sources":["raw/badlands-news-brief-12e.md"],"confidence":"low"},"headers":[],"relativePath":"entities/paul-gosar.md","filePath":"entities/paul-gosar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-gosar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-gosar" tabindex="-1">Paul Gosar <a class="header-anchor" href="#paul-gosar" aria-label="Permalink to &quot;Paul Gosar&quot;">​</a></h1><p>Paul Gosar is a Republican U.S. Representative from Arizona.[1]</p><p>In April 2023 Gosar joined Rep. <a href="/entities/alex-mooney">Alex Mooney</a> (R-WV) and Rep. <a href="/entities/andy-biggs">Andy Biggs</a> (R-AZ) in introducing H.R. 2435, the <a href="/concepts/gold-standard-restoration-act">Gold Standard Restoration Act</a>.[1] The bill would give the <a href="/entities/us-department-of-the-treasury">U.S. Treasury</a> and the <a href="/entities/federal-reserve">Federal Reserve</a> 24 months to disclose all gold holdings and transactions, after which Federal Reserve notes would be repegged to and redeemable for a fixed weight of gold, with Treasury gold reserves backstopping the Federal Reserve Banks as guarantor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Mayhem, WW3 &amp; Trump&#39;s Travels&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-12e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-12e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-gosar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulGosar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulGosar as default
};
