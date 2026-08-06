import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rick Ross","description":"","frontmatter":{"title":"Rick Ross","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["drug-trade","los-angeles","cia"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rick-ross.md","filePath":"entities/rick-ross.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rick-ross.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rick-ross" tabindex="-1">Rick Ross <a class="header-anchor" href="#rick-ross" aria-label="Permalink to &quot;Rick Ross&quot;">​</a></h1><p>Rick Ross (&quot;Freeway&quot; Rick Ross) is described by Erik Carlson as an aspiring young tennis player who could not even read and who became fabulously rich selling drugs in Los Angeles.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="role-in-the-article" tabindex="-1">Role in the article <a class="header-anchor" href="#role-in-the-article" aria-label="Permalink to &quot;Role in the article&quot;">​</a></h2><p>Ross serves in the essay as the visible retail face of an operation Carlson attributes to the <a href="/entities/cia">CIA</a>: the agency is said to have smuggled drugs in from South and Central America for sale on the South Central streets of Los Angeles, with Ross distributing them.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a> The resulting drug trade filled the <a href="/concepts/prison-privatization">privatized US prisons</a> created in the same period, in tandem with the <a href="/concepts/crime-bill-1994">1994 Crime Bill</a>.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><p>He belongs to the class of figures Carlson later generalizes about — groups used as scapegoats whose control and power are not what the public has been led to believe, with puppet masters pulling their strings.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Journey of Ever-changing Truths&quot;, URL: <a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-journey-of-ever-changing-truths</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rick-ross.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rickRoss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rickRoss as default
};
