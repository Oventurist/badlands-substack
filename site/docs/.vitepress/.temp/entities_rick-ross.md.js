import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rick Ross","description":"","frontmatter":{"title":"Rick Ross","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["rick-ross","cia","crack-cocaine","south-central-los-angeles","drug-trade"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/rick-ross.md","filePath":"entities/rick-ross.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rick-ross.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rick-ross" tabindex="-1">Rick Ross <a class="header-anchor" href="#rick-ross" aria-label="Permalink to &quot;Rick Ross&quot;">​</a></h1><p>&quot;Freeway&quot; Rick Ross was a Los Angeles drug dealer who appears in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as the retail face of a drug pipeline the article attributes to the <a href="/entities/cia">CIA</a>.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> describes Ross as &quot;an aspiring young tennis player who couldn&#39;t even read&quot; who &quot;became fabulously rich selling drugs in LA.&quot; The source places him downstream of an agency operation in which the CIA &quot;smuggled drugs in from South and Central America to sell on the South-Central streets of Los Angeles,&quot; having traded guns in Central America for those drugs in the first place.</p><p>The article&#39;s summary of the arrangement — &quot;the CIA traded guns in Central America for drugs, then transported those drugs to America to be sold on the city streets. The drug trade in turn filled the US private prisons&quot; — makes Ross a link in a chain running from foreign covert operations through <a href="/concepts/gangster-rap">gangster rap</a> and the <a href="/concepts/violent-crime-control-and-law-enforcement-act-of-1994">1994 Crime Bill</a> to <a href="/concepts/prison-privatization">prison privatization</a>. Like the <a href="/entities/italian-mafia">Italian Mafia</a> in the essay&#39;s other case study, dealers such as Ross are cast as willing participants whose actual power was far smaller than the public was led to believe.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
