import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tim Kaine","description":"","frontmatter":{"title":"Tim Kaine","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-senate","war-powers","venezuela","democrats"],"sources":["raw/badlands-brief-c07.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tim-kaine.md","filePath":"entities/tim-kaine.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tim-kaine.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tim-kaine" tabindex="-1">Tim Kaine <a class="header-anchor" href="#tim-kaine" aria-label="Permalink to &quot;Tim Kaine&quot;">​</a></h1><p>Tim Kaine is a United States Senator who led a bipartisan war powers resolution in the 119th Congress that would have required President <a href="/entities/donald-trump">Donald Trump</a> to obtain congressional approval before taking further military action in or against <a href="/entities/venezuela">Venezuela</a>.[1]</p><h2 id="venezuela-war-powers-resolution" tabindex="-1">Venezuela war powers resolution <a class="header-anchor" href="#venezuela-war-powers-resolution" aria-label="Permalink to &quot;Venezuela war powers resolution&quot;">​</a></h2><p>The Kaine-led measure advanced in the <a href="/entities/united-states-senate">Senate</a> on January 8, 2026, by a 52–47 procedural vote, drawing support from several Republicans in addition to Democrats.[1] On January 14, 2026, the Senate reversed course and voted 51–50 to block the resolution, with Vice President <a href="/entities/jd-vance">JD Vance</a> casting the tie-breaking vote.[1] Senators <a href="/entities/josh-hawley">Josh Hawley</a> and <a href="/entities/todd-young">Todd Young</a> voted against the measure after previously supporting its advancement, and the resolution did not become law.[1] Democrats publicly decried the outcome.[1]</p><p>The episode was folded into a broader <a href="/entities/badlands-media">Badlands Media</a> argument that the long-teased Venezuela conflict had been a narrative operation that Trump ultimately declined to convert into kinetic action.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;13 Germans, A Seized Smartwatch, &amp; An American Tithe&#39;s Worth of Fraud&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c07" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c07</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tim-kaine.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timKaine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timKaine as default
};
