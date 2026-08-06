import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brad Reese","description":"","frontmatter":{"title":"Brad Reese","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["reeses","food","consumer-advocacy"],"sources":["raw/badlands-brief-7c6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/brad-reese.md","filePath":"entities/brad-reese.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brad-reese.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brad-reese" tabindex="-1">Brad Reese <a class="header-anchor" href="#brad-reese" aria-label="Permalink to &quot;Brad Reese&quot;">​</a></h1><p>Brad Reese is the grandson of the inventor of Reese&#39;s Peanut Butter Cups.[1]</p><h2 id="open-letter-to-hershey" tabindex="-1">Open letter to Hershey <a class="header-anchor" href="#open-letter-to-hershey" aria-label="Permalink to &quot;Open letter to Hershey&quot;">​</a></h2><p>In February 2026, Reese published an open letter to <a href="/entities/hershey-company">The Hershey Company</a> accusing it of &quot;quietly replacing&quot; the ingredients in Reese&#39;s products and declaring that the candy&#39;s &quot;identity is being rewritten.&quot;[1] He argued that his grandfather had built the brand on &quot;a simple, enduring architecture: Milk Chocolate + Peanut Butter,&quot; and objected to formulation decisions substituting compound coatings for milk chocolate and &quot;peanut-butter-style crèmes&quot; for peanut butter across multiple Reese&#39;s products.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Democratization of Narrative Distribution. And a New War with Iran.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brad-reese.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bradReese = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bradReese as default
};
