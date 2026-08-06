import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jörg Urban","description":"","frontmatter":{"title":"Jörg Urban","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","saxony","afd","elections"],"sources":["raw/badlands-news-brief-711.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/joerg-urban.md","filePath":"entities/joerg-urban.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joerg-urban.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jorg-urban" tabindex="-1">Jörg Urban <a class="header-anchor" href="#jorg-urban" aria-label="Permalink to &quot;Jörg Urban&quot;">​</a></h1><p>Jörg Urban is the state and parliamentary group leader of the <a href="/entities/alternative-for-germany">Alternative for Germany</a> (AfD) in Saxony.[1]</p><h2 id="response-to-the-2024-saxony-election-error" tabindex="-1">Response to the 2024 Saxony election error <a class="header-anchor" href="#response-to-the-2024-saxony-election-error" aria-label="Permalink to &quot;Response to the 2024 Saxony election error&quot;">​</a></h2><p>After the <a href="/concepts/2024-saxony-state-election">2024 Saxony state election</a>, in which the AfD finished first but lost a parliamentary seat to an alleged vote-counting software error, Urban announced that the party would investigate.[1] &quot;We want to know exactly what went wrong,&quot; he said in a statement, demanding an exact error analysis and adding, &quot;If there are any irregularities, we will take legal action.&quot;[1] The disputed seat cost the AfD its blocking majority in the state parliament, which would have allowed it to block the appointment of certain judges in Saxony.[1] The party simultaneously called for an end to <a href="/concepts/mail-in-voting">mail-in ballots</a>, citing security concerns and shady practices.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Not so Brief Full of Sovereign SIGNAL&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-711" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-711</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joerg-urban.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joergUrban = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joergUrban as default
};
