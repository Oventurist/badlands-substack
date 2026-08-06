import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tina Kotek","description":"","frontmatter":{"title":"Tina Kotek","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["oregon","governors","democrats","elections"],"sources":["raw/badlands-news-brief-74c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tina-kotek.md","filePath":"entities/tina-kotek.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tina-kotek.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tina-kotek" tabindex="-1">Tina Kotek <a class="header-anchor" href="#tina-kotek" aria-label="Permalink to &quot;Tina Kotek&quot;">​</a></h1><p>Tina Kotek is an American Democratic politician serving as governor of Oregon, whose office coordinated the state&#39;s response to feared unrest around the 2024 general election.[1]</p><h2 id="_2024-election-security" tabindex="-1">2024 election security <a class="header-anchor" href="#_2024-election-security" aria-label="Permalink to &quot;2024 election security&quot;">​</a></h2><p>In a statement issued the Friday before Election Day 2024, Kotek said the Oregon <a href="/entities/national-guard">National Guard</a> was standing ready as political leaders called for peaceful protests.[1] &quot;The governor&#39;s office is closely monitoring and coordinating with local, state and federal agencies to ensure Oregon voters can safely cast their ballot,&quot; the statement said.[1]</p><p>The precaution followed the <a href="/concepts/2024-pacific-northwest-ballot-box-fires">ballot drop box fires</a> in Portland and across the Columbia River in Vancouver, Washington, in which hundreds of ballots were damaged or destroyed.[1] Oregon had previously deployed the Guard alongside a unified command for election security in 2020.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Day of Days Has Arrived ...&quot;, raw/badlands-news-brief-74c.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tina-kotek.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tinaKotek = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tinaKotek as default
};
