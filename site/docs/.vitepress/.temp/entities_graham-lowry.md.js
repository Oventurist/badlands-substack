import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Graham Lowry","description":"","frontmatter":{"title":"Graham Lowry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["history","historian","american-revolution","colonial-america"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/graham-lowry.md","filePath":"entities/graham-lowry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/graham-lowry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="graham-lowry" tabindex="-1">Graham Lowry <a class="header-anchor" href="#graham-lowry" aria-label="Permalink to &quot;Graham Lowry&quot;">​</a></h1><p>Graham Lowry was a historian, described by <a href="/entities/matthew-ehret">Matthew Ehret</a> as the author of the magnum opus <em>How the Nation Was Won: Volume 1 (1630–1757)</em>.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><p>Ehret credits Lowry with brilliantly demonstrating that the networks led by <a href="/entities/benjamin-franklin">Benjamin Franklin</a> had been planning out the conditions for declaring independence for decades before the American Revolution, rather than reacting to events of the 1770s.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a> Lowry&#39;s book also treats at length the work of <a href="/entities/william-penn">William Penn</a> in developing the Pennsylvania Colony along lines set forth by John Winthrop Jr and John Winthrop, rather than as a vehicle for imperial wealth extraction.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New American Renaissance&quot;, URL: <a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-american-renaissance</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/graham-lowry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const grahamLowry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  grahamLowry as default
};
