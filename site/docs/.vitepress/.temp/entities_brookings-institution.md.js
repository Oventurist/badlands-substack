import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brookings Institution","description":"","frontmatter":{"title":"Brookings Institution","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["think-tank","foreign-policy","deep-state"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/brookings-institution.md","filePath":"entities/brookings-institution.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brookings-institution.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brookings-institution" tabindex="-1">Brookings Institution <a class="header-anchor" href="#brookings-institution" aria-label="Permalink to &quot;Brookings Institution&quot;">​</a></h1><p>The Brookings Institution, referred to in the source as the Brookings Institute, is a Washington-based public policy think tank listed in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> among the institutions comprising the Western &quot;old guard.&quot;</p><p>The article places Brookings alongside the <a href="/entities/atlantic-council">atlantic-council</a> and the <a href="/entities/council-on-foreign-relations">council-on-foreign-relations</a> as one of &quot;the various think tanks behind the <a href="/entities/european-union">EU</a>, the <a href="/entities/united-nations">UN</a> and <a href="/entities/nato">nato</a>&quot; — part of the interagency bureaucratic amalgam that the author says has long controlled and spread Western hegemony, and that fought to keep the United States inside the <a href="/concepts/joint-comprehensive-plan-of-action">Iran nuclear agreement</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brookings-institution.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brookingsInstitution = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brookingsInstitution as default
};
