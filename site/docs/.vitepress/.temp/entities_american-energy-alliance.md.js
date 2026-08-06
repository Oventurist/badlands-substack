import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"American Energy Alliance","description":"","frontmatter":{"title":"American Energy Alliance","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","regulation","advocacy","deregulation"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"low"},"headers":[],"relativePath":"entities/american-energy-alliance.md","filePath":"entities/american-energy-alliance.md","lastUpdated":null}');
const _sfc_main = { name: "entities/american-energy-alliance.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="american-energy-alliance" tabindex="-1">American Energy Alliance <a class="header-anchor" href="#american-energy-alliance" aria-label="Permalink to &quot;American Energy Alliance&quot;">​</a></h1><p>The American Energy Alliance is an energy policy advocacy organization quoted in November 2024 on the mechanics of rolling back federal energy regulation.[1]</p><p>Dan Kish, the group&#39;s senior vice president of policy, told The Epoch Times that undoing the <a href="/entities/joe-biden">Biden</a>-era rules would proceed &quot;on a regulation-by-regulation basis,&quot; and that there were &quot;actually three categories: executive orders, action from Congress, and those things that have to be done through regulation.&quot;[1] Kish added that a process had been set up for changing regulations and that all of those avenues were available to <a href="/entities/donald-trump">Trump</a> depending on the final congressional outcome.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/american-energy-alliance.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americanEnergyAlliance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americanEnergyAlliance as default
};
