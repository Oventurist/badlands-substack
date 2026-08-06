import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Grimes","description":"","frontmatter":{"title":"Grimes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["musician","social-media","elon-musk","x-platform","culture"],"sources":["raw/badlands-news-brief-6af.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/grimes.md","filePath":"entities/grimes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/grimes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="grimes" tabindex="-1">Grimes <a class="header-anchor" href="#grimes" aria-label="Permalink to &quot;Grimes&quot;">​</a></h1><p>Grimes, born Claire Boucher, is a Canadian musician who joined Twitter in 2011 and is a former partner of <a href="/entities/elon-musk">Elon Musk</a>, with whom she shares three children. As of July 2025 she was 37 and Musk, the Tesla chief executive, was 54 and reportedly the father of 14 children.[1]</p><h2 id="criticism-of-x" tabindex="-1">Criticism of X <a class="header-anchor" href="#criticism-of-x" aria-label="Permalink to &quot;Criticism of X&quot;">​</a></h2><p>In July 2025, Grimes posted on X for the first time since June 14 to express excitement about working with the English dance musician Sub Focus. In a follow-up post she delivered a scathing assessment of the platform Musk purchased in 2022 and rebranded from Twitter to X, calling it &quot;poison&quot; and &quot;a prison&quot;: &quot;Ok I&#39;ve basically been entirely off social media and returning here it is overrwhelmingly [sic] abundantly and profoundly clear that this place - and all of these places - are a poison - a prison of utterly short form deep sounding nonsense attached to no one that ur brain will discard imaging its learning.&quot;[1]</p><p>Badlands commentary by <a href="/entities/chris-paul">Chris Paul</a> used the episode to press a series of rhetorical questions at habitual users of the platform — whether they end up believing untrue things, becoming upset about matters they forget within days, treating the consensus of the popular crowd as objective truth, or pretending for social credit that a censored site is a free speech utopia.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: ICE Swarms, TikTok Pivots, &amp; Shoes Stay On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6af" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6af</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/grimes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const grimes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  grimes as default
};
