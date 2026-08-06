import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Premier Election Solutions","description":"","frontmatter":{"title":"Premier Election Solutions","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","voting-machines","antitrust","election-integrity","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/premier-election-solutions.md","filePath":"entities/premier-election-solutions.md","lastUpdated":null}');
const _sfc_main = { name: "entities/premier-election-solutions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="premier-election-solutions" tabindex="-1">Premier Election Solutions <a class="header-anchor" href="#premier-election-solutions" aria-label="Permalink to &quot;Premier Election Solutions&quot;">​</a></h1><p>Premier Election Solutions was a voting equipment company, formerly a subsidiary of Diebold Inc., whose court-ordered sale reshaped the American election technology market as recounted in the June 9, 2026 <em>Badlands Brief</em>.[1]</p><p><a href="/entities/election-systems-software">Election Systems &amp; Software</a> purchased Premier and was compelled to divest it roughly six months later, in 2010, by the <a href="/entities/department-of-justice">Department of Justice</a> under Attorney General <a href="/entities/eric-holder">Eric Holder</a>.[1] The divestiture order covered &quot;all of the intellectual property associated with all versions — past, present, and in development — of the Premier voting equipment systems,&quot; and obliged ES&amp;S to sell only to a buyer approved by the department.[1]</p><p>The approved buyer was <a href="/entities/dominion-voting-systems">Dominion Voting Systems</a>, which acquired Premier and, a few months later, also purchased <a href="/entities/sequoia-voting-systems">Sequoia Voting Systems</a> — the company that had been owned by <a href="/entities/smartmatic">Smartmatic</a> and that, per a 2008 Delaware Court filing, was still using Smartmatic intellectual property.[1] In the Badlands account, the Premier divestiture is the moment at which Dominion acquired &quot;a formidable share of the market.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/premier-election-solutions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const premierElectionSolutions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  premierElectionSolutions as default
};
