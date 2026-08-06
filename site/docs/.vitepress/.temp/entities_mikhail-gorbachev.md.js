import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mikhail Gorbachev","description":"","frontmatter":{"title":"Mikhail Gorbachev","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["soviet-union","german-reunification","nato-expansion"],"sources":["raw/a-bright-red-line.md"],"confidence":"low"},"headers":[],"relativePath":"entities/mikhail-gorbachev.md","filePath":"entities/mikhail-gorbachev.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mikhail-gorbachev.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mikhail-gorbachev" tabindex="-1">Mikhail Gorbachev <a class="header-anchor" href="#mikhail-gorbachev" aria-label="Permalink to &quot;Mikhail Gorbachev&quot;">​</a></h1><p>Mikhail Gorbachev was the Soviet leader to whom, according to &quot;A Bright Red Line,&quot; the West promised that <a href="/entities/nato">NATO</a> would never creep eastward toward Russia after the fall of the Soviet Union.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a> In the negotiations over the reunification of Germany it was agreed that NATO would not expand &quot;one inch&quot; eastward.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a></p><p>The article stresses why this mattered to Moscow: the Russians were distrustful and fearful of NATO countries that had been devoted enemies for decades, and a reunified Germany was already a difficult pill to swallow — there was a reason Germany had been divided between East and West after World War II, and Russia had lost tens of millions of citizens to the Germans across both world wars.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a> Badlands treats the subsequent breach of that assurance, beginning under <a href="/entities/bill-clinton">Bill Clinton</a>, as the origin of the confrontation that culminated in 2022.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Bright Red Line&quot;, URL: <a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-bright-red-line</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mikhail-gorbachev.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikhailGorbachev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikhailGorbachev as default
};
