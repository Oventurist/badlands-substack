import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FNSEA","description":"","frontmatter":{"title":"FNSEA","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","agriculture","protests","european-union","farmers"],"sources":["raw/badlands-news-brief-1ab.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/fnsea.md","filePath":"entities/fnsea.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fnsea.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fnsea" tabindex="-1">FNSEA <a class="header-anchor" href="#fnsea" aria-label="Permalink to &quot;FNSEA&quot;">​</a></h1><p>The <strong>FNSEA</strong> (Fédération Nationale des Syndicats d&#39;Exploitants Agricoles) is France&#39;s largest farmers&#39; union and one of the two main organizations that led the French agricultural protests of early 2024.[1]</p><h2 id="_2024-protests-and-settlement" tabindex="-1">2024 protests and settlement <a class="header-anchor" href="#_2024-protests-and-settlement" aria-label="Permalink to &quot;2024 protests and settlement&quot;">​</a></h2><p>During the <a href="/concepts/2024-european-farmer-protests">2024 European farmer protests</a>, French farmers erected road blockades across the country in revolt against European Union climate-driven initiatives that protesters argued were designed to restructure food production while competitors such as China and India faced no comparable burden.[1] After farmers escalated their actions, the French government promised on Thursday, February 1, 2024, to extend protections including better control of imports and additional aid to farmers, measures the unions deemed &quot;tangible progress.&quot;[1] Prime Minister <a href="/entities/gabriel-attal">Gabriel Attal</a> framed the announcement around the questions facing all of Europe: how to produce more but better, how to continue tackling climate change, and how to avoid unfair competition from foreign countries.[1]</p><p>In response, FNSEA announced that it was time to lift the blockades and &quot;go home,&quot; a message echoed by Arnaud Gaillot of the Young Farmers&#39; union.[1] Both unions nonetheless warned that other forms of protest would continue and that they would return if the government failed to make good on its promises.[1] Related demonstrations had been held in Belgium, Portugal, Greece and Germany, with tensions peaking in Brussels when farmers threw eggs and stones at the European Parliament building; farmers in Ireland began protesting the same Thursday evening in solidarity.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Border Bill Dead on Arrival ... Just Like Bidenomics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ab" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ab</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fnsea.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fnsea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fnsea as default
};
