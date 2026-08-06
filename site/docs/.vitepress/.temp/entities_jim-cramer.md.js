import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jim Cramer","description":"","frontmatter":{"title":"Jim Cramer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","finance","cnbc"],"sources":["raw/badlands-news-brief-617.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jim-cramer.md","filePath":"entities/jim-cramer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jim-cramer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jim-cramer" tabindex="-1">Jim Cramer <a class="header-anchor" href="#jim-cramer" aria-label="Permalink to &quot;Jim Cramer&quot;">​</a></h1><p>Jim Cramer is a CNBC host and financial commentator, best known for the network&#39;s stock-picking programming.[1]</p><h2 id="reaction-to-the-public-square-listing-2023" tabindex="-1">Reaction to the Public Square listing (2023) <a class="header-anchor" href="#reaction-to-the-public-square-listing-2023" aria-label="Permalink to &quot;Reaction to the Public Square listing (2023)&quot;">​</a></h2><p>When the conservative marketplace <a href="/entities/public-square">Public Square</a> rang the opening bell at the <a href="/entities/new-york-stock-exchange">New York Stock Exchange</a> on July 20, 2023 and the floor broke into chants of &quot;USA! USA!&quot;, Cramer was reported to be visibly unamused, nodding and shaking his head in disapproval, while colleague <a href="/entities/david-faber">David Faber</a> covered his ears.[1] Badlands contributor Ryan DeLarme, describing Cramer as &quot;the world&#39;s worst financial analyst,&quot; treated the reaction as evidence that overt patriotism was anathema to establishment financial media.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media - &quot;Badlands News Brief: Biden Crime Cascade, Woke Collapse &amp; Establishment Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-617" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-617</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jim-cramer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jimCramer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jimCramer as default
};
