import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Wopke Hoekstra","description":"","frontmatter":{"title":"Wopke Hoekstra","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["european-union","climate","commissioner","netherlands"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"low"},"headers":[],"relativePath":"entities/wopke-hoekstra.md","filePath":"entities/wopke-hoekstra.md","lastUpdated":null}');
const _sfc_main = { name: "entities/wopke-hoekstra.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="wopke-hoekstra" tabindex="-1">Wopke Hoekstra <a class="header-anchor" href="#wopke-hoekstra" aria-label="Permalink to &quot;Wopke Hoekstra&quot;">​</a></h1><p>Wopke Hoekstra is the European Commissioner for climate action who unveiled the revised <a href="/concepts/eu-2040-climate-proposal">EU 2040 climate proposal</a> in February 2024 after the <a href="/entities/european-commission">European Commission</a> retreated in the face of the <a href="/concepts/2024-european-farmer-protests">European farmer protests</a>.[1]</p><p>Presenting the softened plan, Hoekstra said: &quot;We need to make sure we have a balanced approach. The vast majority of our citizens sees the effects of climate change, does want protection, but is also worried about what that implies for their livelihood.&quot;[1] The revision dropped the previously mandated 30 percent cut to agricultural production by 2040, removed a mandate for citizen lifestyle changes such as eating less meat, and abandoned a push to end fossil fuel subsidies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/wopke-hoekstra.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wopkeHoekstra = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  wopkeHoekstra as default
};
