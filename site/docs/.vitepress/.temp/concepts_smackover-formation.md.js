import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Smackover Formation","description":"","frontmatter":{"title":"Smackover Formation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["geology","lithium","brine","texas","arkansas","critical-minerals"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/smackover-formation.md","filePath":"concepts/smackover-formation.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/smackover-formation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="smackover-formation" tabindex="-1">Smackover Formation <a class="header-anchor" href="#smackover-formation" aria-label="Permalink to &quot;Smackover Formation&quot;">​</a></h1><p>The Smackover Formation is a massive subsurface brine deposit underlying parts of East Texas and Arkansas that became a focus of American lithium development in 2025.[1]</p><p>In late September 2025, <a href="/entities/smackover-lithium">Smackover Lithium</a> — a joint venture of a Norwegian oil giant and a Canadian miner — announced the discovery of the most lithium-rich fluids ever reported in North America, measured deep beneath its Texas claims in the formation.[1] Houston-based startup <a href="/entities/terravolta">TerraVolta</a> is developing a lithium refinery on the Smackover with federal support; its founder Jamie Liang called the deposit &quot;ripe for development.&quot;[1]</p><p>Major oil companies including <a href="/entities/chevron">Chevron</a> and <a href="/entities/halliburton">Halliburton</a> announced East Texas projects in the summer of 2025 targeting lithium and other rare elements rather than oil, while <a href="/entities/exxonmobil">Exxon</a> holds acreage across the border in Arkansas.[1] The activity is part of broad federal efforts to urgently establish American production of the materials required for advanced manufacturing — batteries, solar cells, wind turbines, microchips and cruise missiles — with competition against China looming over the effort.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/smackover-formation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const smackoverFormation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  smackoverFormation as default
};
