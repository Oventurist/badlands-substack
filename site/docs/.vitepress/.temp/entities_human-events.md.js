import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Human Events","description":"","frontmatter":{"title":"Human Events","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","conservative-media","publications"],"sources":["raw/badlands-news-brief-7ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/human-events.md","filePath":"entities/human-events.md","lastUpdated":null}');
const _sfc_main = { name: "entities/human-events.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="human-events" tabindex="-1">Human Events <a class="header-anchor" href="#human-events" aria-label="Permalink to &quot;Human Events&quot;">​</a></h1><p><strong>Human Events</strong> is an American conservative news and opinion publication whose reporting has been aggregated by <a href="/entities/badlands-media">Badlands Media</a> in its news briefs.[1]</p><h2 id="coverage-cited-by-badlands-media" tabindex="-1">Coverage cited by Badlands Media <a class="header-anchor" href="#coverage-cited-by-badlands-media" aria-label="Permalink to &quot;Coverage cited by Badlands Media&quot;">​</a></h2><p>In June 2023, Human Events reported that <a href="/entities/united-states-capitol-police">Capitol Police</a> had stopped the <a href="/entities/rushingbrook-childrens-choir">Rushingbrook Children&#39;s Choir</a> from performing a capella renditions of patriotic songs, including the national anthem, inside the Capitol Building in Washington, D.C., and that former President <a href="/entities/donald-trump">Donald Trump</a> had responded by inviting the choir to perform at his upcoming South Carolina rally.[1] The outlet characterized the shutdown by Capitol Police and the congressional staffer involved as &quot;a stain on our national character and the people&#39;s House,&quot; and reported that Trump had called the prohibition &quot;a shame.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Wall Are Closing in Again! (And Other Stories)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/human-events.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const humanEvents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  humanEvents as default
};
