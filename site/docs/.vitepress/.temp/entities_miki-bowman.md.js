import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Miki Bowman","description":"","frontmatter":{"title":"Miki Bowman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["federal-reserve","monetary-policy","interest-rates"],"sources":["raw/badlands-news-brief-2f2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/miki-bowman.md","filePath":"entities/miki-bowman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/miki-bowman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="miki-bowman" tabindex="-1">Miki Bowman <a class="header-anchor" href="#miki-bowman" aria-label="Permalink to &quot;Miki Bowman&quot;">​</a></h1><p>Miki Bowman is a governor of the <a href="/entities/federal-reserve">Federal Reserve</a> and a member of the <a href="/entities/federal-open-market-committee">Federal Open Market Committee</a>.[1]</p><h2 id="september-2024-dissent" tabindex="-1">September 2024 dissent <a class="header-anchor" href="#september-2024-dissent" aria-label="Permalink to &quot;September 2024 dissent&quot;">​</a></h2><p>At the FOMC&#39;s September 18, 2024 meeting, Bowman cast the lone dissenting vote against the committee&#39;s 50 basis point rate cut, favoring instead a smaller 25 basis point reduction.[1] The vote was reported as the first dissent by a Federal Reserve governor since 2005, a notable break with the institution&#39;s culture of consensus at a moment when the size of the cut was already politically contested ahead of the November 2024 election.[1] See <a href="/concepts/september-2024-fed-rate-cut">September 2024 Federal Reserve Rate Cut</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Israel Strikes Again as The FED Pivots&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/miki-bowman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikiBowman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikiBowman as default
};
