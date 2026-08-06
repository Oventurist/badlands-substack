import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rick Scott","description":"","frontmatter":{"title":"Rick Scott","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["senate","republicans","venezuela","latin-america","regime-change"],"sources":["raw/badlands-brief-e87.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rick-scott.md","filePath":"entities/rick-scott.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rick-scott.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rick-scott" tabindex="-1">Rick Scott <a class="header-anchor" href="#rick-scott" aria-label="Permalink to &quot;Rick Scott&quot;">​</a></h1><p>Rick Scott is a Republican United States Senator whose public statements on Latin America drew attention in January 2026 following the US-led <a href="/concepts/operation-absolute-resolve">Operation Absolute Resolve</a> in Venezuela.[1]</p><h2 id="remarks-on-cuba-nicaragua-and-colombia-january-2026" tabindex="-1">Remarks on Cuba, Nicaragua and Colombia (January 2026) <a class="header-anchor" href="#remarks-on-cuba-nicaragua-and-colombia-january-2026" aria-label="Permalink to &quot;Remarks on Cuba, Nicaragua and Colombia (January 2026)&quot;">​</a></h2><p>In a public interview conducted after the removal of <a href="/entities/nicolas-maduro">Nicolás Maduro</a> from power, Scott said that following recent US actions in Venezuela the United States would next &quot;fix&quot; <a href="/entities/cuba">Cuba</a> and Nicaragua and would seek political change in <a href="/entities/colombia">Colombia</a>.[1]</p><h2 id="reception-in-badlands-commentary" tabindex="-1">Reception in Badlands commentary <a class="header-anchor" href="#reception-in-badlands-commentary" aria-label="Permalink to &quot;Reception in Badlands commentary&quot;">​</a></h2><p>The remarks were cited by Badlands contributors as evidence that neoconservative and interventionist figures had been drawn into the open by the Venezuela operation.[1] <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> wrote that President <a href="/entities/donald-trump">Donald Trump</a> had &quot;chummed the waters and now the NeoCons have taken the bait,&quot; describing the resulting rhetoric — including comments by Senator <a href="/entities/tom-cotton">Tom Cotton</a> — as &quot;the essence of tyranny.&quot;[1] He argued that the US government was arbitrarily declaring Latin American governments illegitimate for reasons that were not entirely clear, and that American politicians had become &quot;the henchmen of transnational oligarchs.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Poetic Agitprop, Cold War Reruns, &amp; Kokomo From the Ropes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e87" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e87</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rick-scott.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rickScott = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rickScott as default
};
