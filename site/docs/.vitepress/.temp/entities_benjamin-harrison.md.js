import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Benjamin Harrison","description":"","frontmatter":{"title":"Benjamin Harrison","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-presidents","lame-duck","economic-history"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"low"},"headers":[],"relativePath":"entities/benjamin-harrison.md","filePath":"entities/benjamin-harrison.md","lastUpdated":null}');
const _sfc_main = { name: "entities/benjamin-harrison.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="benjamin-harrison" tabindex="-1">Benjamin Harrison <a class="header-anchor" href="#benjamin-harrison" aria-label="Permalink to &quot;Benjamin Harrison&quot;">​</a></h1><p>Benjamin Harrison was the 23rd President of the United States, invoked in Badlands commentary as the archetype of a destructive lame-duck presidency.[1]</p><p>According to the account offered by <a href="/entities/ashe-in-america">Ashe in America</a>, Harrison decided to torpedo the American economy to harm his successor: he used friendly media to run doomsday editorials that scared off foreign investment and directed the U.S. Treasury to spend the surplus.[1] The stock market crashed with only eight days remaining before Harrison left office, and <a href="/entities/grover-cleveland">Grover Cleveland</a> was inaugurated into the resulting crisis.[1] The <a href="/concepts/panic-of-1893">Panic of 1893</a> produced a severe economic depression that continued through 1897, and Cleveland was blamed — characterized in the commentary as a historic injustice given that his predecessor had tanked the economy to punish Americans for voting in his opponent.[1]</p><p>The comparison was drawn to argue that lame-duck <a href="/entities/joe-biden">Joe Biden</a>&#39;s late-2024 authorization of long-range missile strikes inside <a href="/entities/russia">Russia</a> represented a similar attempt to punish Americans for electing <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/benjamin-harrison.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benjaminHarrison = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benjaminHarrison as default
};
