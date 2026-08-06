import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Black Basta","description":"","frontmatter":{"title":"Black Basta","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cybersecurity","ransomware","healthcare","russia"],"sources":["raw/badlands-news-brief-83b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/black-basta.md","filePath":"entities/black-basta.md","lastUpdated":null}');
const _sfc_main = { name: "entities/black-basta.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="black-basta" tabindex="-1">Black Basta <a class="header-anchor" href="#black-basta" aria-label="Permalink to &quot;Black Basta&quot;">​</a></h1><p><strong>Black Basta</strong> is both a strain of ransomware and the name of the broad criminal group that deploys it.[1] According to the <a href="/entities/department-of-health-and-human-services">Department of Health and Human Services</a>, the group includes Russian-speaking members.[1] Ransomware operations of this kind typically lock victims&#39; computers and steal data for extortion.[1]</p><p>Black Basta has been used repeatedly against health care organizations in recent years.[1] In May 2024, four sources briefed on the investigation told <a href="/entities/cnn">CNN</a> that the cyberattack that forced <a href="/entities/ascension">Ascension</a> — a 140-hospital nonprofit network — to divert ambulances was a Black Basta ransomware attack.[1]</p><p>On the Friday following the Ascension disruption, the <a href="/entities/health-information-sharing-and-analysis-center">Health Information Sharing and Analysis Center</a>, a cyber threat sharing group for large health care providers worldwide, published an advisory warning that hackers using Black Basta ransomware had &quot;recently accelerated attacks against the healthcare sector.&quot;[1] The advisory cited at least two health care organizations in Europe and the United States that had suffered &quot;severe operational disruptions&quot; from Black Basta in the preceding month, without naming them.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Baits Israel as Solar Storms Bring the Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-83b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-83b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/black-basta.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blackBasta = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blackBasta as default
};
