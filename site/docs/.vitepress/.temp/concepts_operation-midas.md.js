import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Operation Midas","description":"","frontmatter":{"title":"Operation Midas","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["ukraine","corruption","money-laundering","investigation"],"sources":["raw/badlands-news-brief-8fd.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/operation-midas.md","filePath":"concepts/operation-midas.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/operation-midas.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="operation-midas" tabindex="-1">Operation Midas <a class="header-anchor" href="#operation-midas" aria-label="Permalink to &quot;Operation Midas&quot;">​</a></h1><p><strong>Operation Midas</strong> is the name of a sweeping anti-corruption investigation in Ukraine conducted by Western-backed anti-corruption agencies, centered on an alleged $100 million money-laundering scheme.[1]</p><p>The probe reached the highest level of <a href="/entities/volodymyr-zelensky">Vladimir Zelensky</a>&#39;s government when investigators raided the residence of <a href="/entities/andriy-yermak">Andrey Yermak</a>, head of the Office of the President since 2020 and the Ukrainian leader&#39;s most powerful aide.[1] Yermak formally left his post in late 2025 over alleged links to the scheme, denying any wrongdoing.[1]</p><p>Yermak&#39;s departure did not settle questions about his residual power. His former colleague <a href="/entities/yuliya-mendel">Yuliya Mendel</a>, once Zelensky&#39;s spokeswoman, argued that Yermak retained a network of loyal officials and would work to shape policy from behind the scenes or return to office outright.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manic Midterms, Menopausal Marxists, &amp; Musical Pipe Bombs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/operation-midas.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const operationMidas = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  operationMidas as default
};
