import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Laura Ingraham","description":"","frontmatter":{"title":"Laura Ingraham","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","fox-news","iran","commentary"],"sources":["raw/badlands-brief-509.md"],"confidence":"low"},"headers":[],"relativePath":"entities/laura-ingraham.md","filePath":"entities/laura-ingraham.md","lastUpdated":null}');
const _sfc_main = { name: "entities/laura-ingraham.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="laura-ingraham" tabindex="-1">Laura Ingraham <a class="header-anchor" href="#laura-ingraham" aria-label="Permalink to &quot;Laura Ingraham&quot;">​</a></h1><p><strong>Laura Ingraham</strong> is a Fox News host. In Badlands coverage of March 2026 she is noted for pressing Republican senators on the propriety of undisclosed contacts between US lawmakers and the Israeli government.[1]</p><h2 id="questioning-of-the-graham–netanyahu-meetings" tabindex="-1">Questioning of the Graham–Netanyahu meetings <a class="header-anchor" href="#questioning-of-the-graham–netanyahu-meetings" aria-label="Permalink to &quot;Questioning of the Graham–Netanyahu meetings&quot;">​</a></h2><p>During a Fox News segment reported in the March 10, 2026 <a href="/concepts/badlands-brief">Badlands Brief</a>, Ingraham questioned Senator <a href="/entities/ted-cruz">Ted Cruz</a> about what she characterized as &quot;secret meetings&quot; between Senator <a href="/entities/lindsey-graham">Lindsey Graham</a> and Israeli Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>, describing the matter as being &quot;of a totally different level&quot; than routine congressional travel.[1] Cruz defended the meetings as normal diplomatic engagement.[1]</p><p>Badlands commentary presented the segment as significant less for Ingraham&#39;s own position than for what it revealed: that scrutiny of legislators&#39; foreign entanglements had migrated into mainstream conservative broadcast media rather than remaining confined to independent outlets.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Election Exposure, Energy Angst &amp; War Rackets&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-509" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-509</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/laura-ingraham.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lauraIngraham = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lauraIngraham as default
};
