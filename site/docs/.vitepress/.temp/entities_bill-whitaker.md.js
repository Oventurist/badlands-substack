import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Whitaker","description":"","frontmatter":{"title":"Bill Whitaker","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","cbs","2024-election"],"sources":["raw/badlands-news-brief-860.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bill-whitaker.md","filePath":"entities/bill-whitaker.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-whitaker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-whitaker" tabindex="-1">Bill Whitaker <a class="header-anchor" href="#bill-whitaker" aria-label="Permalink to &quot;Bill Whitaker&quot;">​</a></h1><p><strong>Bill Whitaker</strong> is a correspondent for CBS&#39;s <a href="/entities/60-minutes">60 Minutes</a> who interviewed Vice President <a href="/entities/kamala-harris">Kamala Harris</a> in a segment released on Monday, October 7, 2024, less than a month before the presidential election.[1]</p><p>Whitaker pressed Harris on the legitimacy of her nomination, asking, &quot;Was democracy best served by President Biden stepping down and basically handing you a nomination? You didn&#39;t have to go through a primary process, you didn&#39;t have to fight off other contenders, that&#39;s not really the way our system was intended to work.&quot;[1] Harris replied that <a href="/entities/joe-biden">Joe Biden</a> had &quot;put country before self&quot; and that she was proud &quot;to have earned the support of the vast majority of delegates and to have been elected the Democratic nominee.&quot;[1]</p><p>Whitaker followed up by telling Harris, &quot;But I think this truncated process is why people think or say they don&#39;t really know who you are,&quot; to which she answered that she had been in the race for 70 days and that it was her responsibility to earn the vote.[1] The network subsequently edited out portions of Harris&#39;s answers from the broadcast, a move that drew criticism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Harris Gets Rattled as Storms Gather&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-860" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-860</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-whitaker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billWhitaker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billWhitaker as default
};
