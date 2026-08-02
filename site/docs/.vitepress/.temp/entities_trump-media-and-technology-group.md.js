import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trump Media and Technology Group","description":"","frontmatter":{"title":"Trump Media and Technology Group","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["company","media","trump","merger"],"sources":["raw/a-virus-or-a-metaphor.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/trump-media-and-technology-group.md","filePath":"entities/trump-media-and-technology-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/trump-media-and-technology-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trump-media-and-technology-group" tabindex="-1">Trump Media and Technology Group <a class="header-anchor" href="#trump-media-and-technology-group" aria-label="Permalink to &quot;Trump Media and Technology Group&quot;">​</a></h1><p>Trump Media and Technology Group is the media company founded by <a href="/entities/donald-trump">Donald Trump</a> and the parent of the social platform <a href="/entities/truth-social">Truth Social</a>. Its planned combination with the special purpose acquisition company Digital World Acquisition Corporation (DWAC) is the transaction discussed in the Badlands Media corpus.</p><h2 id="the-blocked-merger" tabindex="-1">The blocked merger <a class="header-anchor" href="#the-blocked-merger" aria-label="Permalink to &quot;The blocked merger&quot;">​</a></h2><p><a href="/concepts/a-virus-or-a-metaphor">A Virus, or a Metaphor?</a> cites the merger&#39;s regulatory fate as part of its argument that Trump has gained nothing from his supposed membership in the <a href="/concepts/deep-state">Deep State</a>. <a href="/entities/erik-carlson">Erik Carlson</a> asks why the <a href="/entities/securities-and-exchange-commission">SEC</a> is &quot;taking the unprecedented step of holding up the merger between DWAC and Trump Media, keeping him from growing his media, including injecting money into Truth Social.&quot;</p><p>In the article&#39;s framing, the delay prevented capital from reaching the platform and constrained the growth of Trump&#39;s independent media operation at a time when, in the author&#39;s account, every mainstream outlet was working to demonize him. The company thus functions in the essay as evidence of institutional hostility rather than of elite protection.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-virus-or-a-metaphor" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/trump-media-and-technology-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trumpMediaAndTechnologyGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trumpMediaAndTechnologyGroup as default
};
