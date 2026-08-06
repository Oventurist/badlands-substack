import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Johnson Jr.","description":"","frontmatter":{"title":"John Johnson Jr.","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["michigan","civil-rights","regulator"],"sources":["raw/badlands-news-brief-051.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-johnson-jr.md","filePath":"entities/john-johnson-jr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-johnson-jr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-johnson-jr" tabindex="-1">John Johnson Jr. <a class="header-anchor" href="#john-johnson-jr" aria-label="Permalink to &quot;John Johnson Jr.&quot;">​</a></h1><p>John Johnson Jr. is the executive director of the <a href="/entities/michigan-department-of-civil-rights">Michigan Department of Civil Rights</a>.[1]</p><p>In a briefing with reporters following the department&#39;s 15 November 2023 discrimination charge against salon owner <a href="/entities/christine-geiger">Christine Geiger</a> and her business Studio 8 Hair Lab, Johnson said: &quot;The truth is, based on a thorough investigation, that Studio 8 and its owner Christine Geiger, openly and repeatedly violated the <a href="/concepts/elliott-larsen-civil-rights-act">Elliott-Larsen Civil Rights Act</a>.&quot;[1] The charge followed complaints over Geiger&#39;s Facebook posts stating that people identifying as anything other than a man or woman should &quot;seek services at a local pet groomer.&quot;[1]</p><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> treated the department&#39;s action as an instance of <a href="/concepts/lawfare">lawfare</a>, arguing that the process itself functions as the punishment and that each such case serves as a potential building block toward new legal precedent.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Lawsuits Can Be Very Effective ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-051" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-051</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-johnson-jr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnJohnsonJr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnJohnsonJr as default
};
