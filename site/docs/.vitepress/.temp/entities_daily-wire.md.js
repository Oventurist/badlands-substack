import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Daily Wire","description":"","frontmatter":{"title":"The Daily Wire","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["media","conservative","free-speech","outlet"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/daily-wire.md","filePath":"entities/daily-wire.md","lastUpdated":null}');
const _sfc_main = { name: "entities/daily-wire.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-daily-wire" tabindex="-1">The Daily Wire <a class="header-anchor" href="#the-daily-wire" aria-label="Permalink to &quot;The Daily Wire&quot;">​</a></h1><p>The Daily Wire is an American conservative news and entertainment media company co-founded by <a href="/entities/ben-shapiro">Ben Shapiro</a> and Jeremy Boreing in 2015. In the Badlands Media article &quot;A Glaring Double Standard,&quot; it is grouped among the outlets the source labels &quot;Con INC.&quot; that positioned themselves against cancel culture.</p><h2 id="role-in-the-free-speech-narrative" tabindex="-1">Role in the free speech narrative <a class="header-anchor" href="#role-in-the-free-speech-narrative" aria-label="Permalink to &quot;Role in the free speech narrative&quot;">​</a></h2><p>The article describes the Daily Wire and the Babylon Bee as &quot;popular Con INC. outlets&quot; among the self-proclaimed free speech champions who &quot;billed themselves as &#39;opposed to cancel culture,&#39; advocated for freedom of thought, and rallied against the policing of public discourse — especially when conservatives were fired from their jobs for expressing their beliefs.&quot;</p><h2 id="coverage-of-the-carano-firing" tabindex="-1">Coverage of the Carano firing <a class="header-anchor" href="#coverage-of-the-carano-firing" aria-label="Permalink to &quot;Coverage of the Carano firing&quot;">​</a></h2><p>The source cites a February 2021 Daily Wire piece by Tim Pierce titled &quot;Shapiro: Gina Carano Firing Part Of A Movement To &#39;Expel&#39; Half Of America,&quot; which reported on <a href="/entities/ben-shapiro">Shapiro</a>&#39;s reaction to Disney&#39;s firing of actress <a href="/entities/gina-carano">Gina Carano</a>. The article uses this as an example of the right&#39;s free speech advocacy before October 7. <a href="/entities/ryan-delarme">Ryan DeLarme</a>, the article&#39;s author, argues the same figures failed to apply this standard after the firing of Israel critics.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/daily-wire.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dailyWire = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dailyWire as default
};
