import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marshall Plan","description":"","frontmatter":{"title":"Marshall Plan","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["cold-war","foreign-aid","labor-unions","reconstruction"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/marshall-plan.md","filePath":"concepts/marshall-plan.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/marshall-plan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marshall-plan" tabindex="-1">Marshall Plan <a class="header-anchor" href="#marshall-plan" aria-label="Permalink to &quot;Marshall Plan&quot;">​</a></h1><p>The Marshall Plan (officially the European Recovery Program) was a United States initiative, announced in 1947, that provided large-scale economic aid to help rebuild Western European economies after World War II. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, the Marshall Plan&#39;s labor provisions are cited as a mechanism that conditioned aid on anti-leftist union reforms.</p><h2 id="labor-provisions" tabindex="-1">Labor provisions <a class="header-anchor" href="#labor-provisions" aria-label="Permalink to &quot;Labor provisions&quot;">​</a></h2><p>The article states that the <a href="/entities/pentagon">DoD</a> (&quot;though focused on military reconstruction&quot;) indirectly supported the crackdown on communist-influenced labor via &quot;the nefarious and notorious Marshall Plan&#39;s labor provisions that conditioned aid to anti-leftist union reforms in recipient countries.&quot; The article frames the Marshall Plan as part of the broader post-war U.S. effort, alongside the coordination under Secretary of State <a href="/entities/edward-stettinius">Edward Stettinius</a>, to ensure post-war labor movements aligned with American free-market ideals and to prevent Soviet-style worker councils from taking root.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/marshall-plan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marshallPlan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marshallPlan as default
};
