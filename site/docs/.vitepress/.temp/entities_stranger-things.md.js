import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stranger Things","description":"","frontmatter":{"title":"Stranger Things","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["entertainment","television","culture-war","netflix"],"sources":["raw/badlands-news-brief-467.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/stranger-things.md","filePath":"entities/stranger-things.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stranger-things.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stranger-things" tabindex="-1">Stranger Things <a class="header-anchor" href="#stranger-things" aria-label="Permalink to &quot;Stranger Things&quot;">​</a></h1><p>Stranger Things is a <a href="/entities/netflix">Netflix</a> science-fiction drama series set in the 1980s. Its fifth and final season was released in volumes, with the last episode scheduled for January 1, 2026.[1]</p><h2 id="season-5-volume-2-backlash-december-2025" tabindex="-1">Season 5 Volume 2 backlash (December 2025) <a class="header-anchor" href="#season-5-volume-2-backlash-december-2025" aria-label="Permalink to &quot;Season 5 Volume 2 backlash (December 2025)&quot;">​</a></h2><p>Volume 2 of the final season drew heavy criticism, with fans comparing the disappointment to the reception of Game of Thrones&#39; conclusion. Audiences had entered the season worried about declining quality and hoping the finale could recapture the hype of the first season; the second half was widely judged to have undermined the show&#39;s stakes instead.[1]</p><p>The central complaint concerned a plot twist establishing that the antagonist Vecna could not be defeated unless the character Will admitted he was attracted to men rather than women. Critics argued that resting the stakes of a series finale on a coming-out moment felt off and underwhelming.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands commentator <a href="/entities/burning-bright">Burning Bright</a> argued the show was &quot;working overtime to try to convince the country that coming out as gay circa 1987 was the ultimate taboo, to the point where it takes precedence over saving the world,&quot; and pointed to the two bestselling musical artists of 1987 as counterevidence — labeling the tactic &quot;Temporal Gaslighting.&quot;[1] <a href="/entities/jon-herold">Jon Herold</a> offered a blunter dismissal, characterizing the twist as &quot;gay propaganda&quot; that &quot;ruined their entire series.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Somali Scams, Munchausen Moms, &amp; Another Perfect Phone Call&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-467" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-467</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stranger-things.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const strangerThings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  strangerThings as default
};
