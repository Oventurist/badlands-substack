import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sara Rodriguez","description":"","frontmatter":{"title":"Sara Rodriguez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["democrats","wisconsin","elections"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/sara-rodriguez.md","filePath":"entities/sara-rodriguez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sara-rodriguez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sara-rodriguez" tabindex="-1">Sara Rodriguez <a class="header-anchor" href="#sara-rodriguez" aria-label="Permalink to &quot;Sara Rodriguez&quot;">​</a></h1><p>Sara Rodriguez is the Lieutenant Governor of Wisconsin and a candidate in the state&#39;s 2026 Democratic gubernatorial primary.[1]</p><p>Some Wisconsin Democratic leaders moved to consolidate support behind Rodriguez as concern grew about the momentum of state Rep. Francesca Hong in the gubernatorial primary.[1] The consolidation formed part of a wider effort by moderate Democratic groups, who argued that candidates in competitive districts should distance themselves from positions Republicans could exploit in general-election attacks, following a string of progressive primary victories.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sara-rodriguez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const saraRodriguez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  saraRodriguez as default
};
