import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interpol","description":"","frontmatter":{"title":"Interpol","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","international","extradition","organized-crime"],"sources":["raw/badlands-news-brief-541.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/interpol.md","filePath":"entities/interpol.md","lastUpdated":null}');
const _sfc_main = { name: "entities/interpol.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="interpol" tabindex="-1">Interpol <a class="header-anchor" href="#interpol" aria-label="Permalink to &quot;Interpol&quot;">​</a></h1><p>Interpol is the international police cooperation organization whose &quot;red notice&quot; system is used to request that member-state law enforcement provisionally arrest a wanted person pending extradition or similar legal action.[1]</p><h2 id="role-in-the-2025-polish-organ-trafficking-arrest" tabindex="-1">Role in the 2025 Polish organ-trafficking arrest <a class="header-anchor" href="#role-in-the-2025-polish-organ-trafficking-arrest" aria-label="Permalink to &quot;Role in the 2025 Polish organ-trafficking arrest&quot;">​</a></h2><p>Interpol&#39;s red notice machinery was the operative instrument in the March 2025 detention of a Ukrainian woman at a railway crossing on the Poland–Ukraine border.[1] The 35-year-old, identified only as Ksenia P. under Polish privacy laws, had been wanted by Interpol since November 2020 and was detained by Polish border guards under the red notice.[1] She had been sentenced in <a href="/entities/kazakhstan">Kazakhstan</a> to twelve years in prison for participating in an organized criminal group trading in human organs, including the sale of 56 kidneys.[1] Prosecutors in Przemyśl, whose spokeswoman Marta Petkowska announced the arrest, did not explain why the woman was not in Kazakh custody at the time of her detention.[1] See <a href="/concepts/2025-poland-organ-trafficking-arrest">the arrest</a> for fuller coverage.[1]</p><p>Badlands commentary treated the case as evidence that extradition-averse jurisdictions and permissive banking systems are structurally central to transnational organ-trafficking networks, contrasting Interpol&#39;s notice system with states that decline to surrender their own nationals.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Unearthed Autopens, Inevitable Ceasefires, &amp; 56 Human Kidneys&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-541" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-541</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/interpol.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const interpol = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  interpol as default
};
