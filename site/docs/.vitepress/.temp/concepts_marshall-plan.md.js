import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Marshall Plan","description":"","frontmatter":{"title":"Marshall Plan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["marshall-plan","europe","labor","cold-war","aid-conditionality"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/marshall-plan.md","filePath":"concepts/marshall-plan.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/marshall-plan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="marshall-plan" tabindex="-1">Marshall Plan <a class="header-anchor" href="#marshall-plan" aria-label="Permalink to &quot;Marshall Plan&quot;">​</a></h1><p>The Marshall Plan was the post-war American aid program for Europe, described in the article as &quot;nefarious and notorious.&quot;<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a> While the Department of Defense was formally focused on military reconstruction, the article says it indirectly supported the campaign against communist-led labor through the Marshall Plan&#39;s labor provisions, which conditioned aid on anti-leftist union reforms in recipient countries.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><p>This conditionality is presented as an early version of a mechanism later used by the <a href="/entities/solidarity-center">Solidarity Center</a>, whose grant agreements tie funding to alignment with U.S. foreign policy objectives.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a> It also complemented the AFL&#39;s <a href="/entities/free-trade-union-committee">Free Trade Union Committee</a> operations in France and Italy and the sabotage of the <a href="/entities/world-federation-of-trade-unions">World Federation of Trade Unions</a>.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A More Perfect (Labor) Union&quot;, URL: <a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-more-perfect-labor-union</a></li></ol></div>`);
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
