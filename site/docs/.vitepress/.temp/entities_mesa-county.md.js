import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mesa County","description":"","frontmatter":{"title":"Mesa County","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colorado","elections","county-government","election-integrity"],"sources":["raw/badlands-brief-5a2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mesa-county.md","filePath":"entities/mesa-county.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mesa-county.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mesa-county" tabindex="-1">Mesa County <a class="header-anchor" href="#mesa-county" aria-label="Permalink to &quot;Mesa County&quot;">​</a></h1><p>Mesa County is a county in the U.S. state of Colorado whose election office became a focal point of national disputes over election administration following the 2020 presidential election.[1]</p><h2 id="role-in-the-tina-peters-case" tabindex="-1">Role in the Tina Peters case <a class="header-anchor" href="#role-in-the-tina-peters-case" aria-label="Permalink to &quot;Role in the Tina Peters case&quot;">​</a></h2><p><a href="/entities/tina-peters">Tina Peters</a> served as Mesa County Clerk and was convicted in 2024 for allowing unauthorized access to county voting systems, conduct tied to efforts to challenge the 2020 presidential election results.[1] Prosecutors said Peters enabled unauthorized access to Mesa County election equipment and data, copies of which later circulated among election-denial activists.[1] She was sentenced to roughly nine years in prison before Governor <a href="/entities/jared-polis">Jared Polis</a> commuted the sentence in May 2026.[1]</p><p>Because the underlying charges were state offenses arising from the administration of Mesa County&#39;s election equipment, Colorado officials maintained that presidential pardons could not reach the convictions, notwithstanding claims by President <a href="/entities/donald-trump">Donald Trump</a> in 2025 that he had pardoned Peters.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tina Peters&#39; Sentence Commuted; ISIS Killed in Africa&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-5a2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-5a2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mesa-county.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mesaCounty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mesaCounty as default
};
