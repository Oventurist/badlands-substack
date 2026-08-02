import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Office of Strategic Services","description":"","frontmatter":{"title":"Office of Strategic Services","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["intelligence","world-war-ii","cold-war","oss"],"sources":["raw/a-more-perfect-labor-union.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/office-of-strategic-services.md","filePath":"entities/office-of-strategic-services.md","lastUpdated":null}');
const _sfc_main = { name: "entities/office-of-strategic-services.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="office-of-strategic-services" tabindex="-1">Office of Strategic Services <a class="header-anchor" href="#office-of-strategic-services" aria-label="Permalink to &quot;Office of Strategic Services&quot;">​</a></h1><p>The Office of Strategic Services (OSS) was the United States&#39; wartime intelligence agency during World War II and the precursor to the <a href="/entities/cia">CIA</a>, established in 1942 and dissolved in 1945. In the Badlands Media article <a href="/concepts/a-more-perfect-labor-union">A More Perfect (Labor) Union</a>, the OSS is identified as the origin point of the U.S. practice of collaborating with American labor unions for covert political purposes.</p><h2 id="role-in-labor-operations" tabindex="-1">Role in labor operations <a class="header-anchor" href="#role-in-labor-operations" aria-label="Permalink to &quot;Role in labor operations&quot;">​</a></h2><p>The article states that &quot;the exploitation of labor for political ends began well before the AFL-CIO even existed,&quot; tracing the practice back to the closing days of World War II, &quot;when the U.S. Office of Strategic Services (OSS), the CIA&#39;s precursor, began collaborating with American unions to counter emerging communist influences in Europe.&quot; This early collaboration set the pattern that would later be institutionalized in the CIA&#39;s &quot;AFL-CIA&quot; partnership with the <a href="/entities/afl-cio">AFL-CIO</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-more-perfect-labor-union" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
