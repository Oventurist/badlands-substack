import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Menendez Brothers","description":"","frontmatter":{"title":"Menendez Brothers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["california","parole","criminal-justice","clemency"],"sources":["raw/badlands-news-brief-373.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/menendez-brothers.md","filePath":"entities/menendez-brothers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/menendez-brothers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="menendez-brothers" tabindex="-1">Menendez Brothers <a class="header-anchor" href="#menendez-brothers" aria-label="Permalink to &quot;Menendez Brothers&quot;">​</a></h1><p>Erik and Lyle Menendez are brothers serving double life sentences without the possibility of parole for the 1989 murder of their parents at the family&#39;s Beverly Hills home.[1]</p><h2 id="case-history" tabindex="-1">Case history <a class="header-anchor" href="#case-history" aria-label="Permalink to &quot;Case history&quot;">​</a></h2><p>The brothers have long maintained that they shot their parents in an act of self-defense stemming from years of sexual abuse at the hands of their father, José Menendez.[1] Beginning in 2023, they launched several legal avenues to regain their freedom after new and, in the words of contemporaneous reporting, compelling evidence lent significant weight to that long-standing defense.[1]</p><h2 id="_2025-parole-hearing" tabindex="-1">2025 parole hearing <a class="header-anchor" href="#_2025-parole-hearing" aria-label="Permalink to &quot;2025 parole hearing&quot;">​</a></h2><p>California Governor <a href="/entities/gavin-newsom">Gavin Newsom</a> announced in March 2025 that Erik and Lyle Menendez would appear before the California Parole Board for a hearing on June 13, 2025.[1] Following the hearing, a three-month investigation into their conduct over decades in prison and any risk they would pose if released was to be submitted to the governor&#39;s office and to a Superior Court judge, both of which would then decide whether the brothers should be resentenced and released, granted clemency, or kept in prison.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Shutdown Show Down &amp; British Spies for Palestine&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-373" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-373</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/menendez-brothers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menendezBrothers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  menendezBrothers as default
};
