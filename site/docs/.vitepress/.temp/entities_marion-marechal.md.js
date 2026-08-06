import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marion Maréchal","description":"","frontmatter":{"title":"Marion Maréchal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","hard-right","european-parliament","elections"],"sources":["raw/badlands-news-brief-365.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/marion-marechal.md","filePath":"entities/marion-marechal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/marion-marechal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marion-marechal" tabindex="-1">Marion Maréchal <a class="header-anchor" href="#marion-marechal" aria-label="Permalink to &quot;Marion Maréchal&quot;">​</a></h1><p>Marion Maréchal is a French right-wing politician and the niece of <a href="/entities/marine-le-pen">Marine Le Pen</a>.[1] Rather than remaining within the family&#39;s <a href="/entities/national-rally">National Rally</a>, she aligned with <a href="/entities/eric-zemmour">Éric Zemmour</a>&#39;s <a href="/entities/reconquete">Reconquête</a> and served as that party&#39;s lead candidate for the June 2024 European Parliament elections.[1]</p><h2 id="_2024-campaign-context" tabindex="-1">2024 campaign context <a class="header-anchor" href="#_2024-campaign-context" aria-label="Permalink to &quot;2024 campaign context&quot;">​</a></h2><p>Maréchal&#39;s candidacy did not arrest Reconquête&#39;s slide among young voters: Ipsos polling published in March 2024 put the party at 3 percent among French 18-to-24-year-olds, down from 8 percent in December 2023, while <a href="/entities/jordan-bardella">Jordan Bardella</a>&#39;s National Rally climbed to 31 percent in the same cohort.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: &#39;You Are Watching a Movie&#39; Intensifies ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-365" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-365</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/marion-marechal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marionMarechal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marionMarechal as default
};
