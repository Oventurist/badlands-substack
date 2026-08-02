import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kris Mayes","description":"","frontmatter":{"title":"Kris Mayes","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","democrat","attorney-general","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/kris-mayes.md","filePath":"entities/kris-mayes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kris-mayes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kris-mayes" tabindex="-1">Kris Mayes <a class="header-anchor" href="#kris-mayes" aria-label="Permalink to &quot;Kris Mayes&quot;">​</a></h1><p>Kris Mayes is an Arizona Democrat who won the state&#39;s 2022 election for attorney general against Republican <a href="/entities/abe-hamadeh">Abe Hamadeh</a> by one of the narrowest margins in American statewide electoral history.</p><h2 id="the-2022-attorney-general-race" tabindex="-1">The 2022 attorney general race <a class="header-anchor" href="#the-2022-attorney-general-race" aria-label="Permalink to &quot;The 2022 attorney general race&quot;">​</a></h2><p>As of the December 5, 2022 certification of the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>, Mayes led Hamadeh by 511 votes out of approximately 2.5 million cast — a margin of less than 0.1 percentage points. Because Arizona law requires an automatic recount in any race decided by less than 0.5 points, the contest went to a recount that began on Wednesday, December 7, alongside recounts in the state superintendent race and a state House race. Hamadeh separately filed a lawsuit challenging the result after certification, having had an earlier suit dismissed as premature.</p><p>The Badlands Media article <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>, citing <em>The Hill</em>, treats Mayes&#39;s lead as provisional and predicts that Hamadeh will prevail once the recount is complete.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kris-mayes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const krisMayes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  krisMayes as default
};
