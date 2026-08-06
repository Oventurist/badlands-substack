import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steve Toth","description":"","frontmatter":{"title":"Steve Toth","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","republicans","elections","congress"],"sources":["raw/badlands-brief-174.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/steve-toth.md","filePath":"entities/steve-toth.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steve-toth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steve-toth" tabindex="-1">Steve Toth <a class="header-anchor" href="#steve-toth" aria-label="Permalink to &quot;Steve Toth&quot;">​</a></h1><p>Steve Toth is a Texas state representative who won the Republican primary for Texas&#39;s 2nd congressional district in 2026, defeating four-term incumbent Rep. <a href="/entities/dan-crenshaw">Dan Crenshaw</a>.[1]</p><p>The upset was among the most notable results of the <a href="/concepts/2026-texas-primary-elections">March 2026 Texas primaries</a> and was cited by <a href="/entities/badlands-media">Badlands Media</a> commentators as a leading example of grassroots Republican voters rejecting an incumbent widely regarded as establishment-aligned.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Conflicts, Cartels, &amp; Clemency&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-174" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-174</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steve-toth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steveToth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  steveToth as default
};
