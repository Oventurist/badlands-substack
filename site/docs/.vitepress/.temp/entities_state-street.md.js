import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"State Street","description":"","frontmatter":{"title":"State Street","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","asset-management","media-ownership"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/state-street.md","filePath":"entities/state-street.md","lastUpdated":null}');
const _sfc_main = { name: "entities/state-street.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="state-street" tabindex="-1">State Street <a class="header-anchor" href="#state-street" aria-label="Permalink to &quot;State Street&quot;">​</a></h1><p>State Street is a large American asset manager and custodian bank, listed by Badlands Media alongside <a href="/entities/blackrock">BlackRock</a>, <a href="/entities/vanguard-group">the Vanguard Group</a> and <a href="/entities/berkshire-hathaway">Berkshire Hathaway</a> as one of the institutional investors that mutually own the major media conglomerates.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><p>The article uses this pattern of overlapping ownership to argue that the <a href="/concepts/centralized-media">centralized media</a> is not a competitive marketplace but a single bloc, and that representatives of these asset managers sit at the same elite policy institutions — the <a href="/entities/council-on-foreign-relations">Council on Foreign Relations</a> and the <a href="/entities/world-economic-forum">World Economic Forum</a> — that shape the narratives their outlets transmit.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Swan Song for the MSM&quot;, URL: <a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-swan-song-for-the-msm</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/state-street.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stateStreet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stateStreet as default
};
