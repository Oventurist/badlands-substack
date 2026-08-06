import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amit Aisman","description":"","frontmatter":{"title":"Amit Aisman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","state-attorney","netanyahu-trial","prosecution"],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amit-aisman.md","filePath":"entities/amit-aisman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amit-aisman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amit-aisman" tabindex="-1">Amit Aisman <a class="header-anchor" href="#amit-aisman" aria-label="Permalink to &quot;Amit Aisman&quot;">​</a></h1><p>Amit Aisman is the State Attorney of Israel.[1]</p><p>On December 26, together with Attorney General <a href="/entities/gali-baharav-miara">Gali Baharav-Miara</a>, Aisman announced that they had ordered an investigation of <a href="/entities/sara-netanyahu">Sara Netanyahu</a> on suspicion of witness harassment and obstruction of justice.[1] The order followed a Channel 12 &quot;Uvda&quot; report alleging that she had directed an aide to orchestrate protests and an online campaign against <a href="/entities/hadas-klein">Hadas Klein</a>, a key witness in the corruption trial of Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>.[1] The investigation is being conducted by the Israel Police and the cybercrimes department of the State Attorney&#39;s Office.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amit-aisman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amitAisman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amitAisman as default
};
