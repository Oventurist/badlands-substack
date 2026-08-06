import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Harris","description":"","frontmatter":{"title":"Bill Harris","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["paypal","intuit","democratic-donors","2024-election"],"sources":["raw/badlands-news-brief-185.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bill-harris.md","filePath":"entities/bill-harris.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-harris.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-harris" tabindex="-1">Bill Harris <a class="header-anchor" href="#bill-harris" aria-label="Permalink to &quot;Bill Harris&quot;">​</a></h1><p>Bill Harris is a technology executive described in reporting on the 2024 Democratic donor revolt as a former Intuit and PayPal chief executive.[1] He contributed $620,000 to the Biden Victory Fund during the 2020 campaign cycle.[1]</p><p>In July 2024, after President <a href="/entities/joe-biden">Joe Biden</a>&#39;s debate performance and his follow-up interview with <a href="/entities/george-stephanopoulos">George Stephanopoulos</a>, Harris told ABC News that most observers would regard Biden&#39;s departure from the race as &quot;inevitable.&quot;[1] Rather than simply withdrawing support, Harris was identified among mega-donors engaged in what ZeroHedge called &quot;creative political-financial engineering&quot; — structuring political action committees capable of funding a &quot;mini-primary&quot; and an alternative Democratic nominee.[1] He was cited alongside <a href="/entities/reed-hastings">Reed Hastings</a> and <a href="/entities/whitney-tilson">Whitney Tilson</a> as part of that group.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;A Biden, a Schwab and a Ukrainian Dwarf Walk into a Bar ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-185" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-185</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-harris.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billHarris = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billHarris as default
};
