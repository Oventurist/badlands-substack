import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Office of Strategic Services","description":"","frontmatter":{"title":"Office of Strategic Services","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["oss","cia-precursor","wwii","labor"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/office-of-strategic-services.md","filePath":"entities/office-of-strategic-services.md","lastUpdated":null}');
const _sfc_main = { name: "entities/office-of-strategic-services.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="office-of-strategic-services" tabindex="-1">Office of Strategic Services <a class="header-anchor" href="#office-of-strategic-services" aria-label="Permalink to &quot;Office of Strategic Services&quot;">​</a></h1><p>The Office of Strategic Services (OSS) was the wartime U.S. intelligence agency and the precursor to the <a href="/entities/cia">Central Intelligence Agency</a>.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a> The article dates the exploitation of American labor for political ends to the closing days of World War II, when the OSS began collaborating with American unions to counter emerging communist influence in Europe.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><p>That collaboration predated the 1955 creation of the <a href="/entities/afl-cio">AFL-CIO</a> and ran in parallel with the AFL&#39;s own <a href="/entities/free-trade-union-committee">Free Trade Union Committee</a>, established in 1944.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a> When the CIA was created and the Cold War came into focus, interventionists in government recognized the work the AFL had already been doing in Europe and chose to operate through union channels because foreign workers were more likely to trust fellow union members.<a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A More Perfect (Labor) Union&quot;, URL: <a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-more-perfect-labor-union</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/office-of-strategic-services.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const officeOfStrategicServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  officeOfStrategicServices as default
};
