import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Daniel Turner","description":"","frontmatter":{"title":"Daniel Turner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","advocacy","autopen","biden-administration"],"sources":["raw/badlands-news-brief-652.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/daniel-turner.md","filePath":"entities/daniel-turner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/daniel-turner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="daniel-turner" tabindex="-1">Daniel Turner <a class="header-anchor" href="#daniel-turner" aria-label="Permalink to &quot;Daniel Turner&quot;">​</a></h1><p>Daniel Turner is the founder and executive director of <a href="/entities/power-the-future">Power the Future</a>, a nonprofit organization advocating for American energy jobs.[1]</p><p>In May 2025 Turner pressed for an investigation into eight climate and energy executive orders issued under <a href="/entities/joe-biden">Joe Biden</a>, contending that the president had never publicly discussed any of them and that they may have been signed by autopen without his knowledge.[1] Speaking to Fox News Digital, Turner said: &quot;These are not obscure bureaucratic memos; these were foundational shifts in American energy policy, yet not once did Joe Biden speak about them publicly.&quot;[1] His remarks placed Power the Future among the organizations pressing the <a href="/concepts/autopen-scandal">autopen-scandal</a> into the energy-policy arena, arguing that orders such as the 2023 Arctic drilling ban and the 2021 net-zero-by-2050 directive should be treated as void.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Cocaine &amp; Climate Change&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-652" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-652</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/daniel-turner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const danielTurner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  danielTurner as default
};
