import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"February 17 Brigade","description":"","frontmatter":{"title":"February 17 Brigade","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["libya","militia","benghazi","qatar"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"low"},"headers":[],"relativePath":"entities/february-17-brigade.md","filePath":"entities/february-17-brigade.md","lastUpdated":null}');
const _sfc_main = { name: "entities/february-17-brigade.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="february-17-brigade" tabindex="-1">February 17 Brigade <a class="header-anchor" href="#february-17-brigade" aria-label="Permalink to &quot;February 17 Brigade&quot;">​</a></h1><p>The February 17 Brigade was an elite Libyan militia unit. In 2011, after his release from prison, <a href="/entities/abdelhakim-belhaj">Abdelhakim Belhaj</a> travelled to <a href="/entities/qatar">Qatar</a> to take command of the brigade as the insurrection against the Libyan regime began.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a></p><p>The Badlands account identifies this as the force Belhaj would lead to topple and kill <a href="/entities/muammar-gaddafi">Muammar Gaddafi</a>.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a> It further notes that the February 17 Brigade was the Libyan unit later assigned as part of the security detail at the U.S. consulate in <a href="/entities/benghazi">Benghazi</a>, and states that the brigade did nothing to stop the attack there.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Conflict of Interest&quot;, URL: <a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-conflict-of-interest</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/february-17-brigade.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const february17Brigade = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  february17Brigade as default
};
