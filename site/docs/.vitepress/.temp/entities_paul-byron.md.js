import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Byron","description":"","frontmatter":{"title":"Paul Byron","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","federal-judge","florida","january-6"],"sources":["raw/badlands-brief-bdc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/paul-byron.md","filePath":"entities/paul-byron.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-byron.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-byron" tabindex="-1">Paul Byron <a class="header-anchor" href="#paul-byron" aria-label="Permalink to &quot;Paul Byron&quot;">​</a></h1><p>Paul Byron is a United States District Judge in Florida, appointed by President <a href="/entities/barack-obama">Barack Obama</a>.[1]</p><h2 id="jan-6-damages-case" tabindex="-1">Jan. 6 damages case <a class="header-anchor" href="#jan-6-damages-case" aria-label="Permalink to &quot;Jan. 6 damages case&quot;">​</a></h2><p>Byron was assigned the proposed class action brought by participants in the January 6, 2021 Capitol breach against the federal government, the <a href="/concepts/jan-6-excessive-force-lawsuit">Jan. 6 excessive force lawsuit</a>, which seeks tens of millions of dollars over allegedly indiscriminate use of rubber bullets, chemical spray, and flashbangs by the <a href="/entities/united-states-capitol-police">US Capitol Police</a> and the <a href="/entities/metropolitan-police-department-of-the-district-of-columbia">Metropolitan Police Department</a>.[1] Commentary in the <a href="/concepts/badlands-brief">Badlands Brief</a> noted his status as an Obama appointee when reporting the assignment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Reversed Rulings &amp; Reasonable Regimes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bdc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bdc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-byron.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulByron = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulByron as default
};
