import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tricontinental","description":"","frontmatter":{"title":"Tricontinental","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nonprofits","marxism","funding-networks","research"],"sources":["raw/badlands-brief-169.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tricontinental.md","filePath":"entities/tricontinental.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tricontinental.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tricontinental" tabindex="-1">Tricontinental <a class="header-anchor" href="#tricontinental" aria-label="Permalink to &quot;Tricontinental&quot;">​</a></h1><p>Tricontinental Ltd. is a Massachusetts 501(c)(3) organization founded by Marxist activist <a href="/entities/vijay-prashad">Vijay Prashad</a>.[1]</p><h2 id="role-in-the-singham-network" tabindex="-1">Role in the Singham network <a class="header-anchor" href="#role-in-the-singham-network" aria-label="Permalink to &quot;Role in the Singham network&quot;">​</a></h2><p>Tricontinental was named as one of six key nonprofits receiving funds in the alleged <a href="/entities/neville-roy-singham">Neville Roy Singham</a> financing structure under federal grand jury investigation in 2026, with $16,760,000 attributed to it.[1] The wider network described by prosecutors and prior <a href="/entities/fox-news">Fox News</a> reporting also encompassed <a href="/entities/peoples-forum">People&#39;s Forum Inc.</a>, <a href="/entities/codepink">CodePink</a>, Justice and Education Fund Inc., People&#39;s Support Foundation Ltd., and Breakthrough BT Media Inc.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Condemnation, Calibration, &amp; Constitutional Boxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-169" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-169</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tricontinental.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tricontinental = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tricontinental as default
};
