import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bernie Madoff","description":"","frontmatter":{"title":"Bernie Madoff","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","fraud","ponzi-scheme","finance"],"sources":["raw/a-week-to-remember.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/bernie-madoff.md","filePath":"entities/bernie-madoff.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bernie-madoff.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bernie-madoff" tabindex="-1">Bernie Madoff <a class="header-anchor" href="#bernie-madoff" aria-label="Permalink to &quot;Bernie Madoff&quot;">​</a></h1><p>Bernie Madoff was an American financier convicted of operating the largest Ponzi scheme in history, defrauding investors of tens of billions of dollars before his arrest in 2008.</p><h2 id="as-a-point-of-comparison" tabindex="-1">As a point of comparison <a class="header-anchor" href="#as-a-point-of-comparison" aria-label="Permalink to &quot;As a point of comparison&quot;">​</a></h2><p>Madoff appears in the Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> purely as a benchmark for scale. Having described a cycle in which the <a href="/entities/federal-reserve">Federal Reserve</a> prints money, lends it to banks, and passes the resulting <a href="/concepts/inflation">inflation</a> and interest costs on to home buyers while politicians are funded by the same banks, <a href="/entities/erik-carlson">Erik Carlson</a> concludes: &quot;Bernie Madoff is a lightweight compared to these Ponzi schemers.&quot;</p><p>The comparison is central to the article&#39;s rhetorical strategy, which repeatedly characterises the American monetary system as a rigged game — &quot;a roulette table … [where] the wheel has a magnet&quot; — whose survival depends on the public not recognising it as fraud.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bernie-madoff.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bernieMadoff = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bernieMadoff as default
};
