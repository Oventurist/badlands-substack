import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fort Bliss","description":"","frontmatter":{"title":"Fort Bliss","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","border","army","texas"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/fort-bliss.md","filePath":"entities/fort-bliss.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fort-bliss.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fort-bliss" tabindex="-1">Fort Bliss <a class="header-anchor" href="#fort-bliss" aria-label="Permalink to &quot;Fort Bliss&quot;">​</a></h1><p>Fort Bliss is a major U.S. Army installation in West Texas, near the southern border.[1]</p><h2 id="role-in-border-deployment" tabindex="-1">Role in border deployment <a class="header-anchor" href="#role-in-border-deployment" aria-label="Permalink to &quot;Role in border deployment&quot;">​</a></h2><p>The base has been instrumental in the deployment of troops and equipment to the U.S. southern border and has served as a hub for military deportation flights.[1]</p><h2 id="april-2025-vehicle-accident" tabindex="-1">April 2025 vehicle accident <a class="header-anchor" href="#april-2025-vehicle-accident" aria-label="Permalink to &quot;April 2025 vehicle accident&quot;">​</a></h2><p>In mid-April 2025, two service members died and another was seriously injured in a vehicle accident near Santa Teresa, New Mexico, just west of Fort Bliss.[1] The military had not released further details about the accident or the identities of the service members involved at the time of reporting by <a href="/entities/the-independent">The Independent</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fort-bliss.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fortBliss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fortBliss as default
};
