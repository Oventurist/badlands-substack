import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tomi Lahren","description":"","frontmatter":{"title":"Tomi Lahren","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","commentator","censorship","facebook-files"],"sources":["raw/badlands-news-brief-3b0.md"],"confidence":"low"},"headers":[],"relativePath":"entities/tomi-lahren.md","filePath":"entities/tomi-lahren.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tomi-lahren.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tomi-lahren" tabindex="-1">Tomi Lahren <a class="header-anchor" href="#tomi-lahren" aria-label="Permalink to &quot;Tomi Lahren&quot;">​</a></h1><p>Tomi Lahren is an American conservative political commentator.[1] She appears in the record of federal pressure on social media platforms as one of the specific voices the <a href="/entities/joe-biden">Biden</a> <a href="/entities/white-house">White House</a> wanted downranked.[1]</p><p>In messages released by the <a href="/entities/house-judiciary-committee">House Judiciary Committee</a> as part of the <a href="/concepts/facebook-files">Facebook Files</a>, White House digital strategy director <a href="/entities/rob-flaherty">Rob Flaherty</a> asked <a href="/entities/facebook">facebook</a> about changing its algorithm so users would be more likely to see <a href="/entities/new-york-times">The New York Times</a>, The Wall Street Journal or &quot;any authoritative news source&quot; over the <a href="/entities/daily-wire">Daily Wire</a>, Lahren, and other figures he described as &quot;polarizing people.&quot;[1] The naming of individual commentators was treated by critics as evidence that the government&#39;s interest lay in suppressing identified political speakers rather than in addressing discrete false claims.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Trump Card ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3b0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3b0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tomi-lahren.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tomiLahren = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tomiLahren as default
};
