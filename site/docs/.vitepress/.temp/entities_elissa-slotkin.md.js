import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Elissa Slotkin","description":"","frontmatter":{"title":"Elissa Slotkin","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","politician","cia","congress"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/elissa-slotkin.md","filePath":"entities/elissa-slotkin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/elissa-slotkin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="elissa-slotkin" tabindex="-1">Elissa Slotkin <a class="header-anchor" href="#elissa-slotkin" aria-label="Permalink to &quot;Elissa Slotkin&quot;">​</a></h1><p>Elissa Slotkin is an American politician who served as a Democratic member of the U.S. House of Representatives from Michigan and was elected to the U.S. Senate in 2024. She previously worked as a Central Intelligence Agency (CIA) analyst. In the Badlands Media article &quot;A Glaring Double Standard,&quot; she is named among the supporters of the <a href="/entities/antisemitism-awareness-act">Antisemitism Awareness Act</a> whom the source associates with the &quot;deep state.&quot;</p><h2 id="role-in-the-article" tabindex="-1">Role in the article <a class="header-anchor" href="#role-in-the-article" aria-label="Permalink to &quot;Role in the article&quot;">​</a></h2><p>The article describes Slotkin as &quot;a CIA analyst turned Democrat politician&quot; and one of the bill&#39;s &quot;biggest supporters&quot; who &quot;were born and bred from the interagency blob, or &#39;deep state,&#39; political spooks.&quot; It presents her support for the Antisemitism Awareness Act as evidence of the author&#39;s claim that the interagency blob &quot;does not care how it achieves its goals&quot; — advancing censorship frameworks under either a Democratic or Republican administration.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/elissa-slotkin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elissaSlotkin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  elissaSlotkin as default
};
