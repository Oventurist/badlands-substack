import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Firefox","description":"","frontmatter":{"title":"Firefox","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","browsers","open-source","artificial-intelligence"],"sources":["raw/badlands-news-brief-467.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/firefox.md","filePath":"entities/firefox.md","lastUpdated":null}');
const _sfc_main = { name: "entities/firefox.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="firefox" tabindex="-1">Firefox <a class="header-anchor" href="#firefox" aria-label="Permalink to &quot;Firefox&quot;">​</a></h1><p>Firefox is the open-source web browser developed by <a href="/entities/mozilla">Mozilla</a>. It has long been lauded as a leading alternative to Google&#39;s Chrome and Apple&#39;s Safari, and retains a devoted following among open-source enthusiasts.[1]</p><h2 id="ai-features-controversy-december-2025" tabindex="-1">AI features controversy (December 2025) <a class="header-anchor" href="#ai-features-controversy-december-2025" aria-label="Permalink to &quot;AI features controversy (December 2025)&quot;">​</a></h2><p>On December 16, 2025, Mozilla&#39;s newly appointed chief executive <a href="/entities/anthony-enzor-demeo">Anthony Enzor-DeMeo</a> announced in a blog post that Firefox would become a &quot;modern AI browser and support a portfolio of new and trusted software additions.&quot;[1]</p><p>The announcement provoked a swift backlash from users who valued Firefox precisely as a refuge from AI integration. &quot;I switched back to Firefox late last year BECAUSE it was the last AI-free browser,&quot; one user wrote; another said they had &quot;never seen a company so astoundingly out of touch with the people who want to use its software.&quot;[1] The reaction was part of a broader revolt against AI being pushed into every corner of the computing experience.[1]</p><p>Mozilla responded on Mastodon by clarifying that &quot;Firefox will have an option to completely disable all AI features,&quot; a concession widely characterized as a &quot;kill switch&quot; for the browser&#39;s AI functionality.[1]</p><p>Badlands commentator <a href="/entities/ashe-in-america">Ashe in America</a> described Firefox as &quot;a cult classic among open source maxis&quot; and argued the episode illustrated the accountability function performed by the open-source community&#39;s watchdogs.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Somali Scams, Munchausen Moms, &amp; Another Perfect Phone Call&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-467" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-467</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/firefox.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const firefox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  firefox as default
};
