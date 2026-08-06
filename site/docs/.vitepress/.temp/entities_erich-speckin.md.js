import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Erich Speckin","description":"","frontmatter":{"title":"Erich Speckin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","forensics","arizona","expert-witness"],"sources":["raw/badlands-news-brief-862.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/erich-speckin.md","filePath":"entities/erich-speckin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/erich-speckin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="erich-speckin" tabindex="-1">Erich Speckin <a class="header-anchor" href="#erich-speckin" aria-label="Permalink to &quot;Erich Speckin&quot;">​</a></h1><p>Erich Speckin is a forensic document examiner who served as the plaintiffs&#39; handwriting and signature verification expert during the second phase of <a href="/entities/kari-lake">Kari Lake</a>&#39;s election challenge trial in <a href="/entities/maricopa-county">Maricopa County</a>, Arizona.[1]</p><h2 id="testimony-in-lake-v-hobbs" tabindex="-1">Testimony in Lake v. Hobbs <a class="header-anchor" href="#testimony-in-lake-v-hobbs" aria-label="Permalink to &quot;Testimony in Lake v. Hobbs&quot;">​</a></h2><p>On Thursday, May 18, 2023 — day two of the trial in <a href="/concepts/lake-v-hobbs">Lake v. Hobbs et al.</a> — Speckin testified regarding the speed at which Maricopa County reviewers processed mail-in ballot signature comparisons.[1] In his opinion, the 45,670 signatures approved by the reviewers identified in county data as User 26 and User 9 should be removed from the pool of 321,495 signatures compared in under three seconds, because those &quot;comparisons&quot; were completed so quickly that they could not conceivably have been performed by a human being.[1]</p><p>Speckin&#39;s testimony was central to the plaintiffs&#39; theory of the case: that if machines rather than human reviewers were effectively conducting <a href="/concepts/signature-verification">signature verification</a>, then verification as required by Arizona statute did not take place at all.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kari Counters, Elites Gather &amp; Data Talks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-862" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-862</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/erich-speckin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const erichSpeckin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  erichSpeckin as default
};
