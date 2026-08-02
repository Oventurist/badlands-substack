import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"New Democratic Party","description":"","frontmatter":{"title":"New Democratic Party","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["canada","political-parties","ndp","fabian-society"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/new-democratic-party.md","filePath":"entities/new-democratic-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/new-democratic-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="new-democratic-party" tabindex="-1">New Democratic Party <a class="header-anchor" href="#new-democratic-party" aria-label="Permalink to &quot;New Democratic Party&quot;">​</a></h1><p>The New Democratic Party (NDP) is a Canadian social-democratic political party. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, the NDP appears both as an institutional descendant of a Depression-era Fabian project and as the party of <a href="/entities/bob-rae">Bob Rae</a>.</p><h2 id="origins-as-described-in-the-source" tabindex="-1">Origins as described in the source <a class="header-anchor" href="#origins-as-described-in-the-source" aria-label="Permalink to &quot;Origins as described in the source&quot;">​</a></h2><p>A footnote in the article states that the <a href="/entities/league-of-social-reconstruction">League for Social Reconstruction</a>, founded in 1932 by five Rhodes Scholars and described as the &quot;<a href="/entities/fabian-society">Fabian Society</a> of Canada,&quot; created a political party called the Cooperative Commonwealth Federation, which later changed its name to the New Democratic Party in 1961. <a href="/entities/matthew-ehret">Matthew Ehret</a> adds that while &quot;good people have found themselves members of the NDP and Liberals over the years,&quot; the party&#39;s founding core was tied to &quot;the highest echelons of the British oligarchy.&quot;</p><h2 id="bob-rae" tabindex="-1">Bob Rae <a class="header-anchor" href="#bob-rae" aria-label="Permalink to &quot;Bob Rae&quot;">​</a></h2><p>The article notes that Bob Rae, the Rhodes Scholar who later managed <a href="/entities/chrystia-freeland">Chrystia Freeland</a>&#39;s entry into federal politics, served as the NDP Premier of Ontario from 1990 to 1995.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/new-democratic-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newDemocraticParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newDemocraticParty as default
};
