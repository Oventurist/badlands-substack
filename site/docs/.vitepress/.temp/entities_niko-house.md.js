import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Niko House","description":"","frontmatter":{"title":"Niko House","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["commentator","venezuela","cia","media"],"sources":["raw/badlands-news-brief-040.md"],"confidence":"low"},"headers":[],"relativePath":"entities/niko-house.md","filePath":"entities/niko-house.md","lastUpdated":null}');
const _sfc_main = { name: "entities/niko-house.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="niko-house" tabindex="-1">Niko House <a class="header-anchor" href="#niko-house" aria-label="Permalink to &quot;Niko House&quot;">​</a></h1><p>Niko House is an American independent political commentator quoted in August 2024 alleging that Venezuelan opposition leader <a href="/entities/maria-corina-machado">Maria Corina Machado</a> operates as a paid agent of the United States government.[1]</p><p>&quot;She&#39;s been operating as a foreign agent on behalf of the United States. The <a href="/entities/cia">CIA</a> literally writes her a paycheck,&quot; House said in remarks reported by Sputnik and reproduced in the <em>Badlands News Brief</em>.[1] House also pointed to Venezuela&#39;s electoral system, which he described as containing multiple checks and balances and permitting the opposition to monitor vote counting at precinct level, and argued that &quot;the most simplistic explanation is the oil&quot; behind Washington&#39;s interest in the election.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> cautioned that House&#39;s accusation was not definitive proof even if it aligned with existing skepticism of the CIA, but credited him with &quot;compelling logic,&quot; noting the parallel that <a href="/entities/joe-biden">Joe Biden</a> has never called for an audit of the 2020 U.S. election while <a href="/entities/nicolas-maduro">Nicolás Maduro</a> has invited scrutiny of his own.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Regime is Totally Winning Amidst Continued Meltdown&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-040" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-040</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/niko-house.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nikoHouse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nikoHouse as default
};
