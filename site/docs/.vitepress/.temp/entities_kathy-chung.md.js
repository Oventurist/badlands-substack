import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kathy Chung","description":"","frontmatter":{"title":"Kathy Chung","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["biden-family","congressional-oversight","staff"],"sources":["raw/badlands-news-brief-08c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kathy-chung.md","filePath":"entities/kathy-chung.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kathy-chung.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kathy-chung" tabindex="-1">Kathy Chung <a class="header-anchor" href="#kathy-chung" aria-label="Permalink to &quot;Kathy Chung&quot;">​</a></h1><p>Kathy Chung is a longtime aide associated with <a href="/entities/joe-biden">Joe Biden</a> whose role in coordinating Biden family travel has drawn attention from congressional investigators.[1]</p><p>Analysis by <a href="/entities/jon-herold">Jon Herold</a> published in the Badlands News Brief identifies Chung as the person who arranged the September 2017 flight itineraries for Joe Biden and, separately, for <a href="/entities/hunter-biden">Hunter Biden</a> and <a href="/entities/jim-biden">Jim Biden</a> on the same dates, 11–17 September 2017, for travel to Ireland.[1] Herold flags the overlap as relevant to the oversight activity of Representative <a href="/entities/james-comer">James Comer</a>, who has pursued Chung&#39;s testimony and records in connection with the handling of Biden documents and travel.[1]</p><p>The itineraries feature in Herold&#39;s larger argument that the Ireland trip provided the occasion for a &quot;sensitive&quot; meeting between the younger Bidens and representatives of <a href="/entities/cefc-china-energy">CEFC China Energy</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Real Leaks &amp; Fake News&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-08c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-08c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kathy-chung.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kathyChung = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kathyChung as default
};
