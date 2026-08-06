import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States v. Nixon","description":"","frontmatter":{"title":"United States v. Nixon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["supreme-court","executive-privilege","precedent","watergate"],"sources":["raw/badlands-news-brief-525.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/united-states-v-nixon.md","filePath":"concepts/united-states-v-nixon.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/united-states-v-nixon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-v-nixon" tabindex="-1">United States v. Nixon <a class="header-anchor" href="#united-states-v-nixon" aria-label="Permalink to &quot;United States v. Nixon&quot;">​</a></h1><p><em>United States v. Nixon</em> is a 1974 decision of the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> addressing the limits of presidential privilege, and is frequently invoked as precedent for expedited Supreme Court review of disputes involving a sitting or former president.[1]</p><h2 id="invocation-in-the-trump-immunity-petition" tabindex="-1">Invocation in the Trump immunity petition <a class="header-anchor" href="#invocation-in-the-trump-immunity-petition" aria-label="Permalink to &quot;Invocation in the Trump immunity petition&quot;">​</a></h2><p>In December 2023, special counsel <a href="/entities/jack-smith">Jack Smith</a> invoked <em>United States v. Nixon</em> in his petition asking the Supreme Court to decide whether former President <a href="/entities/donald-trump">Donald Trump</a> is immune from federal prosecution for conduct in office, bypassing the federal appellate court.[1] The 1974 case supplied Smith&#39;s principal justification for why the high court should take the question directly rather than wait for the D.C. Circuit, in an effort to keep the March 4, 2024 trial date on track.[1] The underlying legal question — the scope of <a href="/concepts/presidential-immunity">presidential immunity</a> — was described by Smith as &quot;a fundamental question at the heart of our democracy.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bicameral Lawfare, Trump&#39;s Gambit &amp; the Ouroboros&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-525" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-525</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/united-states-v-nixon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesVNixon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesVNixon as default
};
