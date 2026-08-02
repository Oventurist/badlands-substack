import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Thomas Jefferson","description":"","frontmatter":{"title":"Thomas Jefferson","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["founding-father","president","elections","american-history"],"sources":["raw/always-fight-back.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/thomas-jefferson.md","filePath":"entities/thomas-jefferson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/thomas-jefferson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="thomas-jefferson" tabindex="-1">Thomas Jefferson <a class="header-anchor" href="#thomas-jefferson" aria-label="Permalink to &quot;Thomas Jefferson&quot;">​</a></h1><p>Thomas Jefferson was the third President of the United States and the principal author of the Declaration of Independence. He appears in the Badlands Media corpus through the essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a>, which cites the presidential election of 1800 as the first entry in a long American tradition of contested and disputed elections.</p><p>According to the article, the 1800 contest between Jefferson and incumbent President John Adams was thrown to the House of Representatives, which elected Jefferson only after 36 rounds of voting. The essay notes that the deadlock prompted the adoption of the Twelfth Amendment, offering it as evidence that public and institutional questioning of election outcomes has historically produced reforms that strengthened rather than undermined the electoral franchise — the central argument advanced against the plaintiffs&#39; theory in <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a></p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/thomas-jefferson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thomasJefferson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thomasJefferson as default
};
