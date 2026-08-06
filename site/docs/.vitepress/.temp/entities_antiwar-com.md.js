import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Antiwar.com","description":"","frontmatter":{"title":"Antiwar.com","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","foreign-policy","antiwar","journalism"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"low"},"headers":[],"relativePath":"entities/antiwar-com.md","filePath":"entities/antiwar-com.md","lastUpdated":null}');
const _sfc_main = { name: "entities/antiwar-com.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="antiwar-com" tabindex="-1">Antiwar.com <a class="header-anchor" href="#antiwar-com" aria-label="Permalink to &quot;Antiwar.com&quot;">​</a></h1><p><strong>Antiwar.com</strong> is a news and commentary site focused on US foreign policy and military intervention, publishing a news wire under the banner news.antiwar.com.[1]</p><p>The outlet was cited in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> for its coverage of reporting by <a href="/entities/new-york-times">The New York Times</a> that the United States withheld from Russia part of the intelligence it held about the plot behind the <a href="/concepts/crocus-city-hall-attack">Crocus City Hall attack</a>, owing to the adversarial relationship between Washington and Moscow and concern for protecting sources and methods.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/antiwar-com.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const antiwarCom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  antiwarCom as default
};
