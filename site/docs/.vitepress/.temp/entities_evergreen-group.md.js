import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Evergreen Group","description":"","frontmatter":{"title":"Evergreen Group","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["shipping","taiwan","supply-chain","deep-state"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/evergreen-group.md","filePath":"entities/evergreen-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/evergreen-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="evergreen-group" tabindex="-1">Evergreen Group <a class="header-anchor" href="#evergreen-group" aria-label="Permalink to &quot;Evergreen Group&quot;">​</a></h1><p>Evergreen Group, referred to in Badlands Brief commentary as the Evergreen Maritime Organization, is a Taiwan-based shipping conglomerate best known as the owner of the container ship Ever Given, which became lodged in the Suez Canal in 2021 and blocked the waterway for weeks, causing a global supply-chain disruption.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> invoked the Ever Given incident as a precedent for the 2026 shipping crisis in the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a>, describing the company as &quot;another proxy of the <a href="/concepts/deep-state">Deep State</a>.&quot;[1] He connected Evergreen to the June 2026 escalation through the tanker Ever Lovely, whose transit outside the Iran-designated shipping lanes — and whose apparent deactivation of its AIS transponder — he identified as the triggering event for the collapse of the U.S.–Iran memorandum of understanding.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/evergreen-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const evergreenGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  evergreenGroup as default
};
