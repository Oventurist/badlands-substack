import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Great Barrington Declaration","description":"","frontmatter":{"title":"Great Barrington Declaration","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["covid-19","lockdowns","public-health","dissent"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/great-barrington-declaration.md","filePath":"concepts/great-barrington-declaration.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/great-barrington-declaration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="great-barrington-declaration" tabindex="-1">Great Barrington Declaration <a class="header-anchor" href="#great-barrington-declaration" aria-label="Permalink to &quot;Great Barrington Declaration&quot;">​</a></h1><p>The Great Barrington Declaration is an October 2020 open letter opposing COVID-19 lockdown policies, authored by <a href="/entities/jay-bhattacharya">Jay Bhattacharya</a> of Stanford University, Martin Kulldorff of Harvard University, and Sunetra Gupta of Oxford University.[1]</p><p>The document called for an end to the COVID-19 lockdowns that had been in effect for most of 2020 and garnered hundreds of thousands of signatures.[1] Its authors wrote: &quot;As infectious disease epidemiologists and public health scientists we have grave concerns about the damaging physical and mental health impacts of the prevailing COVID-19 policies.&quot;[1]</p><p>The declaration became a defining credential for its signatories within the dissident public-health community, and Bhattacharya&#39;s authorship was cited in November 2024 reporting on his candidacy to lead the <a href="/entities/national-institutes-of-health">National Institutes of Health</a> in the incoming <a href="/entities/donald-trump">Trump</a> administration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/great-barrington-declaration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const greatBarringtonDeclaration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  greatBarringtonDeclaration as default
};
