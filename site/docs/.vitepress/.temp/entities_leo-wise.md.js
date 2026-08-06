import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Leo Wise","description":"","frontmatter":{"title":"Leo Wise","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["justice-department","prosecutor","hunter-biden","david-weiss"],"sources":["raw/badlands-news-brief-711.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/leo-wise.md","filePath":"entities/leo-wise.md","lastUpdated":null}');
const _sfc_main = { name: "entities/leo-wise.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="leo-wise" tabindex="-1">Leo Wise <a class="header-anchor" href="#leo-wise" aria-label="Permalink to &quot;Leo Wise&quot;">​</a></h1><p>Leo Wise is a federal prosecutor who served on special counsel <a href="/entities/david-weiss">David Weiss</a>&#39;s team in the tax prosecution of <a href="/entities/hunter-biden">Hunter Biden</a>.[1]</p><h2 id="hunter-biden-tax-case" tabindex="-1">Hunter Biden tax case <a class="header-anchor" href="#hunter-biden-tax-case" aria-label="Permalink to &quot;Hunter Biden tax case&quot;">​</a></h2><p>On September 5, 2024, when Hunter Biden&#39;s attorney <a href="/entities/abbe-lowell">Abbe Lowell</a> announced in federal court that his client intended to switch his plea and plead guilty to all nine federal tax charges, Wise responded that &quot;this is the first we are hearing about this.&quot;[1] The reversal shocked federal prosecutors, and a source familiar with the special counsel&#39;s team told Fox News Digital that the change was not a done deal but merely an offer the defense had placed on the table.[1] The proceedings before Judge Mark Scarsi included a 30-minute recess, after which the court addressed whether the government&#39;s agreement was required to accept an Alford plea.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Not so Brief Full of Sovereign SIGNAL&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-711" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-711</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/leo-wise.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leoWise = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  leoWise as default
};
