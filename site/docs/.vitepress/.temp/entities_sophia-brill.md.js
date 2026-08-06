import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sophia Brill","description":"","frontmatter":{"title":"Sophia Brill","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","national-security-division","mar-a-lago"],"sources":["raw/badlands-brief-2c5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/sophia-brill.md","filePath":"entities/sophia-brill.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sophia-brill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sophia-brill" tabindex="-1">Sophia Brill <a class="header-anchor" href="#sophia-brill" aria-label="Permalink to &quot;Sophia Brill&quot;">​</a></h1><p>Sophia Brill is an attorney in the National Security Division of the U.S. <a href="/entities/department-of-justice">Justice Department</a>.[1]</p><p>Brill is identified as the recipient of an August 10, 2022 internal email from senior DOJ official <a href="/entities/patty-stemler">Patty Stemler</a>, sent two days after the <a href="/entities/fbi">FBI</a> raid on <a href="/entities/donald-trump">Donald Trump</a>&#39;s <a href="/entities/mar-a-lago">Mar-a-Lago</a> residence, in which Stemler questioned whether Trump had declassified the seized documents and observed that the president as Commander in Chief is not necessarily bound by standard declassification procedures.[1] The exchange, obtained by Just the News, surfaced during the Department&#39;s review of federal law enforcement actions tied to the <a href="/concepts/weaponization-of-government">weaponization of government</a> investigation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bioweapons Sneak Into the News Cycle as Israeli Shenanigans Ensue&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-2c5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-2c5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sophia-brill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sophiaBrill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sophiaBrill as default
};
