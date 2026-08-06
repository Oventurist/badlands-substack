import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Joint Arctic Command","description":"","frontmatter":{"title":"Joint Arctic Command","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["denmark","arctic","greenland","military","nato"],"sources":["raw/badlands-brief-02a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/joint-arctic-command.md","filePath":"entities/joint-arctic-command.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joint-arctic-command.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joint-arctic-command" tabindex="-1">Joint Arctic Command <a class="header-anchor" href="#joint-arctic-command" aria-label="Permalink to &quot;Joint Arctic Command&quot;">​</a></h1><p>The <strong>Joint Arctic Command</strong> is the Danish military command responsible for defense and surveillance operations in and around <a href="/entities/greenland">Greenland</a> and the Faroe Islands.[1] It became a point of reference in January 2026 during the <a href="/concepts/greenland-tariff-dispute-2026">Greenland tariff dispute</a>, when a Danish general speaking for the command stated that there were no immediate Chinese or Russian naval threats near Greenland waters.[1]</p><p>The statement was significant because it undercut one of the stated security rationales for aggressive American action on the island, while simultaneously reaffirming that routine <a href="/entities/nato">NATO</a> collaboration between <a href="/entities/denmark">Denmark</a> and the United States continued despite the political rupture over tariffs and sovereignty.[1] The command&#39;s posture illustrated the split between the diplomatic confrontation playing out in public and the operational military relationship that persisted underneath it.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arctic Escalation and Tropic Trouble for the Financial System&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-02a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-02a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joint-arctic-command.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jointArcticCommand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jointArcticCommand as default
};
