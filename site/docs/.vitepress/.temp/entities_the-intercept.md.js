import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Intercept","description":"","frontmatter":{"title":"The Intercept","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","press-freedom","assange"],"sources":["raw/badlands-news-brief-228.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/the-intercept.md","filePath":"entities/the-intercept.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-intercept.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-intercept" tabindex="-1">The Intercept <a class="header-anchor" href="#the-intercept" aria-label="Permalink to &quot;The Intercept&quot;">​</a></h1><p>The Intercept is an investigative news outlet whose reporting on national security and press freedom is periodically aggregated by <a href="/entities/badlands-media">Badlands Media</a> in its news briefs.[1]</p><h2 id="assange-plea-deal-reporting" tabindex="-1">Assange plea-deal reporting <a class="header-anchor" href="#assange-plea-deal-reporting" aria-label="Permalink to &quot;Assange plea-deal reporting&quot;">​</a></h2><p>In August 2023 The Intercept reported that the United States was considering a plea deal that would allow WikiLeaks founder <a href="/entities/julian-assange">Julian Assange</a> to return to Australia, following remarks by U.S. Ambassador <a href="/entities/caroline-kennedy">Caroline Kennedy</a> to the <em>Sydney Morning Herald</em>.[1] The outlet noted that Assange had been held in a London prison since 2019 while contesting extradition, faced 18 U.S. charges — 17 under the <a href="/concepts/espionage-act">Espionage Act</a> — and that the 2010 files he published included footage of a U.S. airstrike in Baghdad that killed 18 civilians, among them journalists, along with hundreds of thousands of Iraq War field reports.[1] The Intercept reported that the <a href="/entities/department-of-justice">Department of Justice</a> declined to comment and the <a href="/entities/state-department">State Department</a> did not respond to its request for comment, and it obtained comment from Assange&#39;s brother Gabriel Shipton.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;A Biden, a Clinton and a Trump Walk Into a SCIF&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-228" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-228</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-intercept.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theIntercept = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theIntercept as default
};
