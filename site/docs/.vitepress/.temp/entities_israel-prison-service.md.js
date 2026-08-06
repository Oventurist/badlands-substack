import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Israel Prison Service","description":"","frontmatter":{"title":"Israel Prison Service","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","prisons","detainees","crocodiles"],"sources":["raw/badlands-brief-1c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/israel-prison-service.md","filePath":"entities/israel-prison-service.md","lastUpdated":null}');
const _sfc_main = { name: "entities/israel-prison-service.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="israel-prison-service" tabindex="-1">Israel Prison Service <a class="header-anchor" href="#israel-prison-service" aria-label="Permalink to &quot;Israel Prison Service&quot;">​</a></h1><p>The Israel Prison Service is the agency operating <a href="/entities/israel">Israel</a>&#39;s prison facilities, including those holding Palestinian security detainees. In connection with National Security Minister <a href="/entities/itamar-ben-gvir">Itamar Ben Gvir</a>&#39;s proposal to surround such prisons with Nile crocodiles as an escape deterrent, the service sent officials to a crocodile farm to examine the practical aspects of the plan.[1]</p><p>The proposal became legally possible after Environmental Protection Minister <a href="/entities/idit-silman">Idit Silman</a> reclassified the Nile crocodile into a category permitting security agencies to keep the animals under specified conditions, though reporting indicated no crocodiles have been deployed at prison facilities.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Spain Wins The [American] World Cup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/israel-prison-service.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const israelPrisonService = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  israelPrisonService as default
};
