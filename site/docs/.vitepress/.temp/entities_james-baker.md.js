import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"James Baker","description":"","frontmatter":{"title":"James Baker","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["american-politics","bush-family","texas-commerce-bank"],"sources":["raw/a-family-affair.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/james-baker.md","filePath":"entities/james-baker.md","lastUpdated":null}');
const _sfc_main = { name: "entities/james-baker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="james-baker" tabindex="-1">James Baker <a class="header-anchor" href="#james-baker" aria-label="Permalink to &quot;James Baker&quot;">​</a></h1><p>James Addison Baker III (born 1930) is an American attorney and political figure who served in high-level positions in the administrations of Presidents Gerald Ford, Ronald Reagan, and George H.W. Bush. In the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a>, Baker is identified as the close friend and political ally of <a href="/entities/george-hw-bush">george-hw-bush</a> whose family founded <a href="/entities/texas-commerce-bank">texas-commerce-bank</a>, and through whom George H.W. Bush arranged for his son <a href="/entities/jeb-bush">jeb-bush</a> to be hired as a CIA non-official cover officer.</p><h2 id="family-connection-to-texas-commerce-bank" tabindex="-1">Family connection to Texas Commerce Bank <a class="header-anchor" href="#family-connection-to-texas-commerce-bank" aria-label="Permalink to &quot;Family connection to Texas Commerce Bank&quot;">​</a></h2><p>According to the <a href="/concepts/wayne-madsen-report">wayne-madsen-report</a>, Texas Commerce Bank was &quot;founded by the family of James Baker.&quot; The source claims that all George H.W. Bush had to do to have Jeb Bush hired by the bank&#39;s international division was call his close friend Baker. The article describes this as evidence of the tight integration between the Bush family, the Baker family, and the CIA&#39;s financial infrastructure in Houston.</p><h2 id="political-career" tabindex="-1">Political career <a class="header-anchor" href="#political-career" aria-label="Permalink to &quot;Political career&quot;">​</a></h2><p>Baker served as White House chief of staff under President Gerald Ford, as White House chief of staff and secretary of the treasury under Ronald Reagan, and as secretary of state under George H.W. Bush. He was a central figure in Republican politics for decades and played key roles in presidential campaigns, tax reform, the end of the Cold War, and the Gulf War. In the Badlands corpus, he is framed as part of the Bush family&#39;s inner circle and as a facilitator of their CIA-linked financial network.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/james-baker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jamesBaker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jamesBaker as default
};
