import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sean Spicer","description":"","frontmatter":{"title":"Sean Spicer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["white-house","press-secretary","republican","media"],"sources":["raw/badlands-news-brief-7ed.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sean-spicer.md","filePath":"entities/sean-spicer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sean-spicer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sean-spicer" tabindex="-1">Sean Spicer <a class="header-anchor" href="#sean-spicer" aria-label="Permalink to &quot;Sean Spicer&quot;">​</a></h1><p>Sean Spicer served as White House press secretary for <a href="/entities/donald-trump">Donald Trump</a> upon Trump taking office in 2017. In January 2025 he was cited as a commentator contrasting the incoming second Trump administration with the first.[1]</p><h2 id="commentary-on-trump-2-0" tabindex="-1">Commentary on &quot;Trump 2.0&quot; <a class="header-anchor" href="#commentary-on-trump-2-0" aria-label="Permalink to &quot;Commentary on &quot;Trump 2.0&quot;&quot;">​</a></h2><p>Quoted by The Hill ahead of Trump&#39;s second inauguration, Spicer said: &quot;When it comes to the three big things — the people, the process and the priorities — these guys are in a totally different league than we were in 2016.&quot;[1] He added that the difference was &quot;not just lessons learned. It has to do with the environment,&quot; noting that Trump this time had the full backing of the Republican Party and was entering office with the mandate of a popular vote victory.[1] The reporting framed the incoming Trump as a radically different figure from the one who arrived in Washington eight years earlier — one who knows more about how Washington works and who is supported by a disciplined operation under chief of staff <a href="/entities/susie-wiles">Susie Wiles</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Unlikely Ambassadors, The Ceasefire Accords, &amp; Predatory Cartoonist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sean-spicer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seanSpicer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seanSpicer as default
};
