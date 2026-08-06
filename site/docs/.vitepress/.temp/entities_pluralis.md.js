import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pluralis","description":"","frontmatter":{"title":"Pluralis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media-ownership","netherlands","poland","soros"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pluralis.md","filePath":"entities/pluralis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pluralis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pluralis" tabindex="-1">Pluralis <a class="header-anchor" href="#pluralis" aria-label="Permalink to &quot;Pluralis&quot;">​</a></h1><p>Pluralis is a Dutch media-investment company backed by the Soros Economic Development Fund, part of the philanthropic network of <a href="/entities/george-soros">George Soros</a>.[1]</p><p>In 2021 Pluralis acquired a minority stake in the Polish media group <a href="/entities/gremi-media">Gremi Media</a> — publisher of the daily Rzeczpospolita and the financial daily Parkiet — with an option to purchase additional shares.[1] In August 2023 it exercised that option, buying a large proportion of owner Grzegorz Hajdarowicz&#39;s holding and raising its stake to 57 percent, which gave it control of the company.[1] <a href="/entities/remix-news">Remix News</a> reported that the takeover raised concerns over far-left media bias in Poland given the politics of the fund&#39;s billionaire backer.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pluralis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pluralis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pluralis as default
};
