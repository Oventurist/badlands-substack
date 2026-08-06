import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Qana Gas Field","description":"","frontmatter":{"title":"Qana Gas Field","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["energy","lebanon","israel","maritime-boundary"],"sources":["raw/badlands-brief-625.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/qana-gas-field.md","filePath":"concepts/qana-gas-field.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/qana-gas-field.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qana-gas-field" tabindex="-1">Qana Gas Field <a class="header-anchor" href="#qana-gas-field" aria-label="Permalink to &quot;Qana Gas Field&quot;">​</a></h1><p>The Qana Gas Field is an offshore natural gas prospect associated with Lebanese maritime waters that <a href="/entities/israel">Israel</a> has long sought to control, historically through lawfare over the maritime boundary.[1]</p><p>In April 2026, Badlands analysis argued that by pushing the effective Israeli line north toward Tyre and designating the resulting strip a &quot;Forward Defense Zone,&quot; Israel could justify shifting the maritime boundary and annexing the Qana field.[1] The gas field is thus presented as an economic motive layered beneath the stated security rationale for operations in southern <a href="/entities/lebanon">Lebanon</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mr. Nice Guy Leaves the Building (plus, Jewish Terrorism)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-625" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-625</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/qana-gas-field.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qanaGasField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qanaGasField as default
};
