import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andrew Garbarino","description":"","frontmatter":{"title":"Andrew Garbarino","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","homeland-security","cisa","republican"],"sources":["raw/badlands-brief-7ed.md"],"confidence":"low"},"headers":[],"relativePath":"entities/andrew-garbarino.md","filePath":"entities/andrew-garbarino.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andrew-garbarino.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andrew-garbarino" tabindex="-1">Andrew Garbarino <a class="header-anchor" href="#andrew-garbarino" aria-label="Permalink to &quot;Andrew Garbarino&quot;">​</a></h1><p>Andrew Garbarino is a Republican member of the US House of Representatives from New York who serves as chairman of the House Homeland Security Committee.[1]</p><p>In February 2026 Garbarino commented publicly on personnel turmoil at the <a href="/entities/cisa">Cybersecurity and Infrastructure Security Agency</a>, saying it was &quot;good&quot; that a reported attempt to move chief information officer <a href="/entities/robert-costello">Robert Costello</a> out of his role had failed.[1] Costello nevertheless announced his departure from the agency the following month, after receiving transfer orders for possible reassignment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Religious Regime Change, Sacked Security Sacked, &amp; More Medicare Malice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andrew-garbarino.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andrewGarbarino = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andrewGarbarino as default
};
