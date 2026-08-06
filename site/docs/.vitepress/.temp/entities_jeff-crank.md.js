import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeff Crank","description":"","frontmatter":{"title":"Jeff Crank","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colorado","congress","election-integrity","republicans"],"sources":["raw/badlands-brief-169.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jeff-crank.md","filePath":"entities/jeff-crank.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeff-crank.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeff-crank" tabindex="-1">Jeff Crank <a class="header-anchor" href="#jeff-crank" aria-label="Permalink to &quot;Jeff Crank&quot;">​</a></h1><p>Jeff Crank is the US Representative for <a href="/entities/colorado">Colorado</a>&#39;s fifth congressional district and a co-plaintiff in the <a href="/entities/republican-national-committee">Republican National Committee</a>&#39;s 2026 lawsuit against Secretary of State <a href="/entities/jena-griswold">Jena Griswold</a> over overseas voting rules.[1]</p><h2 id="badlands-commentary" tabindex="-1">Badlands commentary <a class="header-anchor" href="#badlands-commentary" aria-label="Permalink to &quot;Badlands commentary&quot;">​</a></h2><p><a href="/entities/ashe-in-america">Ashe in America</a> criticized Crank as a legislator who &quot;thinks he is a champion of election integrity because he voted for the Save America Act.&quot;[1] She wrote that he gave her &quot;a word salad&quot; when asked why citizens should be paying taxes, and that his 2026 campaign has centered mainly on expansive spending priorities.[1] She grouped him with what she called establishmentarians, identifiable by &quot;a portfolio of half measures and an overt disdain for the People and their desired outcomes.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Condemnation, Calibration, &amp; Constitutional Boxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-169" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-169</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeff-crank.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeffCrank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeffCrank as default
};
