import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Posey","description":"","frontmatter":{"title":"Bill Posey","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republicans","florida","oversight"],"sources":["raw/badlands-news-brief-79c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bill-posey.md","filePath":"entities/bill-posey.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-posey.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-posey" tabindex="-1">Bill Posey <a class="header-anchor" href="#bill-posey" aria-label="Permalink to &quot;Bill Posey&quot;">​</a></h1><p>Bill Posey is a Republican member of the United States House of Representatives from Florida.[1]</p><p>Posey was among the lawmakers pressing the <a href="/entities/fbi">Federal Bureau of Investigation</a> for answers about the <a href="/concepts/january-5-2021-pipe-bombs">pipe bombs placed at the Democratic and Republican national committee headquarters</a> on January 5, 2021. He first requested a briefing from the bureau on September 2, 2021, renewed the request formally on March 9, 2022, and sought one again at the start of the new Congress on January 17, 2023.[1] In May 2023 he joined <a href="/entities/house-judiciary-committee">House Judiciary Committee</a> chairman <a href="/entities/jim-jordan">Jim Jordan</a> and Representative <a href="/entities/andy-biggs">Andy Biggs</a> in a letter to FBI Director <a href="/entities/christopher-wray">Christopher Wray</a> noting that the bureau had failed to comply for more than a year and a half and citing a whistleblower disclosure raising questions about the &quot;unusual&quot; nature of the investigation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Target Tumbles, Trump Tops &amp; Feds Fabricate&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-79c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-79c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-posey.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billPosey = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billPosey as default
};
