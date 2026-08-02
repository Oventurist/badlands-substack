import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Space Force","description":"","frontmatter":{"title":"United States Space Force","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["organization","military","space","bitcoin"],"sources":["raw/are-we-entering-the-millennial-reign.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/united-states-space-force.md","filePath":"entities/united-states-space-force.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-states-space-force.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-space-force" tabindex="-1">United States Space Force <a class="header-anchor" href="#united-states-space-force" aria-label="Permalink to &quot;United States Space Force&quot;">​</a></h1><p>The <strong>United States Space Force</strong> (USSF) is the space warfare branch of the United States Armed Forces. It appears in the Badlands Media corpus chiefly through one of its officers: Major <a href="/entities/jason-lowery">Jason Lowery</a>, identified in the feature <a href="/concepts/are-we-entering-the-millennial-reign">&quot;Are We Entering the Millennial Reign?&quot;</a> as &quot;United State Space Force Major&quot; and as the author of <a href="/concepts/softwar"><em>Softwar</em></a>, a thesis arguing that <a href="/concepts/bitcoin">bitcoin</a> carries national strategic significance as an instrument of power projection.</p><p>The article&#39;s invocation of the Space Force is part of a broader argument that Bitcoin is best understood in military terms. It notes that every element of Bitcoin&#39;s underlying technology — TCP/IP, TOR, SHA-256 and GPS — was built by the military for nuclear-resistant, wartime application, and asks whether Bitcoin itself was released as a military weapon and digital counterinsurgency operation. Lowery&#39;s affiliation with the Space Force is used to lend institutional weight to that reading.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-we-entering-the-millennial-reign" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-states-space-force.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesSpaceForce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesSpaceForce as default
};
