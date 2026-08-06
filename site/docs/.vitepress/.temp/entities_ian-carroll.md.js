import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ian Carroll","description":"","frontmatter":{"title":"Ian Carroll","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["independent-media","journalism","tiktok","israel"],"sources":["raw/badlands-news-brief-365.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ian-carroll.md","filePath":"entities/ian-carroll.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ian-carroll.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ian-carroll" tabindex="-1">Ian Carroll <a class="header-anchor" href="#ian-carroll" aria-label="Permalink to &quot;Ian Carroll&quot;">​</a></h1><p>Ian Carroll is an independent journalist and researcher cited within the Badlands Media orbit for open-source investigations into financial and influence networks.[1]</p><h2 id="tiktok-acquisition-research" tabindex="-1">TikTok acquisition research <a class="header-anchor" href="#tiktok-acquisition-research" aria-label="Permalink to &quot;TikTok acquisition research&quot;">​</a></h2><p>In March 2024, Badlands contributor <a href="/entities/simon-esler">Simon Esler</a> credited Carroll with going &quot;deep down this rabbit hole&quot; on the proposed purchase of <a href="/entities/tiktok">tiktok</a> by an investor group assembled by former Treasury Secretary <a href="/entities/steven-mnuchin">Steven Mnuchin</a>, arguing that Carroll had assembled evidence that Mnuchin&#39;s bid represented Israeli interests rather than a purely commercial venture.[1] Esler further reported that Carroll&#39;s work cited evidence that TikTok&#39;s moderation systems suppressed anti-Israel content while leaving anti-CCP content comparatively untouched — a pattern Esler used to question how much of the &quot;TikTok is a CCP weapon&quot; framing functioned as cover for other state influence operations.[1] These claims are contested commentary rather than established fact.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: &#39;You Are Watching a Movie&#39; Intensifies ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-365" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-365</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ian-carroll.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ianCarroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ianCarroll as default
};
