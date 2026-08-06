import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TerraVolta","description":"","frontmatter":{"title":"TerraVolta","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["lithium","startup","critical-minerals","texas","energy"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/terravolta.md","filePath":"entities/terravolta.md","lastUpdated":null}');
const _sfc_main = { name: "entities/terravolta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="terravolta" tabindex="-1">TerraVolta <a class="header-anchor" href="#terravolta" aria-label="Permalink to &quot;TerraVolta&quot;">​</a></h1><p>TerraVolta is a Houston-based lithium startup developing a lithium refinery on the Smackover Formation in East Texas with federal support.[1] It was founded by Jamie Liang, a former Wall Street banker, who described the deposit as &quot;ripe for development&quot; with &quot;tremendous growth potential.&quot;[1]</p><p>The company is one participant in a wave of mineral development in Texas that also includes <a href="/entities/chevron">Chevron</a>, <a href="/entities/halliburton">Halliburton</a> and the <a href="/entities/smackover-lithium">Smackover Lithium</a> joint venture, part of federal efforts to establish domestic supply chains for batteries, solar cells, wind turbines, microchips and cruise missiles in competition with China.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/terravolta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terravolta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  terravolta as default
};
