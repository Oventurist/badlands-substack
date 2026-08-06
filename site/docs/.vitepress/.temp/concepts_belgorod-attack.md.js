import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Belgorod Attack","description":"","frontmatter":{"title":"Belgorod Attack","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["russia","ukraine","war","civilian-casualties","putin"],"sources":["raw/badlands-news-brief-378.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/belgorod-attack.md","filePath":"concepts/belgorod-attack.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/belgorod-attack.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="belgorod-attack" tabindex="-1">Belgorod Attack <a class="header-anchor" href="#belgorod-attack" aria-label="Permalink to &quot;Belgorod Attack&quot;">​</a></h1><p>The Belgorod attack was a strike on the Russian city of Belgorod on Saturday, December 30, 2023, that left at least two dozen people dead and more than 100 injured.[1]</p><h2 id="context-and-response" tabindex="-1">Context and response <a class="header-anchor" href="#context-and-response" aria-label="Permalink to &quot;Context and response&quot;">​</a></h2><p>The attack followed Moscow&#39;s large-scale air assault on cities across <a href="/entities/ukraine">Ukraine</a> the previous day, which killed 23 people.[1] Speaking on Monday, January 1, 2024, during a visit to a military hospital, President <a href="/entities/vladimir-putin">Vladimir Putin</a> said <a href="/entities/russia">Russia</a> would &quot;intensify&quot; strikes against Ukraine in response: &quot;We&#39;re going to intensify the strikes. No crime against civilians will rest unpunished, that&#39;s for certain.&quot;[1]</p><p>Putin also drew a distinction he claimed constrained Russian targeting: &quot;Of course, we can strike public squares and Kyiv, and any other city. I understand. I&#39;m burning with rage myself. But do we need to attack civilians? No, we hit military targets, and we&#39;ll continue to do that.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hypocrisy Roundup &amp; Rug-pulls Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-378" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-378</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/belgorod-attack.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const belgorodAttack = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  belgorodAttack as default
};
