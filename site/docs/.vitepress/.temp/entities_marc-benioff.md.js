import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marc Benioff","description":"","frontmatter":{"title":"Marc Benioff","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["business","technology","artificial-intelligence","layoffs"],"sources":["raw/badlands-news-brief-4ee.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/marc-benioff.md","filePath":"entities/marc-benioff.md","lastUpdated":null}');
const _sfc_main = { name: "entities/marc-benioff.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marc-benioff" tabindex="-1">Marc Benioff <a class="header-anchor" href="#marc-benioff" aria-label="Permalink to &quot;Marc Benioff&quot;">​</a></h1><p>Marc Benioff is the chief executive officer of <a href="/entities/salesforce">Salesforce</a>, the cloud software company.[1]</p><h2 id="_2025-ai-driven-support-layoffs" tabindex="-1">2025 AI-driven support layoffs <a class="header-anchor" href="#_2025-ai-driven-support-layoffs" aria-label="Permalink to &quot;2025 AI-driven support layoffs&quot;">​</a></h2><p>In an appearance on the Logan Bartlett podcast released on Friday, August 29, 2025, Benioff confirmed that Salesforce had cut roughly 4,000 customer support jobs as artificial intelligence assumed a growing share of the company&#39;s service operations.[1] He said he had &quot;rebalanced&quot; head count in support, reducing it from about 9,000 employees to roughly 5,000 because he &quot;needed less heads.&quot;[1] The reduction amounts to nearly a 45 percent cut in the company&#39;s support division.[1]</p><p>The Badlands News Brief filed the disclosure under the theme of &quot;AI scabs,&quot; presenting it as part of a broader wave of technology-sector layoffs driven by automation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Heightened Homohysteria, AI Scabs, &amp; A Dutch Diddler&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4ee" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4ee</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/marc-benioff.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marcBenioff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marcBenioff as default
};
