import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Aleksey Likhachev","description":"","frontmatter":{"title":"Aleksey Likhachev","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","nuclear","rosatom","energy"],"sources":["raw/badlands-brief-70c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/aleksey-likhachev.md","filePath":"entities/aleksey-likhachev.md","lastUpdated":null}');
const _sfc_main = { name: "entities/aleksey-likhachev.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="aleksey-likhachev" tabindex="-1">Aleksey Likhachev <a class="header-anchor" href="#aleksey-likhachev" aria-label="Permalink to &quot;Aleksey Likhachev&quot;">​</a></h1><p>Aleksey Likhachev is the chief executive of <a href="/entities/rosatom">Rosatom</a>, the Russian state nuclear corporation.[1]</p><h2 id="statements-on-the-zaporozhye-strike" tabindex="-1">Statements on the Zaporozhye strike <a class="header-anchor" href="#statements-on-the-zaporozhye-strike" aria-label="Permalink to &quot;Statements on the Zaporozhye strike&quot;">​</a></h2><p>Following a fiber-optic-guided drone strike on the machine hall of the sixth power unit at the <a href="/entities/zaporozhye-nuclear-power-plant">Zaporozhye Nuclear Power Plant</a> in May 2026, Likhachev warned of the consequences of an explosion or fire at the facility, stating that resulting radiation would primarily endanger <a href="/entities/ukraine">Ukraine</a> and neighbouring European Union countries.[1] Rosatom, which has operated the plant under Russian control since 2022, characterized the strike as Kiev&#39;s first deliberate attack on the plant&#39;s main equipment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Taps Surprising New DNI While Media Freaks Out About Everything&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-70c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-70c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/aleksey-likhachev.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alekseyLikhachev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alekseyLikhachev as default
};
