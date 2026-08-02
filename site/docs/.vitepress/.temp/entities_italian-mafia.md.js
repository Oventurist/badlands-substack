import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Italian Mafia","description":"","frontmatter":{"title":"Italian Mafia","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["italian-mafia","organized-crime","hollywood","scapegoating"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/italian-mafia.md","filePath":"entities/italian-mafia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/italian-mafia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="italian-mafia" tabindex="-1">Italian Mafia <a class="header-anchor" href="#italian-mafia" aria-label="Permalink to &quot;Italian Mafia&quot;">​</a></h1><p>The Italian Mafia — the Italian-American organized crime families of the twentieth century — appears in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as a real criminal organization whose public stature the article regards as deliberately inflated.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> recounts growing up on <em>The Godfather</em>, <em>The Godfather Part II</em>, <em>Goodfellas</em>, and <em>Casino</em> and concluding from them that the Italian Mafia ran organized crime in America. He attributes that belief squarely to its source: &quot;Because I was led to believe this by Hollywood.&quot;</p><p>The essay&#39;s revision places the <a href="/entities/jewish-mafia">Jewish Mafia</a> under <a href="/entities/meyer-lansky">Meyer Lansky</a> above the Italian families, and the <a href="/entities/cia">CIA</a> above that. <a href="/concepts/the-godfather"><em>The Godfather</em></a> is presented as the mechanism of the substitution, after whose release &quot;the Italian Mafia became synonymous with organized crime&quot; in the public mind. Carlson is explicit that the revision is one of rank rather than existence: &quot;this isn&#39;t to say that the Italian Mafia isn&#39;t real, or that they aren&#39;t really criminals, just that their power, their standing in organized crime is greatly exaggerated.&quot; The same structure — visible actors serving as the recognizable face for concealed superiors — is then applied by the article to South Central drug dealers and, ultimately, to Israel and the <a href="/entities/city-of-london">City of London</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/italian-mafia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const italianMafia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  italianMafia as default
};
