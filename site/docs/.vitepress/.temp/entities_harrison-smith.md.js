import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Harrison Smith","description":"","frontmatter":{"title":"Harrison Smith","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","infowars","commentator","texas"],"sources":["raw/badlands-news-brief-6e5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/harrison-smith.md","filePath":"entities/harrison-smith.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harrison-smith.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="harrison-smith" tabindex="-1">Harrison Smith <a class="header-anchor" href="#harrison-smith" aria-label="Permalink to &quot;Harrison Smith&quot;">​</a></h1><p>Harrison Smith is a Texas-based broadcaster and commentator who posts on the far-right site <a href="/entities/infowars">Infowars</a>.[1]</p><h2 id="claim-about-charlie-kirk-and-israel" tabindex="-1">Claim about Charlie Kirk and Israel <a class="header-anchor" href="#claim-about-charlie-kirk-and-israel" aria-label="Permalink to &quot;Claim about Charlie Kirk and Israel&quot;">​</a></h2><p>In a post dated August 13, 2025 — roughly a month before the <a href="/concepts/assassination-of-charlie-kirk">assassination of Charlie Kirk</a> — Smith wrote: &quot;I&#39;m not gonna name names, but I was told by someone close to Charlie Kirk that Charlie thinks Israel will kill him if he turns against them.&quot;[1] The post was shared widely in the hours after Kirk was shot at <a href="/entities/utah-valley-university">Utah Valley University</a>, and Smith stood by the comments on the day of the shooting.[1] The Times of Israel cited Smith&#39;s post as one of the drivers of online speculation blaming Jews, Israel, or <a href="/entities/mossad">Mossad</a> for the killing, alongside past allegations of antisemitism against Kirk and Kirk&#39;s own recent remarks tying Mossad to the <a href="/entities/jeffrey-epstein">Jeffrey Epstein</a> case.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manhunts, Mental Health, &amp; the Mother of a Monster&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harrison-smith.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harrisonSmith = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harrisonSmith as default
};
