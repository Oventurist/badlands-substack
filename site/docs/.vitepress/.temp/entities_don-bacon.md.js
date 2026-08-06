import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Don Bacon","description":"","frontmatter":{"title":"Don Bacon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","nebraska","republican","nsa","nominations"],"sources":["raw/badlands-news-brief-306.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/don-bacon.md","filePath":"entities/don-bacon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/don-bacon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="don-bacon" tabindex="-1">Don Bacon <a class="header-anchor" href="#don-bacon" aria-label="Permalink to &quot;Don Bacon&quot;">​</a></h1><p><strong>Don Bacon</strong> is a Republican member of the U.S. House of Representatives from Nebraska.[1]</p><h2 id="nsa-deputy-director-nomination" tabindex="-1">NSA deputy director nomination <a class="header-anchor" href="#nsa-deputy-director-nomination" aria-label="Permalink to &quot;NSA deputy director nomination&quot;">​</a></h2><p>On Friday, December 12, 2025, Bacon publicly disclosed that the <a href="/entities/white-house">White House</a> was withdrawing the nomination of <a href="/entities/joe-francescon">Joe Francescon</a> as deputy director of the <a href="/entities/national-security-agency">National Security Agency</a>, a withdrawal that came just as the agency&#39;s acting deputy director was set to retire at the end of the month.[1] The White House did not comment on the decision, which followed <a href="/entities/laura-loomer">Laura Loomer</a>&#39;s revelation that Francescon had donated to the 2023 campaign of Colorado Democrat <a href="/entities/jason-crow">Jason Crow</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Truckloads of Proof, Holiday Intifada, &amp; Europe Must Swallow&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-306" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-306</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/don-bacon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const donBacon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  donBacon as default
};
