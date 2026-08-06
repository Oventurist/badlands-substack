import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zero-Based Budgeting","description":"","frontmatter":{"title":"Zero-Based Budgeting","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["fiscal-policy","government-spending","first-principles","budget"],"sources":["raw/badlands-news-brief-42c.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/zero-based-budgeting.md","filePath":"concepts/zero-based-budgeting.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/zero-based-budgeting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zero-based-budgeting" tabindex="-1">Zero-Based Budgeting <a class="header-anchor" href="#zero-based-budgeting" aria-label="Permalink to &quot;Zero-Based Budgeting&quot;">​</a></h1><p>Zero-based budgeting is a budgeting method in which every expenditure must be justified from a base of zero for each new period, rather than being carried forward from prior budgets.[1] <a href="/concepts/badlands-news-brief">Badlands News Brief</a> contributors describe it as a <a href="/concepts/first-principles">First Principles</a> approach to resetting the financial health of any entity.[1]</p><h2 id="application-to-the-federal-government" tabindex="-1">Application to the federal government <a class="header-anchor" href="#application-to-the-federal-government" aria-label="Permalink to &quot;Application to the federal government&quot;">​</a></h2><p>Writing during the <a href="/concepts/october-2025-government-shutdown">October 2025 government shutdown</a>, contributor <a href="/entities/burning-bright">Burning Bright</a> argued that no entity needs zero-based budgeting more than the U.S. government itself.[1] The commentary was prompted by reporting that <a href="/entities/donald-trump">President Donald Trump</a> and senior <a href="/entities/white-house">White House</a> officials had warned of mass layoffs, agency closures and &quot;irreversible&quot; budget cuts during the shutdown, but had not followed through as the shutdown entered its second week.[1]</p><p>Burning Bright framed the question as one of public mandate rather than technical fiscal management, writing &quot;You are the mandate. The buck stops with you,&quot; and calling on readers to &quot;give Donald Trump permission to go all the way.&quot;[1] In this framing, the political will to authorize a full budgetary reset is the missing ingredient rather than the mechanism itself.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Palisades Patsy, A Gazan Golden Age, &amp; African Espionage&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-42c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-42c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/zero-based-budgeting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zeroBasedBudgeting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zeroBasedBudgeting as default
};
