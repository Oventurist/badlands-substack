import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dan Crenshaw","description":"","frontmatter":{"title":"Dan Crenshaw","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","republicans","congress","elections"],"sources":["raw/badlands-brief-174.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dan-crenshaw.md","filePath":"entities/dan-crenshaw.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dan-crenshaw.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dan-crenshaw" tabindex="-1">Dan Crenshaw <a class="header-anchor" href="#dan-crenshaw" aria-label="Permalink to &quot;Dan Crenshaw&quot;">​</a></h1><p>Dan Crenshaw is a Republican politician who represented Texas&#39;s 2nd congressional district in the United States House of Representatives for four terms before losing renomination in 2026.[1]</p><h2 id="_2026-primary-defeat" tabindex="-1">2026 primary defeat <a class="header-anchor" href="#_2026-primary-defeat" aria-label="Permalink to &quot;2026 primary defeat&quot;">​</a></h2><p>In the <a href="/concepts/2026-texas-primary-elections">March 2026 Texas primaries</a>, Crenshaw was defeated by state Rep. <a href="/entities/steve-toth">Steve Toth</a> in what was described as one of the cycle&#39;s most notable upsets.[1] <a href="/entities/ashe-in-america">Ashe in America</a> cited the loss as evidence of a &quot;war on incumbents&quot; in Texas in which establishment-aligned figures — described as &quot;regime darlings&quot; — were being ousted in both parties.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Conflicts, Cartels, &amp; Clemency&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-174" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-174</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dan-crenshaw.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const danCrenshaw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  danCrenshaw as default
};
