import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dave Ramsey","description":"","frontmatter":{"title":"Dave Ramsey","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["personal-finance","commentary","millennials"],"sources":["raw/a-time-to-strike.md"],"confidence":"low"},"headers":[],"relativePath":"entities/dave-ramsey.md","filePath":"entities/dave-ramsey.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dave-ramsey.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dave-ramsey" tabindex="-1">Dave Ramsey <a class="header-anchor" href="#dave-ramsey" aria-label="Permalink to &quot;Dave Ramsey&quot;">​</a></h1><p>Dave Ramsey is an American personal-finance commentator quoted in <a href="/entities/badlands-media">Badlands Media</a>&#39;s analysis of the 2023 strike wave for his quip that &quot;there are two types of &#39;millennial&#39;: Awesome and Sucks.&quot;<a href="https://badlands.substack.com/p/a-time-to-strike" target="_blank" rel="noreferrer">[1]</a></p><h2 id="use-in-badlands-commentary" tabindex="-1">Use in Badlands commentary <a class="header-anchor" href="#use-in-badlands-commentary" aria-label="Permalink to &quot;Use in Badlands commentary&quot;">​</a></h2><p><a href="/entities/ashe-in-america">Ashe in America</a> invoked the Ramsey line as a hinge for a wider argument about generational expectations at the bargaining table, allowing that many millennials are &quot;awesome&quot; while contending that the cohort brought social justice politics into the workplace and into corporate brands, and had become the first digital-native generation to reach the union negotiating table.<a href="https://badlands.substack.com/p/a-time-to-strike" target="_blank" rel="noreferrer">[1]</a> The essay went on to argue that millennial expectations — reflected in <a href="/entities/united-auto-workers">United Auto Workers</a> demands for a four-day week and a 46 percent pay increase — risked destroying entire industries, while insisting the fault lay with the media programming and academic education that shaped that worldview rather than with the generation itself.<a href="https://badlands.substack.com/p/a-time-to-strike" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Time to Strike&quot;, URL: <a href="https://badlands.substack.com/p/a-time-to-strike" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-time-to-strike</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dave-ramsey.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const daveRamsey = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  daveRamsey as default
};
