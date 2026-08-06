import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trump v. Slaughter","description":"","frontmatter":{"title":"Trump v. Slaughter","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["supreme-court","removal-power","independent-agencies","executive-power"],"sources":["raw/badlands-brief-805.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/trump-v-slaughter.md","filePath":"concepts/trump-v-slaughter.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/trump-v-slaughter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trump-v-slaughter" tabindex="-1">Trump v. Slaughter <a class="header-anchor" href="#trump-v-slaughter" aria-label="Permalink to &quot;Trump v. Slaughter&quot;">​</a></h1><p><em>Trump v. Slaughter</em> is a recent <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> decision cited by the <a href="/entities/white-house">White House</a> as precedent for the president&#39;s authority to remove officials from independent, bipartisan federal commissions.[1]</p><p>The case was invoked in July 2026 when a White House official defended President <a href="/entities/donald-trump">Donald Trump</a>&#39;s removal of the final three members of the U.S. <a href="/entities/election-assistance-commission">Election Assistance Commission</a> on July 9, stating that the president had authority to remove officials who were not aligned with the administration&#39;s election-security priorities.[1] Because the commission was created by <a href="/concepts/help-america-vote-act">the Help America Vote Act of 2002</a> with a statutory requirement that its four presidentially appointed, Senate-confirmed members be divided evenly between the two major parties, the removals raised the question of how far the removal power recognized in <em>Slaughter</em> extends to structurally bipartisan bodies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/trump-v-slaughter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trumpVSlaughter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trumpVSlaughter as default
};
