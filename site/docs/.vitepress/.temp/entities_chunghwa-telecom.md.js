import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chunghwa Telecom","description":"","frontmatter":{"title":"Chunghwa Telecom","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["taiwan","telecommunications","undersea-cables","infrastructure"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/chunghwa-telecom.md","filePath":"entities/chunghwa-telecom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chunghwa-telecom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chunghwa-telecom" tabindex="-1">Chunghwa Telecom <a class="header-anchor" href="#chunghwa-telecom" aria-label="Permalink to &quot;Chunghwa Telecom&quot;">​</a></h1><p>Chunghwa Telecom is Taiwan&#39;s principal telecommunications carrier and the operator of subsea communications infrastructure serving the island.[1]</p><p>On January 3, 2025, at approximately 12:40 PM, Chunghwa Telecom informed Taiwan&#39;s <a href="/entities/taiwan-coast-guard-administration">Coast Guard Administration</a> that a subsea communications cable near Keelung, off Taiwan&#39;s northern coast, had been severed. The notification triggered the interception of the Hong Kong-owned freighter Shunxin-39, which had been operating near Yehliu at the time.[1]</p><p>The company&#39;s role as the reporting party made it the initial detector of an incident that Badlands and international outlets linked to the wider pattern of <a href="/concepts/undersea-cable-sabotage">undersea cable sabotage</a> previously seen in the Baltic Sea.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chunghwa-telecom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chunghwaTelecom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chunghwaTelecom as default
};
