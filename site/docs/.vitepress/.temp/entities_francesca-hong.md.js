import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Francesca Hong","description":"","frontmatter":{"title":"Francesca Hong","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["democrats","progressives","wisconsin","elections"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/francesca-hong.md","filePath":"entities/francesca-hong.md","lastUpdated":null}');
const _sfc_main = { name: "entities/francesca-hong.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="francesca-hong" tabindex="-1">Francesca Hong <a class="header-anchor" href="#francesca-hong" aria-label="Permalink to &quot;Francesca Hong&quot;">​</a></h1><p>Francesca Hong is a Wisconsin state representative and progressive candidate in the state&#39;s 2026 Democratic gubernatorial primary.[1]</p><p>Hong&#39;s momentum in the primary prompted some Wisconsin Democratic leaders to consolidate support behind Lt. Gov. <a href="/entities/sara-rodriguez">Sara Rodriguez</a>.[1] Her candidacy was cited as one instance of a broader progressive surge that alarmed moderate Democrats following left-wing primary victories in New York City and elsewhere.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/francesca-hong.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const francescaHong = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  francescaHong as default
};
