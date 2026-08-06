import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Richard Blumenthal","description":"","frontmatter":{"title":"Richard Blumenthal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-senate","connecticut","democrats","russia-sanctions"],"sources":["raw/badlands-news-brief-11d.md"],"confidence":"low"},"headers":[],"relativePath":"entities/richard-blumenthal.md","filePath":"entities/richard-blumenthal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/richard-blumenthal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="richard-blumenthal" tabindex="-1">Richard Blumenthal <a class="header-anchor" href="#richard-blumenthal" aria-label="Permalink to &quot;Richard Blumenthal&quot;">​</a></h1><p>Richard Blumenthal is a Democratic United States Senator from Connecticut.[1] He is the co-sponsor, with South Carolina Republican <a href="/entities/lindsey-graham">Lindsey Graham</a>, of the <a href="/concepts/sanctioning-russia-act">Sanctioning Russia Act</a>, legislation that would impose 500 percent tariffs on any country purchasing Russian energy with the goal of starving Russia&#39;s war economy.[1] The bipartisan pairing helped attract 82 Senate co-signers by June 2025, though analysts warned the tariffs would amount to a hard decoupling of the United States from major trading partners including China, India and the European Union.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fake MAGA Break-ups and Based Accelerationism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/richard-blumenthal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const richardBlumenthal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  richardBlumenthal as default
};
