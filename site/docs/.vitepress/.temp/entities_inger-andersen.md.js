import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Inger Andersen","description":"","frontmatter":{"title":"Inger Andersen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-nations","climate","cop28","environment"],"sources":["raw/badlands-news-brief-525.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/inger-andersen.md","filePath":"entities/inger-andersen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/inger-andersen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="inger-andersen" tabindex="-1">Inger Andersen <a class="header-anchor" href="#inger-andersen" aria-label="Permalink to &quot;Inger Andersen&quot;">​</a></h1><p>Inger Andersen is Executive Director of the United Nations Environment Program, an agency of the <a href="/entities/united-nations">United Nations</a> responsible for global environmental policy coordination.[1]</p><h2 id="cop28-exchange" tabindex="-1">COP28 exchange <a class="header-anchor" href="#cop28-exchange" aria-label="Permalink to &quot;COP28 exchange&quot;">​</a></h2><p>At the <a href="/concepts/cop28">COP28</a> climate summit in Dubai in December 2023, Andersen responded publicly to summit president <a href="/entities/sultan-al-jaber">Sultan al Jaber</a>, who had suggested that phasing out fossil fuels would &quot;take the world back into caves.&quot;[1] Andersen said that she lives in Kenya with solar power and clean electricity from the local utility, adding: &quot;I&#39;m not living in a cave. That&#39;s all I can say.&quot;[1] The exchange became one of the most widely circulated moments of the summit and was cited in coverage of the broader dispute over whether the final COP28 text would commit signatories to a fossil fuel phase-out.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bicameral Lawfare, Trump&#39;s Gambit &amp; the Ouroboros&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-525" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-525</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/inger-andersen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ingerAndersen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ingerAndersen as default
};
