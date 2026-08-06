import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dark Storm Team","description":"","frontmatter":{"title":"Dark Storm Team","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hacking","ddos","gaza","x-corp","cyberattack"],"sources":["raw/badlands-news-brief-071.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dark-storm-team.md","filePath":"entities/dark-storm-team.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dark-storm-team.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dark-storm-team" tabindex="-1">Dark Storm Team <a class="header-anchor" href="#dark-storm-team" aria-label="Permalink to &quot;Dark Storm Team&quot;">​</a></h1><p>Dark Storm Team is a pro-Palestinian hacker group known primarily for targeting countries and entities that support Israel&#39;s campaign in Gaza following <a href="/entities/hamas">Hamas</a>&#39; surprise attack of October 7, 2023.[1]</p><h2 id="x-outage-claim-march-2025" tabindex="-1">X outage claim (March 2025) <a class="header-anchor" href="#x-outage-claim-march-2025" aria-label="Permalink to &quot;X outage claim (March 2025)&quot;">​</a></h2><p>The group claimed responsibility, in a public Telegram post, for a distributed denial-of-service attack on <a href="/entities/x-corp">X</a> (formerly Twitter) that caused major outages throughout a Monday in March 2025, with tens of thousands of users reporting at least three separate outages of the website and app.[1]</p><p><a href="/entities/elon-musk">Elon Musk</a> instead pointed the finger at Ukraine, suggesting in a series of posts on X that a &quot;large, coordinated group and/or a country is involved&quot; in the &quot;massive&quot; hack and noting that &quot;we get attacked every day, but this was done with a lot of resources.&quot;[1] Musk later told Larry Kudlow in a Fox News interview that the hackers had &quot;IP addresses originating in the Ukraine area.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hot Wars Wind Down. Trade &amp; Meme Wars Heat Up.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-071" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-071</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dark-storm-team.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const darkStormTeam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  darkStormTeam as default
};
