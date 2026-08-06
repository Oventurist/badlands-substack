import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Drew Sullivan","description":"","frontmatter":{"title":"Drew Sullivan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","ngo","occrp"],"sources":["raw/badlands-news-brief-2f5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/drew-sullivan.md","filePath":"entities/drew-sullivan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/drew-sullivan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="drew-sullivan" tabindex="-1">Drew Sullivan <a class="header-anchor" href="#drew-sullivan" aria-label="Permalink to &quot;Drew Sullivan&quot;">​</a></h1><p>Drew Sullivan is an entrepreneur and journalist identified as the co-founder of the <a href="/entities/organized-crime-and-corruption-reporting-project">Organized Crime and Corruption Reporting Project</a> (OCCRP), an international NGO of journalists operating in six countries.[1]</p><p>The organization Sullivan co-founded was reported in December 2024 to have received 52 percent of the funds it spent between 2014 and 2023 from the U.S. federal government, chiefly the <a href="/entities/state-department">Department of State</a>, along with roughly $15 million from European governments and backing from <a href="/entities/george-soros">George Soros</a>&#39;s <a href="/entities/open-society-foundations">Open Society Foundations</a>.[1] OCCRP&#39;s reporting on <a href="/entities/rudy-giuliani">Rudy Giuliani</a>&#39;s Ukraine activities was cited multiple times in the whistleblower complaint that triggered the <a href="/concepts/first-impeachment-of-donald-trump">first impeachment of Donald Trump</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Korea Joins the Shenanigans as Drama Gives Way to Comedy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/drew-sullivan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const drewSullivan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  drewSullivan as default
};
