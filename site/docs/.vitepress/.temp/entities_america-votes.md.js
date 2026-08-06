import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"America Votes","description":"","frontmatter":{"title":"America Votes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nonprofit","voter-mobilization","federal-investigation"],"sources":["raw/badlands-brief-6b4.md"],"confidence":"low"},"headers":[],"relativePath":"entities/america-votes.md","filePath":"entities/america-votes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/america-votes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="america-votes" tabindex="-1">America Votes <a class="header-anchor" href="#america-votes" aria-label="Permalink to &quot;America Votes&quot;">​</a></h1><p>America Votes is a major nonprofit voter mobilization organization in the United States.[1]</p><h2 id="federal-subpoena" tabindex="-1">Federal subpoena <a class="header-anchor" href="#federal-subpoena" aria-label="Permalink to &quot;Federal subpoena&quot;">​</a></h2><p>Federal officials issued a subpoena to America Votes as part of a widening investigation tied to the <a href="/entities/ohio-organizing-collaborative">Ohio Organizing Collaborative</a>, according to sources familiar with the probe.[1] A former director and board member described the scope of the investigation as extensive and wide-ranging.[1] Badlands presented the subpoena as related to the broader federal scrutiny of voter registration operations that also produced the <a href="/concepts/skid-row-voter-fraud-investigation">Skid Row voter fraud investigation</a> in Los Angeles.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Deliberate Discombobulation Driving Transformational Change&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6b4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6b4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/america-votes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americaVotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americaVotes as default
};
