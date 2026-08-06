import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Space Development Agency","description":"","frontmatter":{"title":"Space Development Agency","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","space","satellites","defense"],"sources":["raw/badlands-brief-ec9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/space-development-agency.md","filePath":"entities/space-development-agency.md","lastUpdated":null}');
const _sfc_main = { name: "entities/space-development-agency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="space-development-agency" tabindex="-1">Space Development Agency <a class="header-anchor" href="#space-development-agency" aria-label="Permalink to &quot;Space Development Agency&quot;">​</a></h1><p>The Space Development Agency (SDA) is the US defense organization developing the Transport Layer, a military satellite communications network already under development as of 2026.[1]</p><p>When the <a href="/entities/united-states-space-force">US Space Force</a> awarded <a href="/entities/spacex">SpaceX</a> a $2.29 billion contract in May 2026 to build the <a href="/concepts/space-data-network-backbone">Space Data Network Backbone</a>, officials specified that the new effort would work alongside the SDA&#39;s Transport Layer program, with both systems expected to operate together as part of a larger War Department communications architecture.[1] The pairing reflects a broader push to speed up military space acquisitions through rapid prototyping and commercial partnerships while expanding the industrial base supporting US national security space programs.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Carefree Midterms, Space Networks, &amp; Turned Tables&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-ec9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-ec9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/space-development-agency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spaceDevelopmentAgency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  spaceDevelopmentAgency as default
};
