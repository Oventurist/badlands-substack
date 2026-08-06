import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Six Networks","description":"","frontmatter":{"title":"Six Networks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["china","infrastructure","artificial-intelligence","energy"],"sources":["raw/badlands-brief-bb1.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/six-networks.md","filePath":"concepts/six-networks.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/six-networks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="six-networks" tabindex="-1">Six Networks <a class="header-anchor" href="#six-networks" aria-label="Permalink to &quot;Six Networks&quot;">​</a></h1><p>&quot;Six Networks&quot; is the name given to Beijing&#39;s broader infrastructure mobilization program, of which the country&#39;s massive AI data-center buildout forms a central element.[1] The framework integrates computing capacity with power, water, communications, logistics and other foundational systems under state direction and financing.[1]</p><p>The <a href="/concepts/china-ai-data-center-buildout">Chinese AI data-center buildout</a> — roughly 2 trillion yuan ($295 billion) over five years — sits inside this larger mobilization, which is designed to ensure that compute growth is matched by the electricity, water and physical rails required to sustain it.[1]</p><p>Badlands contributor <a href="/entities/burning-bright">Burning Bright</a> read the Six Networks framing as evidence that the true payload of the apparent <a href="/entities/china">China</a>–United States AI rivalry is not model supremacy but the energy and computing mesh itself, with frontier models functioning as the &quot;justification layer&quot; for sovereign-scale infrastructure.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Peaceful Retaliations, Futuristic Fusions and Based Puritans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bb1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bb1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/six-networks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sixNetworks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sixNetworks as default
};
