import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hindenburg Research","description":"","frontmatter":{"title":"Hindenburg Research","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","short-selling","investigations","markets"],"sources":["raw/badlands-news-brief-860.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hindenburg-research.md","filePath":"entities/hindenburg-research.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hindenburg-research.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hindenburg-research" tabindex="-1">Hindenburg Research <a class="header-anchor" href="#hindenburg-research" aria-label="Permalink to &quot;Hindenburg Research&quot;">​</a></h1><p><strong>Hindenburg Research</strong> is an activist short-selling research firm known for publishing investigative reports alleging fraud or misrepresentation at publicly traded companies.[1]</p><h2 id="roblox-report-october-2024" tabindex="-1">Roblox report (October 2024) <a class="header-anchor" href="#roblox-report-october-2024" aria-label="Permalink to &quot;Roblox report (October 2024)&quot;">​</a></h2><p>On October 8, 2024, Hindenburg published a report on the gaming company <a href="/entities/roblox">Roblox</a> that accused it of both inflating key engagement metrics and hosting what the firm called an in-game &quot;pedophile hellscape.&quot;[1] The report said Roblox was &quot;lying to investors, regulators, and advertisers about the number of &#39;people&#39; on its platform, inflating the metric by 25-42%+,&quot; and that engagement hours were inflated by an estimated 100% or more.[1] Hindenburg tied the significance of these metrics to the company&#39;s lack of profitability, arguing that its share price — and insiders&#39; ability to sell stock — rested on reported growth.[1]</p><p>The firm described an unusually large data-collection effort behind its conclusions, saying it hired a technical consultant who monitored roughly the top 7,200 Roblox games across about 2.1 million servers and gathered 297.7 million rows of real-time player data.[1] Its child-safety findings included an experiment in which researchers attempted to create an account under the name &quot;Jeffrey Epstein&quot; and found the name and more than 900 variations already registered.[1] Roblox shares dropped sharply after the report&#39;s release.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Harris Gets Rattled as Storms Gather&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-860" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-860</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hindenburg-research.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hindenburgResearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hindenburgResearch as default
};
