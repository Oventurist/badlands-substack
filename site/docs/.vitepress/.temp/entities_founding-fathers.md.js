import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Founding Fathers","description":"","frontmatter":{"title":"Founding Fathers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["american-history","founding","badlands-media"],"sources":["raw/badlands-blitz-episode-10.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/founding-fathers.md","filePath":"entities/founding-fathers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/founding-fathers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="founding-fathers" tabindex="-1">Founding Fathers <a class="header-anchor" href="#founding-fathers" aria-label="Permalink to &quot;Founding Fathers&quot;">​</a></h1><p>The <strong>Founding Fathers</strong> are the men who led the American Revolution and framed the United States&#39; founding documents, among them <a href="/entities/george-washington">George Washington</a> and <a href="/entities/benjamin-franklin">Benjamin Franklin</a>.[1] They recur in <a href="/entities/badlands-media">Badlands Media</a> commentary as a reference point for debates about civic duty, self-government and the nature of political struggle.[1]</p><h2 id="treatment-in-badlands-commentary" tabindex="-1">Treatment in Badlands commentary <a class="header-anchor" href="#treatment-in-badlands-commentary" aria-label="Permalink to &quot;Treatment in Badlands commentary&quot;">​</a></h2><p>Episode 10 of <a href="/concepts/the-blitz">The Blitz</a>, published 14 March 2026, closed its list of framing questions by asking what people get wrong when it comes to remembering the Founding Fathers.[1] The question was posed alongside discussions of trust in <a href="/entities/donald-trump">Donald Trump</a> and the internal division of the <a href="/concepts/truth-community">Truth Community</a>, implying that popular memory of the founding generation is idealised in ways that distort present-day political expectations.[1] Hosts <a href="/entities/burning-bright">Burning Bright</a> and <a href="/entities/ashe-in-america">Ashe in America</a> treated the subject as one of the &quot;prime sifting&quot; issues defining the <a href="/concepts/information-war">Info War</a> circa 2026.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Blitz Episode 10&quot;, URL: <a href="https://badlands.substack.com/p/badlands-blitz-episode-10" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-blitz-episode-10</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/founding-fathers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const foundingFathers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  foundingFathers as default
};
