import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Health Information Sharing and Analysis Center","description":"","frontmatter":{"title":"Health Information Sharing and Analysis Center","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cybersecurity","healthcare","threat-intelligence"],"sources":["raw/badlands-news-brief-83b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/health-information-sharing-and-analysis-center.md","filePath":"entities/health-information-sharing-and-analysis-center.md","lastUpdated":null}');
const _sfc_main = { name: "entities/health-information-sharing-and-analysis-center.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="health-information-sharing-and-analysis-center" tabindex="-1">Health Information Sharing and Analysis Center <a class="header-anchor" href="#health-information-sharing-and-analysis-center" aria-label="Permalink to &quot;Health Information Sharing and Analysis Center&quot;">​</a></h1><p>The <strong>Health Information Sharing and Analysis Center</strong> (H-ISAC) is a cyber threat sharing group serving large health care providers worldwide.[1]</p><p>In May 2024, in the aftermath of the ransomware attack that disrupted the <a href="/entities/ascension">Ascension</a> hospital network, H-ISAC published an advisory warning that hackers using <a href="/entities/black-basta">Black Basta</a> ransomware had &quot;recently accelerated attacks against the healthcare sector.&quot;[1] The advisory stated that at least two health care organizations in Europe and the United States had &quot;suffered severe operational disruptions&quot; because of Black Basta ransomware in the previous month, though it did not name the affected organizations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Baits Israel as Solar Storms Bring the Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-83b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-83b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/health-information-sharing-and-analysis-center.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const healthInformationSharingAndAnalysisCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  healthInformationSharingAndAnalysisCenter as default
};
