import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Protect Democracy","description":"","frontmatter":{"title":"Protect Democracy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nonprofit","elections","democrats","legal-group"],"sources":["raw/badlands-brief-029.md"],"confidence":"low"},"headers":[],"relativePath":"entities/protect-democracy.md","filePath":"entities/protect-democracy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/protect-democracy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="protect-democracy" tabindex="-1">Protect Democracy <a class="header-anchor" href="#protect-democracy" aria-label="Permalink to &quot;Protect Democracy&quot;">​</a></h1><p><strong>Protect Democracy</strong> is a nonpartisan, nonprofit organisation focused on American democratic institutions and election-related legal and policy work.[1]</p><h2 id="_2026-midterm-planning" tabindex="-1">2026 midterm planning <a class="header-anchor" href="#_2026-midterm-planning" aria-label="Permalink to &quot;2026 midterm planning&quot;">​</a></h2><p>The organisation&#39;s head took part in the June 2026 strategy session convened by Senate Minority Leader <a href="/entities/chuck-schumer">Chuck Schumer</a> to prepare Democratic senators for scenarios involving election disruptions, foreign interference, federal law-enforcement activity at polling places, and post-election legal disputes ahead of the <a href="/concepts/2026-midterm-elections">midterms</a>.[1] Also present were former Attorney General <a href="/entities/eric-holder">Eric Holder</a>, attorney <a href="/entities/marc-elias">Marc Elias</a>, election-law expert <a href="/entities/norm-eisen">Norm Eisen</a>, and the head of <a href="/entities/democracy-forward">Democracy Forward</a>.[1] Badlands commentary framed the group&#39;s participation as part of a revived <a href="/concepts/shadow-cabal">shadow cabal</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mixed Gender Crews, Trafficking Stings, &amp; Shadow Cabal Reruns&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-029" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-029</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/protect-democracy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const protectDemocracy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  protectDemocracy as default
};
