import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Election Systems & Software","description":"","frontmatter":{"title":"Election Systems & Software","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","voting-machines","antitrust","election-integrity","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/election-systems-software.md","filePath":"entities/election-systems-software.md","lastUpdated":null}');
const _sfc_main = { name: "entities/election-systems-software.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="election-systems-software" tabindex="-1">Election Systems &amp; Software <a class="header-anchor" href="#election-systems-software" aria-label="Permalink to &quot;Election Systems &amp; Software&quot;">​</a></h1><p>Election Systems &amp; Software (ES&amp;S) is described in the June 9, 2026 <em>Badlands Brief</em> as a &quot;US voting equipment powerhouse&quot; whose forced divestiture of a competitor created <a href="/entities/dominion-voting-systems">Dominion Voting Systems</a> as a national player.[1]</p><p>In 2010, the Obama-era <a href="/entities/department-of-justice">Department of Justice</a> under Attorney General <a href="/entities/eric-holder">Eric Holder</a> required ES&amp;S to divest <a href="/entities/premier-election-solutions">Premier Election Solutions</a>, the former Diebold Inc. subsidiary that ES&amp;S had purchased just six months earlier.[1] The DOJ order required ES&amp;S to divest &quot;all of the intellectual property associated with all versions — past, present, and in development — of the Premier voting equipment systems to another company,&quot; and to &quot;grant a fully paid-up, irrevocable, perpetual license to use the AutoMARK, ES&amp;S&#39;s ballot marking device,&quot; including the &quot;right to modify and improve both Premier products and the AutoMARK.&quot;[1]</p><p>The department further specified that &quot;ES&amp;S must sell the divestiture assets to a buyer approved by the department,&quot; and required ES&amp;S to grant the divestiture buyer an opportunity to compete for services to Premier customers then under contract with ES&amp;S.[1] The approved buyer was Dominion Voting Systems.[1] Badlands presents this government-directed transfer as a pivotal step in the consolidation of American election infrastructure and in the propagation of <a href="/entities/smartmatic">Smartmatic</a>-derived intellectual property through the market.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/election-systems-software.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const electionSystemsSoftware = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  electionSystemsSoftware as default
};
