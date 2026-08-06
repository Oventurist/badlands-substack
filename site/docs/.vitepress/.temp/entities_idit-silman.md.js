import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Idit Silman","description":"","frontmatter":{"title":"Idit Silman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","environment","crocodiles","prisons"],"sources":["raw/badlands-brief-1c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/idit-silman.md","filePath":"entities/idit-silman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/idit-silman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="idit-silman" tabindex="-1">Idit Silman <a class="header-anchor" href="#idit-silman" aria-label="Permalink to &quot;Idit Silman&quot;">​</a></h1><p>Idit Silman is <a href="/entities/israel">Israel</a>&#39;s Environmental Protection Minister. In July 2026 she reclassified the Nile crocodile into a species category that permits security agencies to keep the animals under specified conditions, a legal step that could allow their use for security purposes at prison facilities.[1]</p><p>Israeli media reported the change was intended to facilitate a proposal backed by National Security Minister <a href="/entities/itamar-ben-gvir">Itamar Ben Gvir</a>, and that the reclassification was made despite objections from the Israel Nature and Parks Authority and from the Environmental Protection Ministry&#39;s own legal adviser, who argued the proposal lacked sufficient legal and professional justification.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Spain Wins The [American] World Cup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/idit-silman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iditSilman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  iditSilman as default
};
