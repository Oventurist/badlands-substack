import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bilderberg","description":"","frontmatter":{"title":"Bilderberg","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["elite-networks","deep-state","foreign-policy","think-tank"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/bilderberg.md","filePath":"entities/bilderberg.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bilderberg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bilderberg" tabindex="-1">Bilderberg <a class="header-anchor" href="#bilderberg" aria-label="Permalink to &quot;Bilderberg&quot;">​</a></h1><p>Bilderberg, the annual private conference of North American and European political, financial and industrial leaders, is cited in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> as one of the &quot;prestigious deep political think tanks&quot; at which the foreign policy establishment convenes.</p><p>The article&#39;s specific claim is that <a href="/entities/tom-donilon">tom-donilon</a> — Obama&#39;s National Security Advisor, a key policy figure behind the <a href="/concepts/joint-comprehensive-plan-of-action">Iran Deal</a>, and later chairman of the BlackRock Investment Institute — has been a regular fixture at Bilderberg and sat on its steering committee. It groups Bilderberg with the <a href="/entities/council-on-foreign-relations">council-on-foreign-relations</a>, the <a href="/entities/trilateral-commission">trilateral-commission</a> and the <a href="/entities/world-economic-forum">world-economic-forum</a> as the venues where &quot;the heads of industry, finance, military, intelligence and politics convene.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bilderberg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bilderberg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bilderberg as default
};
