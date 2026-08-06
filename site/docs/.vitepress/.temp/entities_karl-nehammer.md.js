import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Karl Nehammer","description":"","frontmatter":{"title":"Karl Nehammer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["austria","europe","politics"],"sources":["raw/badlands-news-brief-683.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/karl-nehammer.md","filePath":"entities/karl-nehammer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/karl-nehammer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="karl-nehammer" tabindex="-1">Karl Nehammer <a class="header-anchor" href="#karl-nehammer" aria-label="Permalink to &quot;Karl Nehammer&quot;">​</a></h1><p>Karl Nehammer is an Austrian politician who served as Chancellor of Austria and leader of the conservative Austrian People&#39;s Party (ÖVP).[1]</p><h2 id="refusal-to-govern-with-the-fpo" tabindex="-1">Refusal to govern with the FPÖ <a class="header-anchor" href="#refusal-to-govern-with-the-fpo" aria-label="Permalink to &quot;Refusal to govern with the FPÖ&quot;">​</a></h2><p>After the <a href="/entities/freedom-party-of-austria">FPÖ</a> won Austria&#39;s September 2024 parliamentary election, Nehammer&#39;s outgoing ÖVP was the only party that had not categorically ruled out a coalition with it.[1] Nehammer nonetheless refused to work with FPÖ leader <a href="/entities/herbert-kickl">herbert-kickl</a> personally, citing Kickl&#39;s belief in conspiracy theories: &quot;You can&#39;t run a state sensibly and responsibly with him. And I still stand by that.&quot;[1] His position left the largest party in the new parliament without a viable path to forming a government.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Israel Invades, MAGA Sues &amp; Ports Close&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-683" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-683</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/karl-nehammer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const karlNehammer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  karlNehammer as default
};
