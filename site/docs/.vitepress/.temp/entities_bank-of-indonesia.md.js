import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bank Indonesia","description":"","frontmatter":{"title":"Bank Indonesia","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["central-bank","indonesia","payments","de-dollarization"],"sources":["raw/badlands-news-brief-85a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bank-of-indonesia.md","filePath":"entities/bank-of-indonesia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bank-of-indonesia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bank-indonesia" tabindex="-1">Bank Indonesia <a class="header-anchor" href="#bank-indonesia" aria-label="Permalink to &quot;Bank Indonesia&quot;">​</a></h1><p>Bank Indonesia is the central bank of <a href="/entities/indonesia">Indonesia</a> and the institution responsible for the country&#39;s monetary policy and payment infrastructure.[1]</p><h2 id="transition-away-from-foreign-card-networks" tabindex="-1">Transition away from foreign card networks <a class="header-anchor" href="#transition-away-from-foreign-card-networks" aria-label="Permalink to &quot;Transition away from foreign card networks&quot;">​</a></h2><p>In March 2023 the Antara news agency reported that Bank Indonesia was preparing to transition away from <a href="/entities/visa">Visa</a> and <a href="/entities/mastercard">Mastercard</a> while developing an indigenous domestic payment platform.[1] The central bank&#39;s work paralleled a political push by President <a href="/entities/joko-widodo">Joko Widodo</a>, who directed local agencies and authorities to adopt cards authorised by Indonesian banks rather than international payment systems.[1]</p><p>The stated rationale was resilience against geopolitical shocks, with the sanctions imposed on <a href="/entities/russia">Russia</a> by the United States, the European Union and their allies over the Ukraine war offered as the example of what dependence on foreign payment rails could cost.[1] Observers in the Truth Community treated the initiative as a concrete instance of <a href="/concepts/de-dollarization">de-dollarization</a> by a state of 278 million people.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bank of Epstein, Saudi Arabia &amp; Trump&#39;s Reprieve?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-85a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-85a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bank-of-indonesia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bankOfIndonesia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bankOfIndonesia as default
};
