import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lizzo","description":"","frontmatter":{"title":"Lizzo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["entertainment","celebrity","fundraising","2024-election"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"low"},"headers":[],"relativePath":"entities/lizzo.md","filePath":"entities/lizzo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lizzo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lizzo" tabindex="-1">Lizzo <a class="header-anchor" href="#lizzo" aria-label="Permalink to &quot;Lizzo&quot;">​</a></h1><p><strong>Lizzo</strong> is an American singer and entertainer who appeared at a high-dollar Democratic fundraiser in late March 2024 alongside President <a href="/entities/joe-biden">Joe Biden</a>, former presidents <a href="/entities/barack-obama">Barack Obama</a> and <a href="/entities/bill-clinton">Bill Clinton</a>, and other celebrities.[1]</p><p>The event, priced at up to $500,000 per ticket, raised $25 million for Biden&#39;s re-election campaign and was held hours after former President <a href="/entities/donald-trump">Donald Trump</a> attended the wake of slain <a href="/entities/nypd">NYPD</a> officer <a href="/entities/jonathan-diller">Jonathan Diller</a>.[1] Her presence at the fundraiser was cited by critics as emblematic of the contrast between &quot;partying Dems&quot; and Trump&#39;s mourning appearance.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lizzo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lizzo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lizzo as default
};
