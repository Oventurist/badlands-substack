import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Patty Murray","description":"","frontmatter":{"title":"Patty Murray","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["senate","democrats","washington-state","appropriations","congress"],"sources":["raw/badlands-news-brief-1c8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/patty-murray.md","filePath":"entities/patty-murray.md","lastUpdated":null}');
const _sfc_main = { name: "entities/patty-murray.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="patty-murray" tabindex="-1">Patty Murray <a class="header-anchor" href="#patty-murray" aria-label="Permalink to &quot;Patty Murray&quot;">​</a></h1><p><strong>Patty Murray</strong> is a Democratic United States Senator from Washington and the senior Democrat on the <a href="/entities/senate-appropriations-committee">Senate Appropriations Committee</a>.[1]</p><p>In March 2025 Murray co-signed a letter initiated by committee chairwoman <a href="/entities/susan-collins">Susan Collins</a> to the <a href="/entities/white-house">White House</a>, asserting that the <a href="/entities/trump-administration">Trump administration</a> had violated the six-month spending law approved by <a href="/entities/us-congress">Congress</a> by refusing to spend $2.9 billion in appropriated funds.[1] The bipartisan letter argued that the law requires the administration to spend all emergency money or none of it.[1] See <a href="/concepts/2025-emergency-spending-impoundment-dispute">2025 emergency spending impoundment dispute</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Myanmar&#39;s Mayhem, Musk&#39;s Marxists, &amp; the Military&#39;s Secret Memo&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/patty-murray.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pattyMurray = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pattyMurray as default
};
