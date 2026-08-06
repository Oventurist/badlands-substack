import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Dinesh D'Souza","description":"","frontmatter":{"title":"Dinesh D'Souza","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","commentary","conservative-movement","elections"],"sources":["raw/badlands-brief-5ba.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dinesh-dsouza.md","filePath":"entities/dinesh-dsouza.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/dinesh-dsouza.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dinesh-d-souza" tabindex="-1">Dinesh D&#39;Souza <a class="header-anchor" href="#dinesh-d-souza" aria-label="Permalink to &quot;Dinesh D&#39;Souza&quot;">​</a></h1><p>Dinesh D&#39;Souza is a conservative author and filmmaker.[1]</p><p>In July 2026 he was among the prominent conservative figures who condemned <a href="/entities/candace-owens">Candace Owens</a> after evidence from <a href="/entities/tyler-robinson">Tyler Robinson</a>&#39;s preliminary hearing was said to undercut her claims of a conspiracy in the murder of <a href="/entities/charlie-kirk">Charlie Kirk</a>, calling Owens a &quot;malignant narcissist.&quot;[1] <a href="/entities/ben-shapiro">Ben Shapiro</a>, <a href="/entities/laura-loomer">Laura Loomer</a>, Catturd and Lauren Southern also condemned her.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Guardians, Shields, &amp; Iranian House Arrest&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-5ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-5ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dinesh-dsouza.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dineshDsouza = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dineshDsouza as default
};
