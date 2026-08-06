import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Qantas","description":"","frontmatter":{"title":"Qantas","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aviation","australia","data-breach","cybersecurity"],"sources":["raw/badlands-news-brief-7e5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/qantas.md","filePath":"entities/qantas.md","lastUpdated":null}');
const _sfc_main = { name: "entities/qantas.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qantas" tabindex="-1">Qantas <a class="header-anchor" href="#qantas" aria-label="Permalink to &quot;Qantas&quot;">​</a></h1><p>Qantas is Australia&#39;s flag-carrier airline. It featured in the <a href="/entities/badlands-media">Badlands Media</a> News Brief of July 2, 2025 as the victim of a major cyber-attack that potentially exposed the records of up to six million customers.[1]</p><h2 id="_2025-cyber-attack" tabindex="-1">2025 cyber-attack <a class="header-anchor" href="#_2025-cyber-attack" aria-label="Permalink to &quot;2025 cyber-attack&quot;">​</a></h2><p>The airline confirmed on Wednesday, July 2, 2025 that it had suffered a significant cyber-attack. Qantas stated that the affected system had by then been contained and that its systems were secured.[1]</p><p>The compromised system was a third-party platform used by the airline&#39;s contact centre, which held the records of approximately six million customers. The exposed data included customer names, email addresses, phone numbers, dates of birth and frequent flyer numbers.[1]</p><h2 id="attribution" tabindex="-1">Attribution <a class="header-anchor" href="#attribution" aria-label="Permalink to &quot;Attribution&quot;">​</a></h2><p>At the time of the Badlands brief, the breach had not been formally attributed to any particular actor. Badlands editors expressly noted the legal caveat that the Qantas incident had not been attributed to the teenage hacking collective <a href="/entities/scattered-spider">Scattered Spider</a>, despite the two stories being reported in close succession and despite that group&#39;s documented interest in the aviation sector.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor Ashe in America framed the incident with the resigned observation &quot;Another day, another data breach,&quot; using it alongside the Scattered Spider profile to question official assurances that comparable intrusions could not affect election systems.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Cartel Cybersnoops &amp; Teenage Spider Hackers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7e5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7e5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/qantas.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qantas = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qantas as default
};
