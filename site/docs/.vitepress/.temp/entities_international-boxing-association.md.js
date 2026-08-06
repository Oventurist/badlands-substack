import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"International Boxing Association","description":"","frontmatter":{"title":"International Boxing Association","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["boxing","sports-governance","gender-eligibility"],"sources":["raw/badlands-news-brief-06e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/international-boxing-association.md","filePath":"entities/international-boxing-association.md","lastUpdated":null}');
const _sfc_main = { name: "entities/international-boxing-association.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="international-boxing-association" tabindex="-1">International Boxing Association <a class="header-anchor" href="#international-boxing-association" aria-label="Permalink to &quot;International Boxing Association&quot;">​</a></h1><p>The International Boxing Association (IBA) is the international governing body for amateur boxing.[1] It became central to a 2024 Olympic controversy after it emerged that Algerian boxer <a href="/entities/imane-khelif">Imane Khelif</a> had been banned from the 2023 world championships by the IBA for failing tests intended to establish gender qualification.[1]</p><p>Despite that disqualification, the <a href="/entities/international-olympic-committee">International Olympic Committee</a> permitted Khelif to compete at the 2024 Paris Games over the objections of female athletes, setting up the 46-second bout in which Italy&#39;s <a href="/entities/angela-carini">Angela Carini</a> abandoned the match shouting &quot;This is unjust!&quot;[1] The divergence between the IBA&#39;s ruling and the IOC&#39;s admission decision framed much of the ensuing public dispute over eligibility standards in women&#39;s boxing.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Electionception, Sovereign Alliance Digs &amp; Chick Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-06e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-06e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/international-boxing-association.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalBoxingAssociation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  internationalBoxingAssociation as default
};
