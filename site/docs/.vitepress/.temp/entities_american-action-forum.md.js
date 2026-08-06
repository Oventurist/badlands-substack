import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"American Action Forum","description":"","frontmatter":{"title":"American Action Forum","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["think-tank","regulation","deregulation","economics"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"low"},"headers":[],"relativePath":"entities/american-action-forum.md","filePath":"entities/american-action-forum.md","lastUpdated":null}');
const _sfc_main = { name: "entities/american-action-forum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="american-action-forum" tabindex="-1">American Action Forum <a class="header-anchor" href="#american-action-forum" aria-label="Permalink to &quot;American Action Forum&quot;">​</a></h1><p>The American Action Forum is a policy organization that tracks the cost of federal regulation.[1]</p><p>According to its tallies cited in November 2024, the <a href="/entities/joe-biden">Biden</a> administration had finalized 1,114 new regulations to date, adding $1.8 trillion in costs to American businesses and consumers along with an estimated 346 million hours of paperwork.[1] These figures framed reporting on the difficulty facing the incoming <a href="/entities/donald-trump">Trump</a> administration in unwinding regulations, particularly those intended to meet net-zero emissions goals in America&#39;s energy industry.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/american-action-forum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americanActionForum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americanActionForum as default
};
