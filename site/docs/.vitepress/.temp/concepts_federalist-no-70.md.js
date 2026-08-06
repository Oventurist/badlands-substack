import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Federalist No. 70","description":"","frontmatter":{"title":"Federalist No. 70","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["federalist-papers","executive-power","presidential-immunity","heritage-foundation"],"sources":["raw/badlands-news-brief-528.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/federalist-no-70.md","filePath":"concepts/federalist-no-70.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/federalist-no-70.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="federalist-no-70" tabindex="-1">Federalist No. 70 <a class="header-anchor" href="#federalist-no-70" aria-label="Permalink to &quot;Federalist No. 70&quot;">​</a></h1><p>Federalist No. 70 is an essay arguing for a strong, energetic single executive.[1] It was invoked in July 2024 by <a href="/entities/kevin-roberts">Kevin Roberts</a>, president of the <a href="/entities/heritage-foundation">Heritage Foundation</a>, in support of his claim that the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a>&#39;s <a href="/concepts/presidential-immunity">presidential immunity</a> ruling was &quot;vital&quot; and would reinforce a <a href="/concepts/second-american-revolution">second American Revolution</a>.[1]</p><p>The source report, published by <a href="/entities/the-hill">The Hill</a> and quoted in the Badlands News Brief, attributes the essay to Alexander Hamilton and dates it to 1877 — a date inconsistent with the Federalist Papers&#39; actual late-1780s publication, an apparent error carried in the original reporting.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Pushes Back as Peacemakers Posture&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-528" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-528</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/federalist-no-70.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const federalistNo70 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  federalistNo70 as default
};
