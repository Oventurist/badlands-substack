import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Monsanto","description":"","frontmatter":{"title":"Monsanto","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["agriculture","glyphosate","roundup","litigation","maha"],"sources":["raw/badlands-news-brief-7bb.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/monsanto.md","filePath":"entities/monsanto.md","lastUpdated":null}');
const _sfc_main = { name: "entities/monsanto.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="monsanto" tabindex="-1">Monsanto <a class="header-anchor" href="#monsanto" aria-label="Permalink to &quot;Monsanto&quot;">​</a></h1><p>Monsanto was an American biochemical company, described by Badlands as infamous, that was acquired by the German pharmaceutical and biotechnology giant <a href="/entities/bayer-ag">Bayer AG</a> in 2018.[1] Following the acquisition, Monsanto was folded into Bayer&#39;s crop science division and officially dissolved as a corporate entity, with Bayer assuming its legal liabilities.[1]</p><h2 id="roundup-litigation" tabindex="-1">Roundup litigation <a class="header-anchor" href="#roundup-litigation" aria-label="Permalink to &quot;Roundup litigation&quot;">​</a></h2><p>Since 2015, Monsanto has faced ongoing lawsuits alleging that glyphosate, the primary active ingredient in its widely used herbicide Roundup, is a dangerous carcinogen and that the company failed to adequately warn consumers of the risk.[1] The volume of that litigation has been substantial: an estimated 25,000 suits were pending in Cole County, Missouri alone as of March 2025.[1] Discovery in one of those Cole County cases exposed a media campaign, run through agricultural industry advocacy groups that were effectively political fronts funded by Bayer, aimed at changing state law in the German parent company&#39;s favor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: &#39;Terrifying&#39; Trade Alliances, Pedagogue Payouts, &amp; A Bondi Barn Burner&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7bb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7bb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/monsanto.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const monsanto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  monsanto as default
};
