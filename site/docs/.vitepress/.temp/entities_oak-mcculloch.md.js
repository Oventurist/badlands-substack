import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Oak McCulloch","description":"","frontmatter":{"title":"Oak McCulloch","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","badlands-media","commentary"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"low"},"headers":[],"relativePath":"entities/oak-mcculloch.md","filePath":"entities/oak-mcculloch.md","lastUpdated":null}');
const _sfc_main = { name: "entities/oak-mcculloch.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oak-mcculloch" tabindex="-1">Oak McCulloch <a class="header-anchor" href="#oak-mcculloch" aria-label="Permalink to &quot;Oak McCulloch&quot;">​</a></h1><p>Lt. Colonel Oak McCulloch is a retired U.S. Army officer and speaker associated with <a href="/entities/badlands-media">Badlands Media</a> programming and its GART live events.[1]</p><h2 id="commentary-on-borders" tabindex="-1">Commentary on borders <a class="header-anchor" href="#commentary-on-borders" aria-label="Permalink to &quot;Commentary on borders&quot;">​</a></h2><p>McCulloch has stated on many occasions, both at GART events and on stream, that changing the national boundaries on a map is a bloody endeavor.[1] The remark was cited by <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> discussion of <a href="/concepts/colonial-borders-in-africa">colonial borders in Africa</a>, where it framed the question of whether boundaries could ever be redrawn without war.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/oak-mcculloch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oakMcculloch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oakMcculloch as default
};
