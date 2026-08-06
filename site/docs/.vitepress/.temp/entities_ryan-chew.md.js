import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ryan Chew","description":"","frontmatter":{"title":"Ryan Chew","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["elections","wisconsin","2020-election"],"sources":["raw/badlands-brief-f87.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ryan-chew.md","filePath":"entities/ryan-chew.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ryan-chew.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ryan-chew" tabindex="-1">Ryan Chew <a class="header-anchor" href="#ryan-chew" aria-label="Permalink to &quot;Ryan Chew&quot;">​</a></h1><p>Ryan Chew is an elections consultant associated with <a href="/entities/the-elections-group">The Elections Group</a> who figures in commentary about the administration of the 2020 presidential election in Wisconsin.[1]</p><h2 id="role-in-2020-election-commentary" tabindex="-1">Role in 2020 election commentary <a class="header-anchor" href="#role-in-2020-election-commentary" aria-label="Permalink to &quot;Role in 2020 election commentary&quot;">​</a></h2><p>Writing in the Badlands Brief in May 2026, <a href="/entities/ashe-in-america">Ashe in America</a> argued that Chew, along with former Milwaukee Election Commission director <a href="/entities/claire-woodall-vogg">Claire Woodall-Vogg</a>, &quot;need to be interrogated&quot; in connection with events at Milwaukee&#39;s <a href="/concepts/milwaukee-central-count-facility">Central Count facility</a> during the 2020 election.[1] The commentary noted Chew&#39;s affiliation with The Elections Group and drew a parallel to <a href="/entities/ryan-macias">Ryan Macias</a> of the same organization, who was described as delivering &quot;the answer needed&quot; during Georgia&#39;s 2020 recount.[1] Ashe presented the overlap as evidence of &quot;same sources and methods and actors across states,&quot; a recurring theme in <a href="/concepts/2020-election-fraud-claims">2020 election fraud claims</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Resigns; Iran Peace Deal on the Horizon&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-f87" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-f87</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ryan-chew.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ryanChew = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ryanChew as default
};
