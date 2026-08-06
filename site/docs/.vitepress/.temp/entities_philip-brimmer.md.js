import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Philip Brimmer","description":"","frontmatter":{"title":"Philip Brimmer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","colorado","election-litigation"],"sources":["raw/badlands-news-brief-2ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/philip-brimmer.md","filePath":"entities/philip-brimmer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/philip-brimmer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="philip-brimmer" tabindex="-1">Philip Brimmer <a class="header-anchor" href="#philip-brimmer" aria-label="Permalink to &quot;Philip Brimmer&quot;">​</a></h1><p>Philip Brimmer is a federal judge of the U.S. District Court for the District of Colorado, described in contemporaneous coverage as chief justice of that district.[1]</p><p>In September 2024 Brimmer approved a settlement in litigation brought by the <a href="/entities/public-interest-legal-foundation">Public Interest Legal Foundation</a> against Colorado Secretary of State <a href="/entities/jena-griswold">Jena Griswold</a>, ordering her office to disclose the requested 2021 <a href="/entities/electronic-registration-information-center">ERIC</a> reports by November 1 while allowing minimal redactions to the ERIC Report Key.[1] Brimmer had earlier denied Griswold&#39;s request to dismiss the case, after which she signed the stipulation; with the agreement in place he dismissed PILF&#39;s claim that Griswold violated the National Voter Registration Act of 1993.[1] Badlands commentary noted that Brimmer&#39;s ruling came as similar voter-roll &quot;glitches&quot; were being reported in California and Iowa.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: New Gotham City, Iranian Mysteries &amp; Wars Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/philip-brimmer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const philipBrimmer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  philipBrimmer as default
};
