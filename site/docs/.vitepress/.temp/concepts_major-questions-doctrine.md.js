import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Major Questions Doctrine","description":"","frontmatter":{"title":"Major Questions Doctrine","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["law","administrative-state","supreme-court","separation-of-powers"],"sources":["raw/badlands-brief-959.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/major-questions-doctrine.md","filePath":"concepts/major-questions-doctrine.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/major-questions-doctrine.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="major-questions-doctrine" tabindex="-1">Major Questions Doctrine <a class="header-anchor" href="#major-questions-doctrine" aria-label="Permalink to &quot;Major Questions Doctrine&quot;">​</a></h1><p>The major questions doctrine is the principle of administrative law holding that agencies and the executive may not claim sweeping economic or political authority absent a clear statement from Congress.[1] It supplied the reasoning behind the <a href="/concepts/supreme-court-ieepa-tariff-ruling-2026">Supreme Court&#39;s February 2026 ruling</a> that the <a href="/concepts/international-emergency-economic-powers-act">International Emergency Economic Powers Act</a> did not authorize broad tariffs without explicit congressional delegation.[1]</p><p>In a concurrence quoted at length by Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a>, Justice <a href="/entities/neil-gorsuch">Neil Gorsuch</a> explained that Chevron deference had established &quot;a presumption that was nearly the opposite of the major questions doctrine,&quot; putting a thumb on the scale in favor of delegated power whenever Congress failed to speak clearly.[1] With Chevron overruled, Gorsuch wrote, the conflict between the two doctrines is gone and the Court&#39;s application of the major questions doctrine is &quot;not invention so much as return to form.&quot;[1]</p><p>Badlands commentary treated the doctrine as an instrument for returning the branches of government to their constitutional boxes, noting Gorsuch&#39;s broader campaign against the administrative state and the opinion&#39;s emphasis on the taxing power belonging to the representative branch.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;We Are the Champions of the World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-959" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-959</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/major-questions-doctrine.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const majorQuestionsDoctrine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  majorQuestionsDoctrine as default
};
