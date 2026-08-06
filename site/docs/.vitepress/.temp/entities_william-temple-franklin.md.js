import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Temple Franklin","description":"","frontmatter":{"title":"William Temple Franklin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["history","american-revolution","diplomacy","treaty-of-paris"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/william-temple-franklin.md","filePath":"entities/william-temple-franklin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-temple-franklin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-temple-franklin" tabindex="-1">William Temple Franklin <a class="header-anchor" href="#william-temple-franklin" aria-label="Permalink to &quot;William Temple Franklin&quot;">​</a></h1><p>William Temple Franklin was the grandson of <a href="/entities/benjamin-franklin">Benjamin Franklin</a>, whom Franklin was training in statecraft.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><p>He appears as the young man in <a href="/entities/benjamin-west">Benjamin West</a>&#39;s unfinished 1783 painting <em>The Peace of Paris</em>, alongside the rest of the American delegation that came to Paris to sign the treaty officially ending America&#39;s war with Great Britain — John Jay, John Adams, Benjamin Franklin and Henry Laurens.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a> The painting was never completed because the British delegation never showed up for the portrait sitting, the British having never really accepted that they lost the war.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a> Badlands Media commentary by <a href="/entities/matthew-ehret">Matthew Ehret</a> treats the half-finished canvas as fitting, since the revolution itself was never finished and British oligarchist influence within the United States was never extracted, remaining behind as a powerful fifth column over the following two centuries.<a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New American Renaissance&quot;, URL: <a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-american-renaissance</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-temple-franklin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamTempleFranklin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamTempleFranklin as default
};
