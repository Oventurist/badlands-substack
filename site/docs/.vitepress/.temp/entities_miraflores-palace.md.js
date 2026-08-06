import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Miraflores Palace","description":"","frontmatter":{"title":"Miraflores Palace","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venezuela","government","caracas"],"sources":["raw/badlands-brief-e8d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/miraflores-palace.md","filePath":"entities/miraflores-palace.md","lastUpdated":null}');
const _sfc_main = { name: "entities/miraflores-palace.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="miraflores-palace" tabindex="-1">Miraflores Palace <a class="header-anchor" href="#miraflores-palace" aria-label="Permalink to &quot;Miraflores Palace&quot;">​</a></h1><p>Miraflores Palace in Caracas is the official seat of the presidency of <a href="/entities/venezuela">Venezuela</a>.[1]</p><p>Following the removal of President <a href="/entities/nicolas-maduro">Nicolás Maduro</a> under <a href="/concepts/operation-absolute-resolve">Operation Absolute Resolve</a>, Vice President and Oil Minister <a href="/entities/delcy-rodriguez">Delcy Rodríguez</a> was sworn in at the palace as interim president in January 2026.[1] Gunfire was reported at Miraflores following the swearing-in; according to some accounts, security forces at the palace were firing at a drone.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Miraflores New Tenant, Walz Awakens, &amp; Kelly&#39;s Court Martial&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e8d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e8d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/miraflores-palace.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mirafloresPalace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mirafloresPalace as default
};
