import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Telegram","description":"","frontmatter":{"title":"Telegram","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["social-media","encryption","censorship","free-speech","europe"],"sources":["raw/badlands-news-brief-7b7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/telegram.md","filePath":"entities/telegram.md","lastUpdated":null}');
const _sfc_main = { name: "entities/telegram.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="telegram" tabindex="-1">Telegram <a class="header-anchor" href="#telegram" aria-label="Permalink to &quot;Telegram&quot;">​</a></h1><p>Telegram is a messaging and broadcast platform widely used by independent and alternative media, and a recurring subject of European regulatory and law-enforcement pressure.[1] In 2024 the platform became a focal point of the online-censorship debate after the arrest of its chief executive, <a href="/entities/pavel-durov">Pavel Durov</a>, in France.[1]</p><h2 id="european-pressure-in-2024" tabindex="-1">European pressure in 2024 <a class="header-anchor" href="#european-pressure-in-2024" aria-label="Permalink to &quot;European pressure in 2024&quot;">​</a></h2><p><a href="/entities/zerohedge">ZeroHedge</a> reported that Durov&#39;s arrest was, in its assessment, &quot;a trial balloon for how Europe will go after <a href="/entities/elon-musk">Elon Musk</a>,&quot; and that within roughly two weeks &quot;the wheels are now in motion.&quot;[1] The follow-on development cited was a call by <a href="/entities/anton-hofreiter">Anton Hofreiter</a>, a Green Party member of the German <a href="/entities/bundestag">Bundestag</a> and chairman of its European policy committee, for Germany to block major social media platforms — Telegram and <a href="/entities/x-corp">X</a> chief among them — if necessary to stop &quot;extremist content&quot; and &quot;anti-constitutional content on the Internet.&quot;[1]</p><p>The item appeared among the bonus stories in the September 10, 2024 edition of the Badlands News Brief published by <a href="/entities/badlands-media">Badlands Media</a>, which framed such measures as part of an escalating information war against platforms outside establishment control.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Harris Preps, Sovereigns Speak &amp; ... Haitians Eat Cats?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7b7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7b7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/telegram.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const telegram = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  telegram as default
};
