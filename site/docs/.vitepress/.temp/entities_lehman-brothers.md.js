import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lehman Brothers","description":"","frontmatter":{"title":"Lehman Brothers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["wall-street","2008-crisis","investment-banking","jeb-bush"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lehman-brothers.md","filePath":"entities/lehman-brothers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lehman-brothers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lehman-brothers" tabindex="-1">Lehman Brothers <a class="header-anchor" href="#lehman-brothers" aria-label="Permalink to &quot;Lehman Brothers&quot;">​</a></h1><p>Lehman Brothers was the investment bank whose 2008 collapse — the largest bankruptcy in U.S. history — triggered the broader global financial meltdown.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p><a href="/entities/jeb-bush">Jeb Bush</a> earned more than $14 million over roughly seven years as an adviser to Lehman and, after the bankruptcy, to Barclays, which took over the firm; the Badlands Media account notes he apparently prefers people not know it.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> In 2008, as Lehman fell into insolvency because of its bad bet on real estate, Bush took part in a firm-wide rescue effort known internally as &quot;Project Green,&quot; the process of raising new capital and disposing of bad balance-sheet assets. His own portion was termed &quot;<a href="/concepts/project-verde">Project Verde</a>,&quot; an attempt to convince Mexican billionaire <a href="/entities/carlos-slim">Carlos Slim</a> to make a potentially life-saving investment.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> Examiner Anton Valukas recorded that on July 5, 2008 Bush reported the meeting had been unsuccessful because Slim &quot;did not express interest in jv (joint venture) or stock purchase.&quot;<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lehman-brothers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lehmanBrothers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lehmanBrothers as default
};
