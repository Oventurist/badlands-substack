import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GlobalX","description":"","frontmatter":{"title":"GlobalX","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aviation","deportation","immigration","ice"],"sources":["raw/badlands-news-brief-222.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/globalx.md","filePath":"entities/globalx.md","lastUpdated":null}');
const _sfc_main = { name: "entities/globalx.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="globalx" tabindex="-1">GlobalX <a class="header-anchor" href="#globalx" aria-label="Permalink to &quot;GlobalX&quot;">​</a></h1><p><strong>GlobalX</strong> is a United States charter airline contracted by <a href="/entities/immigration-and-customs-enforcement">U.S. Immigration and Customs Enforcement</a> to carry out deportation flights, and has been described as the Trump administration&#39;s airline of choice for removals.[1]</p><h2 id="deportation-flights-to-el-salvador" tabindex="-1">Deportation flights to El Salvador <a class="header-anchor" href="#deportation-flights-to-el-salvador" aria-label="Permalink to &quot;Deportation flights to El Salvador&quot;">​</a></h2><p>GlobalX was the carrier hired by the U.S. government to transport approximately 130 Venezuelan migrants to El Salvador on March 15, 2025, in an operation targeting alleged members of the <a href="/entities/tren-de-aragua">Tren de Aragua</a> gang.[1] On May 1 a U.S. federal judge ruled that the reasoning behind those deportations was illegal.[1]</p><h2 id="anonymous-defacement" tabindex="-1">Anonymous defacement <a class="header-anchor" href="#anonymous-defacement" aria-label="Permalink to &quot;Anonymous defacement&quot;">​</a></h2><p>In early May 2025 the hacker collective <a href="/entities/anonymous">Anonymous</a> defaced the landing page of a GlobalX subdomain, leaving a lengthy message protesting the removal of &quot;alleged members of a Venezuelan gang&quot; and referring to President <a href="/entities/donald-trump">Donald Trump</a> as a &quot;fascist.&quot;[1] The hacktivists wrote &quot;You lose again Donnie,&quot; alluding to the federal court ruling against the deportations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Intelligence Narratives &amp; Seemingly Impossible Deals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-222" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-222</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/globalx.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const globalx = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  globalx as default
};
