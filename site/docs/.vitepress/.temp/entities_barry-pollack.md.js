import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barry Pollack","description":"","frontmatter":{"title":"Barry Pollack","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law","venezuela","sanctions","sixth-amendment"],"sources":["raw/badlands-brief-9f2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/barry-pollack.md","filePath":"entities/barry-pollack.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barry-pollack.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barry-pollack" tabindex="-1">Barry Pollack <a class="header-anchor" href="#barry-pollack" aria-label="Permalink to &quot;Barry Pollack&quot;">​</a></h1><p>Barry Pollack is the defense attorney representing <a href="/entities/nicolas-maduro">Nicolás Maduro</a> in the United States narcoterrorism case brought against the Venezuelan leader.[1] Pollack argued that US <a href="/concepts/sanctions">sanctions</a> on <a href="/entities/venezuela">Venezuela</a> blocked Maduro&#39;s <a href="/concepts/sixth-amendment">Sixth Amendment</a> right to counsel of his choosing, after the <a href="/entities/office-of-foreign-assets-control">Office of Foreign Assets Control</a> first permitted payment of Maduro&#39;s legal fees and then revoked that permission.[1]</p><p>Pollack contended that in revoking the license the government was interfering with Maduro&#39;s chosen legal representation.[1] A February court filing on his side of the dispute stated that &quot;Mr. Maduro, as Venezuela&#39;s head of state, has both a right and an expectation to have legal fees associated with these charges funded by the government of Venezuela.&quot;[1] The <a href="/entities/department-of-justice">Justice Department</a> subsequently agreed in a court filing to modify the sanctions so that the Venezuelan government could pay Maduro&#39;s counsel, and prosecutors said the change rendered Maduro&#39;s motion to dismiss moot.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Rigged Maps, Russian Grain, &amp; Maduro&#39;s Billable Hours&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barry-pollack.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barryPollack = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barryPollack as default
};
