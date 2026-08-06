import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David J. Bolter","description":"","frontmatter":{"title":"David J. Bolter","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","wisconsin","2020-election"],"sources":["raw/badlands-brief-f87.md"],"confidence":"low"},"headers":[],"relativePath":"entities/david-j-bolter.md","filePath":"entities/david-j-bolter.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-j-bolter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-j-bolter" tabindex="-1">David J. Bolter <a class="header-anchor" href="#david-j-bolter" aria-label="Permalink to &quot;David J. Bolter&quot;">​</a></h1><p>David J. Bolter is an employee of the Milwaukee County Election Commission whose sworn affidavit concerning the 2020 presidential election has been cited in reporting on ballot handling in Milwaukee.[1]</p><h2 id="affidavit" tabindex="-1">Affidavit <a class="header-anchor" href="#affidavit" aria-label="Permalink to &quot;Affidavit&quot;">​</a></h2><p>Reporting summarized in the Badlands Brief in May 2026 cited a sworn affidavit attributed to Bolter describing an announcement made on November 4, 2020 regarding the arrival of additional ballots at Milwaukee&#39;s <a href="/concepts/milwaukee-central-count-facility">Central Count facility</a>.[1] The affidavit was referenced alongside the flash drive episode involving former <a href="/entities/milwaukee-election-commission">Milwaukee Election Commission</a> director <a href="/entities/claire-woodall-vogg">Claire Woodall-Vogg</a> in the context of a reported <a href="/entities/fbi">FBI</a> inquiry into the administration of the 2020 election in Wisconsin.[1] Such affidavits form part of the documentary record cited in <a href="/concepts/2020-election-fraud-claims">2020 election fraud claims</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Resigns; Iran Peace Deal on the Horizon&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-f87" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-f87</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-j-bolter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidJBolter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidJBolter as default
};
