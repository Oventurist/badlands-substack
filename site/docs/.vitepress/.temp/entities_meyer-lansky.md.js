import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Meyer Lansky","description":"","frontmatter":{"title":"Meyer Lansky","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["meyer-lansky","jewish-mafia","organized-crime","cia","golden-triangle"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/meyer-lansky.md","filePath":"entities/meyer-lansky.md","lastUpdated":null}');
const _sfc_main = { name: "entities/meyer-lansky.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="meyer-lansky" tabindex="-1">Meyer Lansky <a class="header-anchor" href="#meyer-lansky" aria-label="Permalink to &quot;Meyer Lansky&quot;">​</a></h1><p>Meyer Lansky was an American organized crime figure identified in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as the man who &quot;sat at the top of the Jewish Mafia&quot; — an organization the article places above the Italian Mafia in the hierarchy of American organized crime.</p><h2 id="organization" tabindex="-1">Organization <a class="header-anchor" href="#organization" aria-label="Permalink to &quot;Organization&quot;">​</a></h2><p>According to <a href="/entities/erik-carlson">Erik Carlson</a>, two lieutenants operated under Lansky: <a href="/entities/mickey-cohen">Mickey Cohen</a>, who ran Hollywood, and <a href="/entities/bugsy-siegel">Bugsy Siegel</a>, who ran Las Vegas. The source states that Siegel held that position &quot;until Bugsy&#39;s good friend Meyer found out Bugsy&#39;s girlfriend was skimming money and had him killed&quot; — an episode the article offers as evidence of Lansky&#39;s seniority and willingness to enforce it.</p><h2 id="relationship-to-the-cia" tabindex="-1">Relationship to the CIA <a class="header-anchor" href="#relationship-to-the-cia" aria-label="Permalink to &quot;Relationship to the CIA&quot;">​</a></h2><p>The essay&#39;s more consequential claim is that Lansky himself answered to the <a href="/entities/cia">CIA</a>, which it places above the Jewish Mafia &quot;in the pecking order.&quot; Carlson writes that the agency &quot;couldn&#39;t allow the American public to know that their guy, Meyer Lansky, was in charge of running their drugs out of the Golden Triangle during the Vietnam War.&quot; In this reading, the popular success of <em>The Godfather</em> — published in 1969 and filmed in 1972, &quot;in the heat of the Vietnam War&quot; — served to fix the Italian Mafia in the public imagination as the summit of organized crime and thereby allow both the Jewish Mafia and its CIA patrons to recede into the shadows.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/meyer-lansky.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const meyerLansky = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  meyerLansky as default
};
