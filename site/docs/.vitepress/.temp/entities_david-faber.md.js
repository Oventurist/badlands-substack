import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Faber","description":"","frontmatter":{"title":"David Faber","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","finance","cnbc"],"sources":["raw/badlands-news-brief-617.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-faber.md","filePath":"entities/david-faber.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-faber.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-faber" tabindex="-1">David Faber <a class="header-anchor" href="#david-faber" aria-label="Permalink to &quot;David Faber&quot;">​</a></h1><p>David Faber is a CNBC journalist and co-host of the network&#39;s program &quot;Squawk on the Street,&quot; broadcast from the floor of the <a href="/entities/new-york-stock-exchange">New York Stock Exchange</a>.[1]</p><h2 id="public-square-opening-bell-2023" tabindex="-1">Public Square opening bell (2023) <a class="header-anchor" href="#public-square-opening-bell-2023" aria-label="Permalink to &quot;Public Square opening bell (2023)&quot;">​</a></h2><p>During the July 20, 2023 opening-bell ceremony marking the public listing of the conservative marketplace <a href="/entities/public-square">Public Square</a>, Faber was reported to have covered his ears as the exchange floor chanted &quot;USA! USA!&quot;, with the broadcast turning instead to a discussion of home prices.[1] <a href="/entities/jim-cramer">Jim Cramer</a> was described as reacting with similar disapproval.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media - &quot;Badlands News Brief: Biden Crime Cascade, Woke Collapse &amp; Establishment Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-617" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-617</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-faber.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidFaber = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidFaber as default
};
