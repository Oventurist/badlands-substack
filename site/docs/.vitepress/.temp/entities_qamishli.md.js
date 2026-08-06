import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Qamishli","description":"","frontmatter":{"title":"Qamishli","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","kurds","northeastern-syria","security"],"sources":["raw/badlands-brief-eea.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/qamishli.md","filePath":"entities/qamishli.md","lastUpdated":null}');
const _sfc_main = { name: "entities/qamishli.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qamishli" tabindex="-1">Qamishli <a class="header-anchor" href="#qamishli" aria-label="Permalink to &quot;Qamishli&quot;">​</a></h1><p>Qamishli is a Kurdish-majority city in northeastern <a href="/entities/syria">Syria</a>. In early February 2026, Syrian government security forces entered the city under a U.S.-brokered deal designed to reintegrate Kurdish-controlled areas into central government authority, while Kurdish police continued to maintain day-to-day security in the city.[1]</p><p>The arrangement formed part of a broader reconciliation track in which U.S. envoy <a href="/entities/tom-barrack">Tom Barrack</a> worked to bring the <a href="/entities/kurds">Kurds</a> and Damascus together, running in parallel with Saudi investment in Syria&#39;s reconstruction and renewed U.S. airstrikes against <a href="/entities/islamic-state">Islamic State</a> remnants elsewhere in the country.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Epstein Fallout &amp; Middle East Madness&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-eea" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-eea</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/qamishli.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qamishli = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qamishli as default
};
