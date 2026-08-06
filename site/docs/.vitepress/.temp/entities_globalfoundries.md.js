import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GlobalFoundries","description":"","frontmatter":{"title":"GlobalFoundries","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["semiconductors","chips-act","manufacturing","singapore"],"sources":["raw/badlands-news-brief-18e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/globalfoundries.md","filePath":"entities/globalfoundries.md","lastUpdated":null}');
const _sfc_main = { name: "entities/globalfoundries.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="globalfoundries" tabindex="-1">GlobalFoundries <a class="header-anchor" href="#globalfoundries" aria-label="Permalink to &quot;GlobalFoundries&quot;">​</a></h1><p>GlobalFoundries is a contract semiconductor manufacturer named in the <a href="/entities/white-house">White House</a>&#39;s August 2022 promotion of the <a href="/concepts/chips-and-science-act">CHIPS and Science Act</a> and later cited by critics of that law.[1]</p><h2 id="chips-act-partnership" tabindex="-1">CHIPS Act partnership <a class="header-anchor" href="#chips-act-partnership" aria-label="Permalink to &quot;CHIPS Act partnership&quot;">​</a></h2><p>The White House fact sheet of August 9, 2022 announced a new partnership between <a href="/entities/qualcomm">Qualcomm</a> and GlobalFoundries that included $4.2 billion to manufacture chips through an expansion of GlobalFoundries&#39; upstate New York facility.[1]</p><h2 id="singapore-expansion" tabindex="-1">Singapore expansion <a class="header-anchor" href="#singapore-expansion" aria-label="Permalink to &quot;Singapore expansion&quot;">​</a></h2><p>A year after the CHIPS and Science Act was signed, GlobalFoundries opened a $4 billion expanded fabrication plant in Singapore.[1] The 23,000-square-metre site was expected to create 1,000 jobs in Singapore, including new roles for equipment technicians, process technicians and engineers.[1] Badlands commentary used the Singapore opening, together with <a href="/entities/micron-technology">Micron</a>&#39;s delayed Syracuse project, to argue that American taxpayers had funded corporate expansion abroad rather than domestic capacity.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: Irregular Warfare, Washington &amp; So Much Winning&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-18e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-18e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/globalfoundries.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const globalfoundries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  globalfoundries as default
};
