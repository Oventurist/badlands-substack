import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"DGSE","description":"","frontmatter":{"title":"DGSE","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["france","intelligence-agencies"],"sources":["raw/badlands-brief-bdc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dgse.md","filePath":"entities/dgse.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dgse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dgse" tabindex="-1">DGSE <a class="header-anchor" href="#dgse" aria-label="Permalink to &quot;DGSE&quot;">​</a></h1><p>The Direction générale de la sécurité extérieure (DGSE) is France&#39;s external intelligence service.[1]</p><h2 id="athanor-lodge-case" tabindex="-1">Athanor lodge case <a class="header-anchor" href="#athanor-lodge-case" aria-label="Permalink to &quot;Athanor lodge case&quot;">​</a></h2><p>Members of the DGSE were among the 22 defendants who went on trial in Paris in late March 2026 over an alleged criminal network organized around the Athanor Masonic lodge in Puteaux, alongside police officers, a former domestic intelligence agent, and civilians.[1] Charges in the case include murder, attempted murder, aggravated violence, armed robbery, and criminal conspiracy, and in one 2020 episode suspects claimed they believed they were acting under official authority against a purported foreign intelligence agent — a claim investigators say was false.[1] The proceeding is described at <a href="/concepts/athanor-lodge-criminal-network-trial">Athanor lodge criminal network trial</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Reversed Rulings &amp; Reasonable Regimes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bdc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bdc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dgse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dgse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dgse as default
};
