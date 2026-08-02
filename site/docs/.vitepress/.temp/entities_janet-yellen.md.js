import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Janet Yellen","description":"","frontmatter":{"title":"Janet Yellen","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","central-banking","federal-reserve","treasury"],"sources":["raw/a-week-to-remember.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/janet-yellen.md","filePath":"entities/janet-yellen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/janet-yellen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="janet-yellen" tabindex="-1">Janet Yellen <a class="header-anchor" href="#janet-yellen" aria-label="Permalink to &quot;Janet Yellen&quot;">​</a></h1><p>Janet Yellen served as chair of the <a href="/entities/federal-reserve">Federal Reserve</a> from 2014 to 2018, presiding over the beginning of the withdrawal of post-2008 emergency monetary policy, and later became Secretary of the Treasury.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>The Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> describes Yellen dismissively, stating that when <a href="/entities/donald-trump">Donald Trump</a> won the 2016 election he &quot;inherited shroom-tripping Janet Yellen as his Fed Chairman and had to keep her for two years before she could be replaced.&quot; The article dates the first interest rate hike of the post-crisis era to the period immediately following Trump&#39;s victory, contrasting it with the eight preceding years under <a href="/entities/barack-obama">Barack Obama</a> in which, the author argues, the Fed &quot;never found an opportunity to raise interest rates back to a more normal level, or reduce the balance sheet.&quot;</p><p>In the essay&#39;s framing, that prolonged easy-money regime existed to allow companies such as Facebook, Amazon, Apple, Netflix, and Google to expand into mega-cap firms — an outcome the author attributes to preferential treatment. Yellen&#39;s replacement by <a href="/entities/jerome-powell">Jerome Powell</a> in 2018 marks, in the article&#39;s telling, the transition from &quot;a fake, stimulated economy&quot; toward &quot;a real economy.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/janet-yellen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const janetYellen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  janetYellen as default
};
