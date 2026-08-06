import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Saint Anselm College","description":"","frontmatter":{"title":"Saint Anselm College","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-hampshire","education","politics"],"sources":["raw/badlands-news-brief-148.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/saint-anselm-college.md","filePath":"entities/saint-anselm-college.md","lastUpdated":null}');
const _sfc_main = { name: "entities/saint-anselm-college.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="saint-anselm-college" tabindex="-1">Saint Anselm College <a class="header-anchor" href="#saint-anselm-college" aria-label="Permalink to &quot;Saint Anselm College&quot;">​</a></h1><p>Saint Anselm College is a college in New Hampshire that regularly hosts presidential campaign events.[1]</p><h2 id="_2023-cnn-town-hall" tabindex="-1">2023 CNN town hall <a class="header-anchor" href="#_2023-cnn-town-hall" aria-label="Permalink to &quot;2023 CNN town hall&quot;">​</a></h2><p>On May 10, 2023, the college hosted the <a href="/entities/cnn">CNN</a> town hall with former President <a href="/entities/donald-trump">Donald Trump</a>, moderated by <a href="/entities/kaitlan-collins">Kaitlan Collins</a> before an audience of New Hampshire GOP primary voters.[1] It was at this venue that Trump declined to say who he thought should prevail in Russia&#39;s war against Ukraine, saying instead that he wanted &quot;everybody to stop dying&quot; and that he would have the conflict settled in 24 hours.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: FOX Fights, Trump Trolls &amp; Twitter Turns?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-148" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-148</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/saint-anselm-college.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const saintAnselmCollege = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  saintAnselmCollege as default
};
