import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Malthusianism","description":"","frontmatter":{"title":"Malthusianism","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["population","ideology","climate","depopulation"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/malthusianism.md","filePath":"concepts/malthusianism.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/malthusianism.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="malthusianism" tabindex="-1">Malthusianism <a class="header-anchor" href="#malthusianism" aria-label="Permalink to &quot;Malthusianism&quot;">​</a></h1><p>Malthusianism is the theory that population growth is potentially exponential while the growth of the food supply is linear, so that humanity is doomed unless its growth is restrained.[1] It derives from a 1798 essay by Thomas Robert Malthus, <em>An Essay on the Principle of Population</em>.[1]</p><p>Badlands commentary describes the doctrine&#39;s restraint mechanisms as war, famine and disease, and characterizes its subscribers as elitist oligarchs who believe enforcing such restraint is their moral obligation.[1] In that framing, the Intergovernmental Panel on Climate Change has since 1988 pursued &quot;subversive psyops&quot; grounded in Malthusian premises.[1] The concept was invoked in coverage of Mexican president-elect <a href="/entities/claudia-sheinbaum">Claudia Sheinbaum</a>, a PhD climate scientist who has contributed to the IPCC.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/malthusianism.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const malthusianism = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  malthusianism as default
};
