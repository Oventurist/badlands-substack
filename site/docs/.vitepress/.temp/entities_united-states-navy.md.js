import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Navy","description":"","frontmatter":{"title":"United States Navy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","us-navy","counter-narcotics","caribbean"],"sources":["raw/badlands-news-brief-5d5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/united-states-navy.md","filePath":"entities/united-states-navy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-states-navy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-navy" tabindex="-1">United States Navy <a class="header-anchor" href="#united-states-navy" aria-label="Permalink to &quot;United States Navy&quot;">​</a></h1><p>The United States Navy is the maritime service branch of the U.S. armed forces. In August 2025 it became the central instrument of the <a href="/concepts/2025-caribbean-naval-deployment">2025 Caribbean naval deployment</a>, in which eight warships were moved into Caribbean and Pacific waters near Central and South America.[1]</p><h2 id="role-in-the-venezuela-deployment" tabindex="-1">Role in the Venezuela deployment <a class="header-anchor" href="#role-in-the-venezuela-deployment" aria-label="Permalink to &quot;Role in the Venezuela deployment&quot;">​</a></h2><p>The deployed force comprised three destroyers, two landing dock ships, an amphibious assault ship, a cruiser, and a littoral combat ship.[1] Destroyers carried U.S. Coast Guard and law enforcement officials in order to conduct drug interdiction missions, an arrangement that allows military platforms to support civilian law enforcement authorities at sea.[1] The administration of <a href="/entities/donald-trump">Donald Trump</a> described the mission as an &quot;enhanced counter narcotics operation,&quot; while the government of <a href="/entities/nicolas-maduro">Nicolás Maduro</a> in <a href="/entities/venezuela">Venezuela</a> characterized it as preparation for invasion.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands commentary treated the naval movement as simultaneously a real military operation against drug cartels and a deliberately publicized narrative event, noting the unusual degree of advance signaling surrounding the deployment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Comedown Ops &amp; Southbound Warships&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5d5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5d5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-states-navy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesNavy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesNavy as default
};
