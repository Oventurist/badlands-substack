import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anders Kompass","description":"","frontmatter":{"title":"Anders Kompass","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["whistleblower","united-nations","africa","trafficking"],"sources":["raw/badlands-brief-5a2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/anders-kompass.md","filePath":"entities/anders-kompass.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anders-kompass.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anders-kompass" tabindex="-1">Anders Kompass <a class="header-anchor" href="#anders-kompass" aria-label="Permalink to &quot;Anders Kompass&quot;">​</a></h1><p>Anders Kompass is a former <a href="/entities/united-nations">United Nations</a> aid worker who became a whistleblower.[1]</p><h2 id="disclosure" tabindex="-1">Disclosure <a class="header-anchor" href="#disclosure" aria-label="Permalink to &quot;Disclosure&quot;">​</a></h2><p>Badlands commentary recounts that the French and UN occupation of North Africa led to a major scandal when Kompass exposed a pedophile ring run by French soldiers.[1] The episode is cited as evidence in that commentary that the interventions justified by militant activity in the Sahel produced their own abuses, alongside the argument that terrorist organizations in the region benefit the <a href="/entities/state-department">State Department</a> and its partners.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tina Peters&#39; Sentence Commuted; ISIS Killed in Africa&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-5a2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-5a2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anders-kompass.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andersKompass = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andersKompass as default
};
