import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alexus Grynkewich","description":"","frontmatter":{"title":"Alexus Grynkewich","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","eucom","russia","ukraine"],"sources":["raw/badlands-brief-abf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alexus-grynkewich.md","filePath":"entities/alexus-grynkewich.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alexus-grynkewich.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alexus-grynkewich" tabindex="-1">Alexus Grynkewich <a class="header-anchor" href="#alexus-grynkewich" aria-label="Permalink to &quot;Alexus Grynkewich&quot;">​</a></h1><p>General Alexus Grynkewich is the commander of <a href="/entities/united-states-european-command">US European Command</a>.[1]</p><h2 id="military-to-military-dialogue-with-russia" tabindex="-1">Military-to-military dialogue with Russia <a class="header-anchor" href="#military-to-military-dialogue-with-russia" aria-label="Permalink to &quot;Military-to-military dialogue with Russia&quot;">​</a></h2><p>Following trilateral talks in Abu Dhabi on February 4–5, 2026 among delegations from the United States, <a href="/entities/ukraine">Ukraine</a> and the Russian Federation, the United States and <a href="/entities/russia">Russia</a> agreed to establish a military-to-military dialogue to be led by Grynkewich.[1] The channel had been suspended prior to the onset of the conflict in Ukraine and was described in the readout posted by Special Envoy <a href="/entities/steve-witkoff">Steve Witkoff</a> as crucial to achieving and maintaining peace.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Long-Term Legal Remedies &amp; A Reboot of Russian Relations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-abf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-abf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alexus-grynkewich.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alexusGrynkewich = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alexusGrynkewich as default
};
