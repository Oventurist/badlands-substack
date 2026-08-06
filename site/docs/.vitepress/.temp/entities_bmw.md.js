import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BMW","description":"","frontmatter":{"title":"BMW","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bmw","germany","automotive","layoffs","deindustrialization"],"sources":["raw/badlands-brief-414.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bmw.md","filePath":"entities/bmw.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bmw.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bmw" tabindex="-1">BMW <a class="header-anchor" href="#bmw" aria-label="Permalink to &quot;BMW&quot;">​</a></h1><p>BMW is a German automobile manufacturer whose name is, in the modern zeitgeist, synonymous with German engineering.[1]</p><h2 id="_2026-job-cuts" tabindex="-1">2026 job cuts <a class="header-anchor" href="#_2026-job-cuts" aria-label="Permalink to &quot;2026 job cuts&quot;">​</a></h2><p>In July 2026 BMW announced it would eliminate several thousand jobs in <a href="/entities/germany">Germany</a> by the end of 2027 through a voluntary redundancy program, with the company&#39;s global workforce expected to shrink by roughly 8,000 positions — about 5% of its total workforce, with the majority of the losses falling in Germany. The cuts primarily affect administrative and development roles; production workers are excluded from the buyout package.[1]</p><p>Badlands writer <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> noted that the employee buyout program was expected to roll out within the week, incentivizing office personnel to resign while factory workers were not offered the same package.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>The announcement came as Germany&#39;s industrial sector shed roughly 15,000 jobs per month according to the <a href="/entities/federation-of-german-industries">Federation of German Industries</a>, and formed part of a broader restructuring across the German auto industry. Volkswagen, Mercedes-Benz, Porsche, and other manufacturers announced major cost-cutting measures as the sector contended with declining demand, weaker sales in <a href="/entities/china">China</a>, the transition to electric vehicles, elevated energy costs, and international trade pressures.[1]</p><p>Badlands commentary attributed the underlying cause not to the <a href="/concepts/iran-war">Iran war</a> but to Europe&#39;s elimination of serious domestic energy production and its resulting dependence on <a href="/entities/russia">Russian</a> energy — the same country European governments appear intent on destroying.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narcissistic Sociopathy &amp; Rebranded Sex Robots For Kids&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-414" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-414</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bmw.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bmw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bmw as default
};
