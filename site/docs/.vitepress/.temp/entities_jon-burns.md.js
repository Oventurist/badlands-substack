import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jon Burns","description":"","frontmatter":{"title":"Jon Burns","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["georgia","state-politics","republican","legislature"],"sources":["raw/badlands-news-brief-7ed.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jon-burns.md","filePath":"entities/jon-burns.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jon-burns.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jon-burns" tabindex="-1">Jon Burns <a class="header-anchor" href="#jon-burns" aria-label="Permalink to &quot;Jon Burns&quot;">​</a></h1><p>Jon Burns is a Republican politician who serves as Speaker of the Georgia House of Representatives. He featured in January 2025 Badlands Media coverage as the official whose standing ban on state Senator <a href="/entities/colton-moore">Colton Moore</a> led to Moore&#39;s arrest at the Georgia Capitol.[1]</p><h2 id="ban-on-colton-moore" tabindex="-1">Ban on Colton Moore <a class="header-anchor" href="#ban-on-colton-moore" aria-label="Permalink to &quot;Ban on Colton Moore&quot;">​</a></h2><p>Burns imposed a ban barring Moore from entering the Georgia House chamber in 2024 following what Burns characterized as Moore&#39;s &quot;vile, disparaging and false comments&quot; about the late House Speaker David Ralston, the chamber&#39;s longtime former leader who died in 2022.[1] Burns conditioned lifting the ban on Moore delivering a &quot;sincere apology&quot; to Ralston&#39;s family and friends.[1] On January 14, 2025, Burns warned Moore that the ban was still in effect; when Moore attempted to enter the chamber two days later he scuffled with staff and Georgia State Patrol officers, was handcuffed, and was transported toward the Fulton County Jail on a misdemeanor charge of willful obstruction of law enforcement officers.[1]</p><p>Badlands commentary in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> treated the enforcement of Burns&#39;s ban as an example of how &quot;shockingly despotic&quot; state legislatures can be.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Unlikely Ambassadors, The Ceasefire Accords, &amp; Predatory Cartoonist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jon-burns.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jonBurns = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jonBurns as default
};
