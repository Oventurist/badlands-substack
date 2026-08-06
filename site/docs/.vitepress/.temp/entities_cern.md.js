import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CERN","description":"","frontmatter":{"title":"CERN","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["science","particle-physics","large-hadron-collider","dark-matter"],"sources":["raw/badlands-news-brief-4c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/cern.md","filePath":"entities/cern.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cern.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cern" tabindex="-1">CERN <a class="header-anchor" href="#cern" aria-label="Permalink to &quot;CERN&quot;">​</a></h1><p>CERN, the European Organization for Nuclear Research, operates the Large Hadron Collider (LHC), the world&#39;s largest and most powerful particle accelerator.[1]</p><h2 id="large-hadron-collider" tabindex="-1">Large Hadron Collider <a class="header-anchor" href="#large-hadron-collider" aria-label="Permalink to &quot;Large Hadron Collider&quot;">​</a></h2><p>Theories have suggested there are 17 different particle groups, and CERN confirmed the existence of one — the Higgs boson — using the LHC in 2012.[1] After a two-year hibernation, the organization restarted the collider with hopes of unraveling further mysteries, specifically dark matter.[1] Scientists began preliminary tests by sending billions of protons around the LHC&#39;s ring of superconducting magnets to boost their energy and confirm the $4 billion machine was in working condition.[1]</p><h2 id="april-2024-eclipse-run" tabindex="-1">April 2024 eclipse run <a class="header-anchor" href="#april-2024-eclipse-run" aria-label="Permalink to &quot;April 2024 eclipse run&quot;">​</a></h2><p>Badlands highlighted reporting that CERN planned to smash protons together on April 8, 2024 — the date of a total solar eclipse across North America — to search for invisible particles said to secretly power the universe.[1] The collider would shoot the protons down a 17-mile-long tunnel at nearly the speed of light to recreate conditions a second after the Big Bang.[1] The coincidence of the experiment with the eclipse attracted attention within the Truth Community.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Trump Counters, SBF Pleads &amp; Disney Dies?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cern.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cern = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cern as default
};
