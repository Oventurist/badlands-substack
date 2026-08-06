import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bundestag","description":"","frontmatter":{"title":"Bundestag","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","legislature","europe","censorship"],"sources":["raw/badlands-news-brief-7b7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bundestag.md","filePath":"entities/bundestag.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bundestag.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bundestag" tabindex="-1">Bundestag <a class="header-anchor" href="#bundestag" aria-label="Permalink to &quot;Bundestag&quot;">​</a></h1><p>The Bundestag is the federal parliament of Germany.[1] It appears in the Badlands corpus principally through the activity of its committees and members on questions of online speech regulation.[1]</p><h2 id="european-policy-committee-and-social-media" tabindex="-1">European policy committee and social media <a class="header-anchor" href="#european-policy-committee-and-social-media" aria-label="Permalink to &quot;European policy committee and social media&quot;">​</a></h2><p>In September 2024, the chairman of the Bundestag&#39;s European policy committee, Green Party MP <a href="/entities/anton-hofreiter">Anton Hofreiter</a>, called for tighter control over social media, &quot;up to the outright blocking of certain platforms,&quot; in remarks to the Funke Media Group.[1] Hofreiter argued that &quot;one of the biggest problems of extremism is online radicalization&quot; and that the dissemination of &quot;anti-constitutional content on the Internet&quot; must be stopped.[1] The proposals were widely read as targeting <a href="/entities/x-corp">X</a> and <a href="/entities/telegram">Telegram</a>.[1]</p><p><a href="/entities/zerohedge">ZeroHedge</a> characterized the intervention as part of a broader European move against non-compliant platforms, following the arrest of Telegram CEO <a href="/entities/pavel-durov">Pavel Durov</a> in France.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Harris Preps, Sovereigns Speak &amp; ... Haitians Eat Cats?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7b7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7b7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bundestag.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bundestag = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bundestag as default
};
