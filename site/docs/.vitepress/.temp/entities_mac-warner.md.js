import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mac Warner","description":"","frontmatter":{"title":"Mac Warner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["west-virginia","elections","secretary-of-state","ballot-access"],"sources":["raw/badlands-news-brief-2a0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mac-warner.md","filePath":"entities/mac-warner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mac-warner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mac-warner" tabindex="-1">Mac Warner <a class="header-anchor" href="#mac-warner" aria-label="Permalink to &quot;Mac Warner&quot;">​</a></h1><p><strong>Mac Warner</strong> is the Secretary of State of West Virginia, the official responsible for the administration of elections and ballot access in the state.[1]</p><p>Warner was a defendant in the 2023 lawsuit brought by presidential candidate <a href="/entities/john-anthony-castro">John Anthony Castro</a> seeking to bar former President <a href="/entities/donald-trump">Donald Trump</a> from the West Virginia presidential ballot under Section 3 of the <a href="/concepts/fourteenth-amendment">Fourteenth Amendment</a>.[1] U.S. District Judge <a href="/entities/irene-berger">Irene Berger</a> sided with attorneys for Trump, Warner, and the <a href="/entities/west-virginia-republican-party">West Virginia GOP</a> in dismissing the suit for lack of standing.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Witch Hunt Hits a Few Snags as the Landscape Shifts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2a0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2a0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mac-warner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const macWarner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  macWarner as default
};
