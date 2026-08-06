import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anna Gomez","description":"","frontmatter":{"title":"Anna Gomez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["fcc","broadcast","first-amendment"],"sources":["raw/badlands-brief-1c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/anna-gomez.md","filePath":"entities/anna-gomez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anna-gomez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anna-gomez" tabindex="-1">Anna Gomez <a class="header-anchor" href="#anna-gomez" aria-label="Permalink to &quot;Anna Gomez&quot;">​</a></h1><p>Anna Gomez is a Commissioner of the <a href="/entities/federal-communications-commission">Federal Communications Commission</a>. In July 2026 she responded to President <a href="/entities/donald-trump">Donald Trump</a>&#39;s call to revoke the broadcast licenses of networks that declined to carry his primetime address on election security, saying the proposal was unconstitutional and that broadcasters are not subject to FCC penalties for choosing not to air a presidential speech.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Spain Wins The [American] World Cup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anna-gomez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const annaGomez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  annaGomez as default
};
