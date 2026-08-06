import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pablo Escobar","description":"","frontmatter":{"title":"Pablo Escobar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colombia","drug-trafficking","medellin-cartel","assassination"],"sources":["raw/a-family-affair.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pablo-escobar.md","filePath":"entities/pablo-escobar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pablo-escobar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pablo-escobar" tabindex="-1">Pablo Escobar <a class="header-anchor" href="#pablo-escobar" aria-label="Permalink to &quot;Pablo Escobar&quot;">​</a></h1><p>Pablo Escobar led the <a href="/entities/medellin-cartel">Medellín Cartel</a>, the most powerful drug-trafficking organization in the world in the late 1980s.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>In the Badlands Media narrative Escobar is one of <a href="/entities/jeb-bush">Jeb Bush</a>&#39;s cartel contacts, and among those who financed the Nicaraguan contras in exchange for CIA-supplied weapons through channels Bush is said to have built while banking in Caracas.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> By 1988, with Colombian violence escalating and authorities closing in, Escobar&#39;s organization entered indirect negotiations with the Colombian government, proposing a deal to preserve their wealth and end the pursuit.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> In 1989 the cartel sent Vallejo to Miami to reach a lawyer working with Jeb Bush&#39;s team of corporate attorneys, hoping the president&#39;s son would carry the proposal privately to his father.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><p>The article argues Escobar surely knew Jeb was his father&#39;s point man.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a> The August 1989 assassination of leading presidential candidate Luis Galán — who had promised to extradite drug traffickers to the United States — was orchestrated in part by Escobar and reportedly urged by Galán&#39;s political rivals; it is described as the event that ended the negotiations and made Escobar expendable.<a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Family Affair&quot;, URL: <a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-family-affair</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pablo-escobar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pabloEscobar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pabloEscobar as default
};
